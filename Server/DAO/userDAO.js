const User = require('../Models/userSchema.js');
// const {NotFoundErr}

exports.create = async (userInput) => { //creates a user based of prop sent
    if(await User.exists({username: userInput.username})){
        throw Error('Username already taken');
    }
    return await new User(userInput).save();
};

exports.getAll = async () => await User.find({}).exec(); //returns all users

exports.get = async (id) => {
    const user = await (await User.findById(id)).populate({
        comments: 'users' //unsure look at documentation
    }).exec();
    if(!user) throw  "user does not exits";

    return user;
}

// exports.update = async (id, updatedData) => {
    
// }

// exports.getByUsername = async (username) => {
//     const user = await User.findOne({ username }).exec();
//     if (!user) throw  "user does not exits";
  
//     return user;
// };

exports.delete = async (id) => {
    const user = await User.findByIdAndDelete(id);
    if(!user) throw "no user to delete";
    return user;
}

exports.deleteAll = async () => {
    await User.deleteMany();
};
  