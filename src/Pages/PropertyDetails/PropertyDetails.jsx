
import Title from "../../components/Title/Title"
import "./PropertyDetails.css"
import img1 from './../../assets/images/page-heading-bg.jpg';
import DetMain from "../../components/DetMain/DetMain";
import DealSection from "../../components/DealSection/DealSection";
function PropertyDetails() {
  const title1 = "HOME /SINGLE PROPERTY";
  const pro1 = "SINGLE PROPERTY";
  return (
    <div className="PropertyDetails">
      <Title image={img1} title={title1} pro={pro1} />
      <div className="det-main">
        <DetMain/>
      </div>
      <DealSection/>
    </div>
  )
}

export default PropertyDetails