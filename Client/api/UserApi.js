import API from './API.js';
// import axios from 'axios';
// TODO:
// Refactor backend to remove username/email
// const userSchema = new mongoose.Schema({

//     name: {
//         first: { type: String, required: true },
//         last: { type: String, required: true }
//     },
//     password: { type: String, required: true },
//     userName: { type: String, required: true },
//     email: { type: String, required: true },
//     userPosts: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Post'
//     }],
//     following: {type: Number, required: true},
//     followers: {type: Number, required: true}

// })
exports.createUser = async (name, userName, password, userPosts, email, followers, following) => {

    const Response = await API.post('/api/user', {
        name,
        userName,
        password,
        email,
        userPosts,
        following,
        followers


    })
        .then(async (res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
            return { error: 'Unable to create new user' };
        });

    return Response;
};


exports.getUsers = async () => {

    const axiosResponse = await API.get('/api/user')
        .then(async (response) => response)
        .catch((error) => {
            if (error.message) {
                return { error };
            }
            return { error: 'Unable to get user' };
        });

    return axiosResponse;

}


