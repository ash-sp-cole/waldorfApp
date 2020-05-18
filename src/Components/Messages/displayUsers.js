import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Popup, Icon, Row, Button,Rating } from 'semantic-ui-react';
import '../Messages/messageList.css';
export const ImageList = (props) => {
    console.log(props)

    const userInfo = props.userData.map((user) => {

        if (user.gender === 'male') {

            return (
                <div >

                    <Popup
                        trigger={
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                                <Card.Content>
                                    <Card.Header>{user.name}</Card.Header>
                                    <Card.Description>
                                        {user.email}
                                    </Card.Description>
                                    <Button animated as={Link} to="/" target="_blank">
                                        <Button.Content visible>ADD</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow right' />
                                        </Button.Content>
                                    </Button>
                                </Card.Content>
                            </Card>
                        }
                    >
                        <Popup.Header>{user.gender}</Popup.Header>
                        <Popup.Content>
                        <Rating icon='star' defaultRating={3} maxRating={5} />
                            <h5> {user.age} </h5>
                        </Popup.Content>
                    </Popup>
                </div>
            )
        }
        else {

            return (
                <div>
                    <Popup
                        trigger={
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
                                <Card.Content>
                                    <Card.Header>{user.name}</Card.Header>
                                    <Card.Description>
                                        {user.email}
                                    </Card.Description>
                                    <Button animated as={Link} to="/" target="_blank">
                                        <Button.Content visible>ADD</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow right' />
                                        </Button.Content>
                                    </Button>
                                </Card.Content>
                            </Card>
                        }
                    >
                        <Popup.Header>{user.gender}</Popup.Header>
                        <Popup.Content>
                        <Rating icon='star' defaultRating={4} maxRating={5} />
                            <h5> {user.age} </h5>
                        </Popup.Content>
                    </Popup>
                </div >
            )
        }
      
    })

    // const title = props.userData.map((user)=>{
    //     return <div> title - {user.title}</div>

    //   })
    //   const image = props.userData.map((user)=>{
    //       return <img src={user.urlToImage}/>
    //   })

    return <div className='image-list' >

        {userInfo}
    </div>

}



