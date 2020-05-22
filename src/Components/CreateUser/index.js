import React, { Component } from 'react';
import {Button,Modal,Image,Header,Form, Message} from 'semantic-ui-react';


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

class UserCreateForm extends Component {
state ={
    open:false,
   
}

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    handleChange = (e, { value }) => this.setState({ value })


render(){

    const { open, dimmer } = this.state
    const { value } = this.state

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



              <Form size='large' success>
        <Form.Group style={{width:'60vw'}}>
          <Form.Input fluid label='First name' placeholder='First name' style={{width:'10vw'}} />
          <Form.Input fluid label='Last name' placeholder='Last name' style={{width:'10vw'}} />
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>
        <Form.Group inline>
          <label>Looking for </label>
          <Form.Radio
            label='Friends'
            value='sm'
            checked={value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Work'
            value='md'
            checked={value === 'md'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Maybe more'
            value='lg'
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        {/* <Message
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    /> */}
        <Form.Button>Submit</Form.Button>
      </Form>



       
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Sign me up"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>

        </div>
    )
}

}


export default UserCreateForm;