import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class Login extends Component{
    state ={
        loginState: false
    }
handleLogin = () => {
this.setState({
    loginState: true
})


}
    render() {
       
        
             
       
          
        console.log(this.state.loginState);
        return (
            <div> 
               
               <Form>
                <Button type="submit"onClick={this.handleLogin} > Login </Button>


                </Form>
               

                    
                 </div>
        )
    }
}

export default Login;