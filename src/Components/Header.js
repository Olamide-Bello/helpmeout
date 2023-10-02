import React from 'react'
import logo from './Assets/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} alt='logo'/>
                <p>HelpMeOut</p>
            </div>
            <div className='links'>
                <a href='/'>Features</a>
                <a href='/'>How It Works</a>
            </div>
            <a href='/signup'><p className='cta'>Get Started</p></a>
        </div>
    )
}

export default Header