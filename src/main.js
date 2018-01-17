import React from 'react'
import { render } from 'react-dom'
import { Container, Sidebar, Segment, Menu, Image, Icon, Header } from 'semantic-ui-react'
import LeftMenu from './components/LeftMenu'
import 'semantic-ui-css/semantic.min.css'
import '../public/main.css'


const MOUNT_NODE = document.getElementById('root')

const App = () => (
  <div>
  <LeftMenu/>
  </div>
)

render(<App />, MOUNT_NODE)
