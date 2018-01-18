import React from 'react'
import { Embed, Container } from 'semantic-ui-react'

const VideoList = (props) => {
  return (
    <Embed
    id={props.match.params.id}
    icon='play'
    source='youtube'
  />
  )
}

export default VideoList
