import React from 'react'
import "./ContactInfoCard.css"

const ContactInfoCard = ({iconurl, text , reference}) => {
  return (
    <div className='contact-details-card'>
        <div className='icon'>
            <img src={iconurl} alt=''/>
        </div>
        <a href={text}>{reference}</a> 

        {/* <p>{text}</p> */}
    </div>
  )
}

export default ContactInfoCard
