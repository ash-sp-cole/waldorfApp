import axios from 'axios';

// export default GetAllUsersApiCall = () => {


//     axios.get ('http://localhost/3000/users')
//     .then(response => {

//         const data = response.data
//         console.log(this.data)
//     })
//     return{
//          data
//     }

// }

export const CreateNewUser = (firstName,lastName,About,Gender,Email) => {

        console.log(firstName,lastName,About,Gender,Email) 
    axios.post('http://localhost:3000/users/12',{
        name: firstName,
        age: lastName,
        gender: Gender,
        email: Email
    })
    .then(function(response){
        console.log(response)
    })
}