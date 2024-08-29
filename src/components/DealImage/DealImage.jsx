import './DealImage.css';
import img1 from "./../../assets/images/deal-01.jpg";
import img2 from "./../../assets/images/property-06.jpg";
import img3  from "./../../assets/images/property-03.jpg";


function DealImage({ selectedDeal }) {
  const images = {
    apartment: img1,
    villa: img2,
    penthouse: img3,
  };

  return (
    <div className="dealimage">
        <img src={images[selectedDeal]} alt="deal-image" />
    </div>
  )
}

export default DealImage;

