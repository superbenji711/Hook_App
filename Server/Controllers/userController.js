const mongoose = require('mongoose');

const userSchema = require('../models/userSchema.js');
const config = require('../config/config.js');


exports.create = async (req, res) => {
    console.log(req.body);
    let first = req.body.name.first;
    let last = req.body.name.last;

    let user = new userSchema({
        name: { first, last },
        age: req.body.age,
        password: req.body.password,
        userName: req.body.userName,
        email: req.body.email,
        userPosts: req.body.userPosts
    });
    console.log(user + " is user obj");


    user.save((err) => {
        if (err) throw err;

        res.json(user);
    })

}

exports.getAll = async (req, res) => {
    await userSchema.find({}).exec();
}

exports.get = async (id) => {
    const user = await userSchema.findById(id).populate("Post").exec();
    if (!user) throw "User does not exist!";

    res.send(user);
}
6

exports.update = async (req, res) => {


    // console.log(req.body);
    let user = new userSchema(req.body);


    userSchema.findByIdAndUpdate(req.params._id, user, { new: true }, (err, data) => {
        // console.log(data.userName)
        if (err) {
            res.send({
                "error": "Something is wrong"
            })
            throw err;
        } else {
            // data.body = user.body; //update
            res.send(data);
        }
    })


}

exports.remove = async (req, res) => {
    const resp = userSchema.findOneAndDelete({ _id: req.params._id }, (err) => {
        if (err)
            res.status(400).send(err)
        res.end();
    })
    console.log("RESPONSE " + JSON.stringify(resp))
};


