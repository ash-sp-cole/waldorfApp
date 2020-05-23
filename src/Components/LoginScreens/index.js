import React, { Component } from 'react';
import {Segment, Header, Grid, Icon, Card, Image,} from 'semantic-ui-react';
import { connect} from 'react-redux';
import {setAuthSignOut} from '../../Actions/index';


class LogedInPage  extends Component{
    render() {

return (
    <div>
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
    
   </Grid.Column>

   <Grid.Column verticalAlign='middle'>
     
     <Header as='h1' icon textAlign='center' >
             
     <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href='/'>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
        </Header>
   </Grid.Column>
 </Grid>

 
</Segment>
</div>
)



    }
}

const mapStateToProps = (state) =>{
    return{
        userName: state.auth.userId
    }
}

export default  connect (mapStateToProps, {setAuthSignOut}) (LogedInPage);