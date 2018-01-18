import React from 'react'
import { Embed, Container } from 'semantic-ui-react'

const VideoList = (props) => {
  return (
    <Embed
    id={props.match.params.id}
    source='youtube'
    icon='rocket'
  />
  )
}

export default VideoList
