import './ContactInfo.css'
function ContactInfo(Props) {
  return (
    <div className="contact-info">
        <img src={Props.image} alt="not-found"/>
        <div className="email">
            <p>{Props.info1}</p>
            <span>{Props.info2}</span>
        </div>
    </div>
  )
}

export default ContactInfo