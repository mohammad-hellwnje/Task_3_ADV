import './Card.css'

function Card(Props) {
  return (
    <div className="card">
      <img src={Props.img} alt="not-found" />
      <div className="price">
        <button>{Props.btn}</button>
        <p>{Props.price}</p>
      </div>
      <h3>{Props.title}</h3>
      <div className="information">
       <div className="info1">
       <p>Bedrooms: <span>{Props.bednumber}</span></p>
       <p>Area: <span>{Props.area}</span></p>
       <p>parking: <span>{Props.parking}</span></p>
       </div>
       <div className="info1">
        <p>Bathroom: <span>{Props.bath}</span></p>
        <p>Floor: <span>{Props.floor}</span></p>
       </div>
      </div>
      <div className="btn">
        <button>Schedule a visit</button>
      </div>
    </div>
  )
}

export default Card