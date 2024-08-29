import './FeaturesImage.css'
import img1 from './../../assets/images/featured.jpg'
import img2 from './../../assets/images/featured-icon.png'

function FeaturesImage() {
  return (
    <div className="image">
        <img src={img1} alt="features-image"/>
        <div className="icon-image">
            <img src={img2} alt="icon-image" />
        </div>
    </div>
  )
}

export default FeaturesImage