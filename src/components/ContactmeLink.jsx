import React from 'react'
import { Link } from 'react-router-dom'

import contact from '../../images/contact.png'


const ContactmeLink = () => {
  return (
      <Link to="/contact">
        <img className="contact" src={contact} alt="Contact me" />
      </Link>
  )
}

export default ContactmeLink