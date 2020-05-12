import React, { Component } from 'react';
import { Segment,Icon, Menu } from "semantic-ui-react";
import {Link} from 'react-router-dom';
export default class Header extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu icon='labeled' fluid widths={3} style={{backgroundColor:'#e1b382'}}>
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
          as={Link} to="/friends"
        >
          <Icon name='users' />
         
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link} to="/"
        >
          <Icon name='home' />
         
        </Menu.Item>

        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
          as={Link} to="/messages"
        >
          <Icon name='comments' />
       
        </Menu.Item>
      </Menu>
      )
    }
  }

