import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p>
            &copy; {new Date().getFullYear()} Edusity. All rights reserved. | Designed by <a href="" target="_blank" rel="noopener noreferrer">Your Name</a>
        </p>
        <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
  )
}

export default Footer