import React from 'react';
import './login.css';
import PlaceholderExampleCard from '../Login';
import {Segment, Header, Popup, Icon,  Divider, Grid, Form, Button, Placeholder} from 'semantic-ui-react';
const Home  = () =>{

return (
    <div>
       <PlaceholderExampleCard/>
       <Segment placeholder style={{width:'80vw', margin:'auto',borderRadius: '25px'}} id="LoginSection">
       <Header as='h1' icon textAlign='center' style={{color:'#12343b'}}>
    
    <Header.Content>Waldorf-Online</Header.Content>
  </Header>
    <Grid columns={2} relaxed='very' stackable>
        
      <Grid.Column>
      <Header as='h1' icon textAlign='center' style={{color:'#2d545e'}} >
                   
                        <Icon name='users' circular  style={{color:'#2d545e'}}/>
                   
                    <Header.Content></Header.Content>
                </Header>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='user plus' size='big' />
        <Header as='h1' icon textAlign='center' >
                   
                   <Icon name='user plus' circular  style={{color:'#2d545e'}}/>
              
               <Header.Content></Header.Content>
           </Header>
      </Grid.Column>
    </Grid>

    <Divider style={{color:'#2d545e', height:'5vh'}} vertical>Or</Divider>
  </Segment>
    </div>
)


}

export default Home;