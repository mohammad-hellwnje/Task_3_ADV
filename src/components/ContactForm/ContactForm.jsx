import './ContactForm.css'
function ContactForm() {
  return (
   <div className="contact-form">
    <form action="">
        <label htmlFor="">Full Name</label>
        <input type="text" placeholder='Your Name...'/>
        <label htmlFor="">Email Address</label>
        <input type="text" placeholder='Your E-mail...'/>
        <label htmlFor="">Subject</label>
        <input type="text" placeholder='Subject...'/>
        <label htmlFor="">Message</label>
       <textarea placeholder="Your Message..."></textarea>
        <button>Send Message</button>
    </form>
   </div>
  )
}

export default ContactForm