const mongoose = require('mongoose');

const chatSchema = require('../models/chatSchema.js');


exports.create = async (req, res) => {

    const chat = new chatSchema({
        _id: req.body._id,
        messages: req.body.messages,
        members: req.body.members
    });
    console.log(chat +"/n" + chat.members + chat.messages.history);


    return await chat.save((err) => {
        if (err) throw err;

        res.json(chat);
    })

}

exports.getAll = async (req, res) => {
    const listChat = await chatSchema.find({}).exec();
    res.send(listChat);
}

exports.get = async (req, res) => {
    const chat = await chatSchema.findById(req.params._id)
        .populate("Post")
        .exec();
    if (!chat) throw "chat does not exist!";

    res.send(chat);
}






