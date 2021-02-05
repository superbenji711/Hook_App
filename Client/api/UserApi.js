import API from './API';

// TODO:
// Refactor backend to remove username/email

exports.createUser = async (name, userName, password, email) => {

    const Response = await API.post('/api/user', {
        name,
        userName,
        password,
        email,

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

}

