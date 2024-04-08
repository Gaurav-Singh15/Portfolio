import React from 'react'
import "./ContactMe.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container' id='contact'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div className='contact' style={{flex: 1}}>
                <ContactInfoCard
                iconurl="https://www.freepngimg.com/download/email_marketing/62507-icons-marketing-webmail-computer-email-icon.png"
                text="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gaurav.shubham476@gmail.com"
                reference="E-mail"
                />
                <ContactInfoCard
                iconurl="https://tse1.mm.bing.net/th?id=OIP.HpC2_7cZ9qjpeHimqpolugHaFj&pid=Api&P=0&h=180"
                text="https://github.com/Gaurav-Singh15"
                reference="Github"
                />
                <ContactInfoCard
                iconurl="https://aliciavalero.com/wp-content/uploads/2020/11/logo-Linkedin.png"
                text="https://www.linkedin.com/in/gaurav-singh-7b9961218/"
                reference="LinkedIn"
                />
            </div>
            {/* <div style={{flex: 1}}>
                <ContactForm/>
            </div> */}
        </div>
    </section>
  )
}

export default ContactMe
