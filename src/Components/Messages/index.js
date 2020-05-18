import React, { Component } from 'react';
import {Placeholder, Button} from 'semantic-ui-react';
import axios from 'axios';
import { ImageList } from './displayUsers';

class Messages extends Component {

  state = {
    userData:[],
    apiCalled:false
  }
  callApi  = () => {

      axios.get('http://localhost:3000/users')
         .then(response => {
             const data = response.data
          console.log(data)
      this.setState({
            userData:data,
            apiCalled:true
         })
        })
        
      

  }




  render(){
    const searched = this.state.apiCalled;
    let display
if (searched === false) display = <div>
<h1> test api </h1>
 
  <Button onClick={this.callApi}> CALL API </Button>



</div>

if (searched === true) display = <ImageList userData = {this.state.userData}/>

    return (

      <div>
        <h1> API SEARCH </h1>
        {display}
      </div>
  
    )
}
}
export default Messages;