import ContactForm from '../ContactForm/ContactForm'
import ContactInfo from '../ContactInfo/ContactInfo'
import ContactMap from '../ContactMap/ContactMap'
import ContactTitle from '../ContactTitle/ContactTitle'
import img1 from './../../assets/images/email-icon.png'
import img2 from './../../assets/images/phone-icon.png'
import './Contact.css'
function Contact() {
  return (
    <div className="contact">
        <ContactTitle/>
        <div className="contact-main">
            <div className="contact1">
                <ContactMap />
                <div className="contactInfo">
                <ContactInfo image={img2} info1="010-020-0340" info2="Phone Number"/>
                <ContactInfo image={img1} info1="info@villa.com" info2="Business Email"/>
                </div>
            </div>
            <div className="contact2">
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default Contact