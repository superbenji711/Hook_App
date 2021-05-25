const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    userPosts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    following: {type: Number, required: true},
    followers: {type: Number, required: true}

})

module.exports = User = mongoose.model("User", userSchema);