import React, { Component } from 'react';
import {Placeholder} from 'semantic-ui-react';
import axios from 'axios';

class Messages extends Component {

  componentDidMount(){

      axios.get('http://localhost:3000/users')
         .then(response => {
           console.log(response.data)
         })
         
      


  }

  render(){
    return (
      <div>
      <h1> test api </h1>
        <Placeholder fluid style={{width:'60vw', margin:'auto'}}>
        <Placeholder.Header style={{width:'60vw', margin:'auto'}} image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
      </div>
    )
}
}
export default Messages;