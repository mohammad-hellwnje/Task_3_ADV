import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactInformation from "../../components/ContactInformation/ContactInformation";
import Title from "../../components/Title/Title";
import img1 from './../../assets/images/page-heading-bg.jpg';
import img2 from './../../assets/images/email-icon.png'
import img3 from './../../assets/images/phone-icon.png'
import "./ContactUs.css"
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactMap from "../../components/ContactMap/ContactMap";
function ContactUs() {
  const title1 = "HOME / CONTACT US";
  const pro1 = "CONTACT US";
  return (
    <div className="contact-us">
      <Title image={img1} title={title1} pro={pro1} />
      <div className="contact-container">
        <div className="contactmain">
          <ContactInformation />
          <ContactInfo image={img2} info1="010-020-0340" info2="Phone Number" />
          <ContactInfo image={img3} info1="info@villa.com" info2="Business Email" />
        </div>
        <div className="contactus-form">
          <ContactForm />
        </div>
      </div>
      <div className="map-page">
        <ContactMap />
      </div>
    </div>
  )
}

export default ContactUs