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
              <Link to="/landing">Home</Link>
            </Menu.Item>
            <Menu.Item name='video1'>
              <Link to="/video/yNiO2jivXsU">Intro to Sorting</Link>
            </Menu.Item>
            <Menu.Item name='video2'>
              <Link to="/video/TAaadUhcnOg">Intro to Express</Link>
            </Menu.Item>
            <Menu.Item name='video3'>
              <Link to="/video/jYDldOM4lhM">The Accumulator Pattern Walkthrough</Link>
            </Menu.Item>
            <Menu.Item name='video4'>
              <Link to="/video/xaOfeVVzPYY">Intro to AJAX Walkthrough</Link>
            </Menu.Item>
            <Menu.Item name='video5'>
              <Link to="/video/GDg6alKEnw8">Intro to SQL</Link>
            </Menu.Item>
            <Menu.Item name='video6'>
              <Link to="/video/M5Np7xguHz4">Validations Overview</Link>
            </Menu.Item>
            <Menu.Item name='video7'>
              <Link to="/video/wQsYZyzkpLM">Intro to HTML Forms</Link>
            </Menu.Item>
            <Menu.Item name='video8'>
              <Link to="/video/ATXiCaa0R-c">DOM & jQuery Breakout</Link>
            </Menu.Item>
            <Menu.Item name='video9'>
              <Link to="/video/-qZumxVyKlU">Overview of es2015 Breakout</Link>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
            <Route path="/landing" component={Splash}/>
            <Route path="/video/:id" component={VideoList}/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </BrowserRouter>
    )
  }
}




export default LeftMenu
