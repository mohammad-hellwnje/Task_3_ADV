import FeaturesContent from '../FeaturesContent/FeaturesContent'
import FeaturesImage from '../FeaturesImage/FeaturesImage'
import FeaturesInfo from '../FeaturesInfo/FeaturesInfo'
import FeaturesTitle from '../FeaturesTitle/FeaturesTitle'
import './Features.css'
function Features() {
  return (
   <div className="f-container">
     <FeaturesImage/>
     <div className="cintent-f">
      <FeaturesTitle/>
     <FeaturesContent/>
     </div>
     <FeaturesInfo/>
   </div>
  )
}

export default Features