import React, { Component } from 'react';
import { Segment,Icon, Menu } from "semantic-ui-react";
export default class Header extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu icon='labeled' fluid widths={3} style={{backgroundColor:'#e1b382'}}>
        <Menu.Item
          name='gamepad'
          active={activeItem === 'gamepad'}
          onClick={this.handleItemClick}
        >
          <Icon name='users' />
         
        </Menu.Item>

        <Menu.Item
          name='video camera'
          active={activeItem === 'video camera'}
          onClick={this.handleItemClick}
        >
          <Icon name='home' />
         
        </Menu.Item>

        <Menu.Item
          name='video play'
          active={activeItem === 'video play'}
          onClick={this.handleItemClick}
        >
          <Icon name='comments' />
       
        </Menu.Item>
      </Menu>
      )
    }
  }

