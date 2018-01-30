import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom'
import { Sidebar, Segment, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'
import VideoList from './VideoList'
import Splash from './Splash'
import ComingSoon from './ComingSoon'
import NotFound from './NotFound'

class LeftMenu extends Component {

  constructor(props) {
    super(props)

    this.state = {
    visible: true,
    videos: [{
        title: 'Intro to Sorting',
        id: 'yNiO2jivXsU'
      }, {
        title: 'Intro to Express',
        id: 'TAaadUhcnOg'
      }, {
        title: 'Accumulator Pattern Walkthrough',
        id: 'jYDldOM4lhM'
      }, {
        title: 'Intro to Ajax Walkthrough',
        id: 'xaOfeVVzPYY'
      }, {
        title: 'Intro to SQL',
        id: 'GDg6alKEnw8'
      }, {
        title: 'Validations Breakout',
        id: 'M5Np7xguHz4'
      }, {
        title: 'Intro to HTML Forms',
        id: 'wQsYZyzkpLM'
      },{
        title: 'Overview of es2015',
        id: '-qZumxVyKlU'
      },{
        title: 'DOM & jQuery Breakout',
        id: 'ATXiCaa0R-c'
      }]
    }
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {

    const { visible } = this.state

    return (
      <BrowserRouter>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Link to="/"><Menu.Item name='home' >
            <Icon name="home"/>
             </Menu.Item></Link>
            {this.state.videos.map(function(item, i) {
              return (<Menu.Item key={i} name={item.title}>
                <Link to={`/video/${item.id}`}>{item.title}</Link>
              </Menu.Item>)
            })}
            <Menu.Item name='video10'>
              <Link to="/coming-soon">DVLP DNVR Lightning Talk</Link>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Switch>
                <Route exact path="/" component={Splash}/>
                <Route path="/video/:id" component={VideoList}/>
                <Route path="/coming-soon" component={ComingSoon}/>
                <Route path='*' component={NotFound}/>
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </BrowserRouter>
    )
  }
}

export default LeftMenu
