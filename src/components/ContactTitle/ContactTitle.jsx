import './ContactTitle.css'
import img1 from './../../assets/images/contact-bg.jpg'
function ContactTitle() {
  return (
    <div className="contacttitle">
        <img src={img1} alt="" />
        <div className="contact-title">
            <div className="main-title">
                <h2>CONTACT US</h2>
            </div>
            <p>Get In Touch With Our Agents</p>
        </div>
    </div>
  )
}

export default ContactTitle