const mongoose = require('mongoose');

const userSchema = require('../models/userSchema.js');


exports.create = async (req, res) => {

    const user = new userSchema({
        name: req.body.name,
        password: req.body.password,
        userName: req.body.userName,
        email: req.body.email,
        userPosts: req.body.userPosts,
        following: req.body.following,
        followers: req.body.followers
    });
    console.log(user + " is user obj");


    return await user.save((err) => {
        if (err) throw err;

        res.json(user);
    })

}

exports.getAll = async (req, res) => {
    const listUser = await userSchema.find({}).exec();
    res.send(listUser);
}

exports.get = async (req, res) => {
    const user = await userSchema.findById(req.params._id)
        .populate("Post")
        .exec();
    if (!user) throw "User does not exist!";

    res.send(user);
}


exports.update = async (req, res) => {

    let user = new userSchema(req.body);


    userSchema.findByIdAndUpdate(req.params._id, user, {

    }, { new: true })

}

exports.remove = async (req, res) => {
    const resp = await userSchema.deleteMany({})
        .then(err => {
            return cosole.log(err);
        });

    res.send(resp);
};

exports.removeById = async (req, res) => {
    const resp = await userSchema.findOneAndDelete( req.body._id, (err)=>{
        if(err){
            console.log(err);
        }
    })
    console.log(resp);
    res.send(resp);
};



