import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom'
import { Sidebar, Segment, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'
import VideoList from './VideoList'
import Splash from './Splash'

class LeftMenu extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <BrowserRouter>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              <Link to="/landing">Home</Link>
            </Menu.Item>
            <Menu.Item name='about'>
              <Icon name='about' />
              <Link to="/video1">Video "1"</Link>
            </Menu.Item>
            <Menu.Item name='contact'>
              <Icon name='contact' />
              Video "2"
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
            <Route path="/landing" component={Splash}/>
            <Route path="/video1" component={VideoList}/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </BrowserRouter>
    )
  }
}

export default LeftMenu
