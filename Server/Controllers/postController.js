const mongoose = require('mongoose');
const postSchema = require('../models/postSchema.js');
const config = require('../config/config.js');




exports.create = async (req, res) => {

    const post = new postSchema({
        title: req.body.title,
        content: req.body.content,
        type: req.body.type,
        postedBy: req.body.postedBy, 
        timeStamp: req.body.timeStamp,
        numOfLikes:  req.body.numOfLikes, 
        comments: req.body.comments
    });

    return await post.save((err) => {
        if (err) {
            console.log(err)
        }
        console.log(post);
        res.json(post);
    });

}



exports.readById = async (req, res) => {

//     const user = await userSchema.findById(req.params._id)
//     .populate("Post")
//     .exec();
// if (!user) throw "User does not exist!";

// res.send(user);
    const post = await postSchema.findById(req.params._id, (err, docs) => {
        if (err) {
            res.send({
                "error": "Something is wrong with readById"
            })
            throw err;
        }
        console.log(docs);
        res.json(docs);
    });
};

exports.read = async (req, res) => {

    const listPost= await postSchema.find({}).exec();
    res.send(listPost);

};



// exports.update = async (req, res) => {

//     let post = new postSchema(req.body);


//     postSchema.findByIdAndUpdate(req.params._id, (err, data) => {
//         if (err) {
//             res.send({
//                 "error": "Something is wrong Update"
//             })
//             throw err;
//         }
//         console.log(data);
//         console.log("here");
//         // req.body.comments = data.comments;
//         res.send(data);
//     })


// }

// exports.remove = async (req, res) => {
//     const resp = postSchema.findOneAndDelete({ _id: req.params._id }, (err) => {
//         if (err)
//             res.status(400).send(err)
//         res.end();
//     })
//     console.log("RESPONSE " + JSON.stringify(resp))
// };



// let post = new postSchema({
//     content: "Hey this is a Post",
//     postedBy: userSchema._id, 

//     timeStamp:{
//         time: "12:03 P.M",
//         day: 2,
//         month: 10,
//         year: 2020
//     },
//     numOfLikes:  70, 

//     comments: [{
//         text: "your weird",
//         numOfLikes: 20,
//         postedBy: userSchema._id
//     }]

// });

// console.log(post + 'yeet');
// post.create;