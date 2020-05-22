import React, { Component } from 'react';
import './login.css';
import PlaceholderExampleCard from '../Login';
import {Segment, Header, Popup, Icon,  Divider, Grid, Form, Button, Placeholder} from 'semantic-ui-react';
import {connect} from 'react-redux';
import LogedInPage from'../LoginScreens'
import {setAuthSignIn, setAuthSignOut} from '../../Actions/index';
import UserCreateForm from '../CreateUser';
class Home extends Component {

  state = {
    tempName: null,
    tempPass: null,
  }
  userSignIn = (event) =>
 {
   this.setState({
     tempName: event.target.tempName.value,
     tempPass: event.target.tempPass.value
   })
 
   this.props.setAuthSignIn(event.target.tempName.value);
  console.log('clicked set sign in', "user name is =>   " ,event.target.tempName.value, " password 'shhhhh :) ' is == > ", event.target.tempPass.value)

 }

componentDidUpdate ()
{
  if(this.props.isSignedIn === true) {
    console.log("component updated and user is now SIGNED IN  user name is ---> ", this.props.userName)
  }
}
render() {

  let displayPage;

  if (this.props.isSignedIn === true){
    displayPage = 
      <LogedInPage/>
  
  }
  else {
    displayPage =   <div>
    <PlaceholderExampleCard/>
    <Segment placeholder style={{width:'80vw', margin:'auto',borderRadius: '25px'}} id="LoginSection">
    <Header as='h1' icon textAlign='center' style={{color:'#12343b'}}>
 
 <Header.Content>Waldorf-Online</Header.Content>
 <h1> welcome {this.props.userName}</h1>
</Header>
 <Grid columns={2} relaxed='very' stackable>
     
   <Grid.Column>
   <Header as='h1' icon textAlign='center' style={{color:'#2d545e'}} >
                
                     <Icon name='users' circular  style={{color:'#2d545e'}}/>
                
                 <Header.Content></Header.Content>
             </Header>
     <Form onSubmit={this.userSignIn}>
       <Form.Input
         name='tempName'
         icon='user'
         iconPosition='left'
         label='name'
         placeholder='Username'
       />
       <Form.Input
       name="tempPass"
         icon='lock'
         iconPosition='left'
         label='Password'
         type='password'
       />

       <Button content='Login' primary />
     </Form>
   </Grid.Column>

   <Grid.Column verticalAlign='middle'>
     <UserCreateForm/>
     <Header as='h1' icon textAlign='center' >
                
                <Icon name='user plus' circular  style={{color:'#2d545e'}}/>
           
            <Header.Content></Header.Content>
        </Header>
   </Grid.Column>
 </Grid>

 <Divider style={{color:'#2d545e', height:'5vh'}} vertical>Or</Divider>
</Segment>

</div>
  
  }
  console.log(this.props.isSignedIn);
return (
    <div>
      
  {displayPage}
    </div>
)

}
}

const mapStatetoProps =  (state) =>{
  return {
    isSignedIn: state.auth.signedIn,
    userName : state.auth.userId
  }
}




export default connect  (mapStatetoProps, {setAuthSignIn, setAuthSignOut}) (Home);