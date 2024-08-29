import './DetMain.css'

import FeaturesInfo from '../FeaturesInfo/FeaturesInfo'
import DetInfo from '../DetInfo/DetInfo'
import FeaturesContent from '../FeaturesContent/FeaturesContent'
function DetMain() {
  return (
    <div className="detmain">
      <div className="det-information">
        <DetInfo />
        <FeaturesContent />
      </div>
      <div className="det-list">
        <FeaturesInfo />
      </div>
    </div>
  )
}

export default DetMain