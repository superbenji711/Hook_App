const mongoose = require('mongoose');

const userSchema = require('../models/userSchema.js');
const config = require( '../config/config.js');


exports.create = async (req, res) => {
    let user = new userSchema({
        
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        password: req.body.password,
        userName: req.body.userName
    });
    console.log(user + " is user obj");

    
    user.save((err)=>{
        if(err) throw err;

        res.json(user);
    })

}





exports.readById = async (req, res) => {

    // console.log("This is it " + req.params.listingId)

    await userSchema.findById(req.params._id, (err, docs) => {
        if(err){
            res.send({
                "error": "Something is wrong"   
            })
            throw err;

        }
        console.log(docs);
        res.json(docs);
    });
};

exports.read = async (req, res) => {

    // console.log("This is it " + req.params.listingId)

    await userSchema.find({}, (err, docs) => {
        if(err){
            res.send({
                "error": "Something is wrong"   
            })
            throw err;

        }
        console.log(docs);
        res.json(docs);
    });
};

// exports.list = async (req, res) => {
//     /* Add your code. Make sure to send the documents as a JSON response.*/



//   let value = await userSchema.find();

//   res.send(value);
// };

exports.update = async (req, res)=>{

    
    // console.log(req.body);
    let user = new userSchema(req.body);


        userSchema.findByIdAndUpdate(req.params._id, user, {new: true}, (err, data)=>{
            // console.log(data.userName)
        if(err){
            res.send({
                "error": "Something is wrong"   
            })
            throw err;
        }else{
        // data.body = user.body; //update
         res.send(data);
        }
    })
 
   
}

exports.remove =  async (req, res) => {
    const resp = userSchema.findOneAndDelete({_id: req.params._id}, (err) => {
        if(err)
            res.status(400).send(err)
        res.end();
    })
    console.log("RESPONSE " + JSON.stringify(resp))
};



// let user = new userSchema({
//     firstName: 'Benji',
//     lastName: 'Labonte',
//     age: 23,
//     password:  '123456', 
//     userName: 'superbenji711'
// });

// console.log(user);
// user.create;