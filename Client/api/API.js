import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/',
  responseType: 'json'
});
// http://localhost:8080/api/user



// const test= async()=>{
//   await axios.get('http://localhost:8080/api/user')
//   .then((response) => {
//     console.log(response.data);
//     console.log( " something ");
//   })
//   .catch((error) => { error: "what" })
// }

// test();


const data = async () => {
  await API.get('/api/user')
    .then(response => {
      for (const property in response.data) {
        console.log(`${property}: ${response.data[property].name.first} : ${response.data[property].name.last} : ${response.data[property]._id}`);
      }
      return response.data;
    })
    .catch((error) => { error: "what" })

};
data();

export default API;
