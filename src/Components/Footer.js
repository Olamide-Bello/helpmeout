import React from 'react'
import logo from './Assets/footerLogo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt='logo'/>
            <p>HelpMeOut</p>
        </div>
        <ul>
            <li>Menu</li>
            <li>Home</li>
            <li>Converter</li>
            <li>How It Works</li>
        </ul>
        <ul>
            <li>About Us</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
        </ul>
        <ul>
            <li>Screen Record</li>
            <li>Browser Window</li>
            <li>Desktop</li>
            <li>Application</li>
        </ul>
    </div>
  )
}

export default Footer