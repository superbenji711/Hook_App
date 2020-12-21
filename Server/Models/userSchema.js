const mongoose = require('mongoose');
// import  mongoose from 'mongoose';
const userSchema = new mongoose.Schema({

    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    userPosts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],

})

// export default mongoose.model('User', userSchema);

module.exports = User = mongoose.model("User", userSchema);