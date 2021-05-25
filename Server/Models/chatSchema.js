const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    messages: {
        Title: { type: String, required: true },
        messageData: { type: String },
        history: [{
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            conversation: { type: String }
        }]
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

module.exports = Chat = mongoose.model("Chat", chatSchema);