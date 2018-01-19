import React from 'react'
import { Embed, Container } from 'semantic-ui-react'

const VideoList = (props) => {
  return (
    <div>
    <p>video list</p>
    <Embed
    id={props.match.params.id}
    icon='play'
    source='youtube'
  />
  </div>
  )
}

export default VideoList
