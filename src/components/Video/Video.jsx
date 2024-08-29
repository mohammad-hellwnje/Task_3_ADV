import './Video.css'
import img1 from './../../assets/images/contact-bg.jpg'
import img2 from './../../assets/images/video-frame.jpg'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Video() {
  return (
    <div className="video">
      <div className="img1">
        <div className="video-title">
          <div className="title"><h2>VIDEO VIEW</h2></div>
          <p>Get Closer View & Different Feeling</p>
        </div>
        <img src={img1} alt="not-found" />
      </div>
      <div className="img2">
        <img src={img2} alt="not-found" />
        <div className="play-icon"><div className="play-icon1"><FontAwesomeIcon icon={faPlay} color='red' /></div></div>
      </div>
    </div>
  )
}

export default Video