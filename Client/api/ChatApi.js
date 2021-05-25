import API from './API';
// TODO:
// Refactor backend to remove username/email

exports.createChat = async (_id, messages, members) => {

    const Response = await API.post('/api/chat/', {
        _id, 
        messages, 
        members
    })
        .then(async (res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
            return { error: 'Unable to create new user' };
        });

    return Response;
};

exports.getAllChats = async () => {
  
    const axiosResponse = await API.get('/api/chat/',{  
        headers: {
        'Test-Header': 'test-value'
      }})
        .then(async (response) => response)
        .catch((error) => {
          if (error) {
              console.log(error.response)
            return { error };
          }
        //   return { error: 'Unable to get user' };
        });
    
      return axiosResponse;
}

