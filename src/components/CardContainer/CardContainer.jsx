import Card from '../Card/Card';
import './CardContainer.css';
import img1 from './../../assets/images/property-01.jpg';
import img2 from './../../assets/images/property-02.jpg';
import img3 from './../../assets/images/property-03.jpg';
import img4 from './../../assets/images/property-04.jpg';
import img5 from './../../assets/images/property-05.jpg';
import img6 from './../../assets/images/property-06.jpg';

function CardContainer({ cardCount }) {
  const cardsData = [
    {
      img: img1,
      price: "$2.264.000",
      title: "18 New Street Miami OR 97219",
      bednumber: "8",
      area: "545m2",
      parking: "6 spots",
      bath: "8",
      floor: "3",
      btn: "Luxury Villa"
    },
    {
      img: img2,
      price: "$1.180.000",
      title: "54 Mid Street Florida OR 27001",
      bednumber: "6",
      area: "450m2",
      parking: "8 spots",
      bath: "5",
      floor: "3",
      btn: "Luxury Villa"
    },
    {
      img: img3,
      price: "$1.460.000",
      title: "26 ol Street Miami OR 38540",
      bednumber: "5",
      area: "225m2",
      parking: "10 spots",
      bath: "4",
      floor: "3",
      btn: "Luxury Villa"
    },
    {
      img: img4,
      price: "584.500",
      title: "12 New Street Miami OR 12650",
      bednumber: "4",
      area: "125m2",
      parking: "2 spots",
      bath: "3",
      floor: "25th",
      btn: "Apartment"
    },
    {
      img: img5,
      price: "$925.600",
      title: "34 Beach Street Miami OR 42680",
      bednumber: "4",
      area: "180m2",
      parking: "2 spots",
      bath: "4",
      floor: "38th",
      btn: "Apartment"
    },
    {
      img: img6,
      price: "$450.000",
      title: "22 New Street Portiand OR 16540",
      bednumber: "3",
      area: "165m2",
      parking: "3 spots",
      bath: "2",
      floor: "26th",
      btn: "Apartment"
    },
    {
      img: img1,
      price: "$450.000",
      title: "22 New Street Portiand OR 16540",
      bednumber: "3",
      area: "165m2",
      parking: "3 spots",
      bath: "2",
      floor: "26th",
      btn: "Apartment"
    },
    {
      img: img2,
      price: "$450.000",
      title: "22 New Street Portiand OR 16540",
      bednumber: "3",
      area: "165m2",
      parking: "3 spots",
      bath: "2",
      floor: "26th",
      btn: "Apartment"
    },
    {
      img: img3,
      price: "$450.000",
      title: "22 New Street Portiand OR 16540",
      bednumber: "3",
      area: "165m2",
      parking: "3 spots",
      bath: "2",
      floor: "26th",
      btn: "Apartment"
    },
  ];
  const displayedCards = cardCount === 9 ? cardsData : cardsData.slice(0, cardCount);

  return (
    <div className="cardContainer">
      {displayedCards.map((card, index) => (
        <Card
          key={index}
          img={card.img}
          price={card.price}
          title={card.title}
          bednumber={card.bednumber}
          area={card.area}
          parking={card.parking}
          bath={card.bath}
          floor={card.floor}
          btn={card.btn}
        />
      ))}
    </div>
  );
}

export default CardContainer;



