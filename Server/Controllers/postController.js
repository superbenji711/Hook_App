const mongoose = require('mongoose');
const postSchema = require('../models/postSchema.js');
const config = require('../config/config.js');
const userSchema = require('../models/userSchema.js');
const { create } = require('../models/postSchema.js');




exports.create = async (req, res) => {

    let arrayComment = [];

    req.body.comments.forEach(element => {
        element.postedBy = mongoose.Schema.Types.ObjectId,
        arrayComment.push(element);
        
    });

    var post = new postSchema({
        title: req.body.title,
        content: req.body.content,
        postedBy: mongoose.Schema.Types.ObjectId, 
        // req.body.userSchema._id
        timeStamp: req.body.timeStamp,
        numOfLikes: req.body.numOfLikes,
        comments: arrayComment

    });


    post.save((err) => {
        if (err) {
            console.log(err)
        }

        Post.find({})
            .populate('postedBy')
            .populate('comments.postedBy')
            .exec((error, posts) => {
               if(error){
                throw err;
               }
                // console.log(JSON.stringify(posts, null, "\t", "what "))
                res.send(posts);
                // console.log("works", posts);
            })

    })

}



exports.readById = async (req, res) => {


    await postSchema.findById(req.params._id, (err, docs) => {
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


    await postSchema.find({}, (err, docs) => {
        if (err) {
            res.send({
                "error": "Something is wrong with read"
            })
            throw err;

        }
        console.log(docs);
        res.json(docs);
    })
    // }).populate('postedBy')
    // .exec((error, posts)=> {
    //     console.log(JSON.stringify(posts, null, "\t", "what "))
    //     res.send(posts);
    //     console.log("works", post);
    // });
};



exports.update = async (req, res) => {

    let post = new postSchema(req.body);


    postSchema.findByIdAndUpdate(req.params._id, (err, data) => {
        if (err) {
            res.send({
                "error": "Something is wrong Update"
            })
            throw err;
        }
        console.log(data);
        console.log("here");
        // req.body.comments = data.comments;
        res.send(data);
    })


}

exports.remove = async (req, res) => {
    const resp = postSchema.findOneAndDelete({ _id: req.params._id }, (err) => {
        if (err)
            res.status(400).send(err)
        res.end();
    })
    console.log("RESPONSE " + JSON.stringify(resp))
};



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