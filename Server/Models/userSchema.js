const mongoose  = require( 'mongoose');
// import  mongoose from 'mongoose';
const userSchema = new mongoose.Schema ({

    name: {first: String, last: String},
    age: {type : Number, required: true},
    password:  {type : String, required: true}, 
    userName: {type: String, required: true},
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

// export default mongoose.model('User', userSchema);

module.exports = User = mongoose.model("User", userSchema);