import Video from '../Video/Video'
import VideoNumber from '../VideoNumber/VideoNumber'
import './VideoContainer.css'
function VideoContainer() {
  return (
    <div className="container">
           <Video/>
           <VideoNumber/>
    </div>
  )
}

export default VideoContainer