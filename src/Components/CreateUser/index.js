import React, { Component } from 'react';
import {Button,Modal,Image,Header,Form} from 'semantic-ui-react';
import {CreateNewUser} from '../api';


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

class UserCreateForm extends Component {
state ={
    open:false,
    nameFirst:'',
    nameLast: '',
    email:'',
    gender:'',
    about:'',
    looking:'',
   
   

   
}

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
  
    setGenderState = (e, { value }) => {
        this.setState({ gender:value })
        console.log(this.state.gender)
    } 
   
    handleFormSubmit = (event)=>{
        console.log(event.target.gender)
         this.setState({
             nameFirst:event.target.first.value,
             nameLast:event.target.last.value,
             email:event.target.email.value,
             about:event.target.about.value,
           
         })
        
         console.log(JSON.stringify(this.state))

         CreateNewUser(this.state.nameFirst,
            this.state.nameLast,
            this.state.about,
            this.state.gender,
            this.state.email)
        // this.close()
    }

render(){



    const { open, dimmer } = this.state
    

    return (
        <div>
   
                            

        <Button onClick={this.show('blurring')}>Create a User </Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>SIgn up</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src='https://react.semantic-ui.com/images/avatar/large/molly.png'
            />
            <Modal.Description>
              <Header>Welcome to ' The middle Space '</Header>



              <Form size='large' success onSubmit={this.handleFormSubmit}>
        <Form.Group style={{width:'60vw'}}>
          <Form.Input fluid label='First name' name="first" placeholder='First name' style={{width:'10vw'}} />
          <Form.Input fluid label='Last name' name="last" placeholder='Last name' style={{width:'10vw'}} />
         
          <Form.Select
            fluid
            label='Gender'
            name='gender'
            options={options}
            placeholder='Gender'
            onChange={this.setGenderState}
          />
          
        
        </Form.Group>
        
      
       
        <Form.TextArea label='About' name="about" placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
    
       <Form.Input fluid label='Email' name='email' placeholder='please enter valid email' style={{width:'16vw'}} />
       <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Sign me up"
              
            />
      </Form>



       
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
           
          </Modal.Actions>
        </Modal>

        </div>
    )
}

}


export default UserCreateForm;