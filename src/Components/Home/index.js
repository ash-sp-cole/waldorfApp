import React from 'react';
import './login.css';
import {Segment, Header, Popup, Icon,  Divider, Grid, Form, Button} from 'semantic-ui-react';
const Home  = () =>{

return (
    <div>
        
       <Segment placeholder style={{width:'80vw', margin:'auto'}} id="LoginSection">
           
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
      <Header as='h1' icon textAlign='center' >
                   
                        <Icon name='users' circular />
                   
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
                   
                   <Icon name='user plus' circular />
              
               <Header.Content></Header.Content>
           </Header>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
    </div>
)


}

export default Home;