import React from 'react'
import right from './Assets/right.png'
import hero1 from './Assets/hero1.png'
import hero2 from './Assets/hero2.png'
import hero3 from './Assets/hero3.png'
import bg1 from './Assets/bg1.png'
import bg2 from './Assets/bg2.png'
import extension from './Assets/HelpMeOut.zip'
import { saveAs } from 'file-saver';

const Hero = () => {

    const handleDownload = ()=> {
        saveAs(extension, "HelpMeOut.zip");
    }
    return (
        <div className='hero'>
            <div className='hero-dt'>
                <h1>Show Them <br/>Don't Just Tell</h1>
                <p>Help your friends and loved ones by creating and sending videos on how 
                    to get things done on a website.
                </p>
                <div onClick={handleDownload}><p>Install HelpMeOut &nbsp; &nbsp;</p><img src={right} alt='arrow right'/></div>
            </div>
            <div className='hero-img'>
                <div className='hero-img1'>
                    <img src={hero1} alt='hero1'/>
                    <img src={hero2} alt='hero2'/>
                </div>
                <img className='hero3' src={hero3} alt='hero3'/>
                <img className='img-left' src={bg1} alt='background'/>
                <img className='img-right' src={bg2} alt='background'/>
            </div>
        </div>
    )
}

export default Hero