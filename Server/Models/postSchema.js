const mongoose = require('mongoose');

  
const postSchema = new mongoose.Schema ({
    title: {type: String, required: true},
    content: {type : String, required: true},
    type: {type : String, required: true},
    postedBy: {type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, 
    timeStamp:{
        time: {type: String},
        day: {type: Number},
        month: {type: Number},
        year: {type: Number}
    },
    numOfLikes:  {type : Number, required: true}, 
    comments: [{
        text: {type: String},
        numOfLikes: {type: Number},
        postedBy: {type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        } 
    }]

//     following: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
// followers: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
})

module.exports = Post = mongoose.model("Post", postSchema);