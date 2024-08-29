import './Title.css'
function Title({image , title  , pro}) {
  return (
  <div className="title-image">
    <img src={image} alt="not-found" />
    <div className="pro-title">
       <div className="title-p"> <p>{title}</p></div>
        <h2>{pro}</h2>
    </div>
  </div>
  )
}

export default Title