import React from 'react'
import { Embed } from 'semantic-ui-react'

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
