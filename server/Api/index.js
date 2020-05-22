import axios from 'axios';

export default GetAllUsersApiCall = () => {


    axios.get ('http://localhost/3000/users')
    .then(response => {

        const data = response.data
        console.log(this.data)
    })
    return{
         data
    }

}