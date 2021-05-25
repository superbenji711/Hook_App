const chatController = require('../controllers/chatController.js');
// const express = require() 'express';
const express = require('express');

const chatRouter = express.Router();



chatRouter.get('/:_id', chatController.get); // get chat by id
chatRouter.get('/', chatController.getAll); //get all chat

chatRouter.post('/', chatController.create); //createchat





module.exports = chatRouter;