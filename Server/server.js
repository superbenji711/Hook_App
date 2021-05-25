const bodyParser = require("body-parser"); //once a request is recived you can manipulate it
const cors = require('cors');  //send api calls through diffrent ports
const express = require('express');
const app = express();
const config = require("./config/config.js");
const database = require("./database/Database.js");
const proxy = require('express-http-proxy');
const userRoutes = require("./Routes/userRoute.js");
const postRoutes = require("./Routes/postRoute.js");
const chatRoutes = require("./Routes/chatRoute.js");


// // import path from 'path';
// import express from 'express';
// import mongoose from 'mongoose';
// // import morgan from 'morgan';
// import bodyParser from 'body-parser';
// import config from './config/config.js';
// import userRouter from './routes/listingsRouter.js';


//////////////////////////////////////////////////////////////////////// test


//////////////////////////////////////////////////////////////////// test


require('dotenv').config();
app.use('/proxy', proxy('http://localhost:8080'));
app.use(cors()); // Allow API calls to be made from any origin
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Routing
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/chat', chatRoutes);


//database connection
database.connect();


//starting up server
app.listen(config.port, () => {
  console.log("Server is now listening at port: " + config.port);
});

// module.exports = app;
