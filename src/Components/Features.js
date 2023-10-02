import React from 'react'
import recordIcon from './Assets/recordIcon.png'
import shareIcon from './Assets/shareIcon.png'
import revisit from './Assets/revisit.png'
import videoRepo from './Assets/VideoRepo.png'

const Features = () => {
  return (
    <div className='features'>
        <div className='features-hd'>
            <h3>Features</h3>
            <p>Key Highlights of Our Extension</p>
        </div>
        <div className='features-bd'>
            <div className='features1'>
                <div>
                    <img src={recordIcon} alt='record icon'/>
                    <div>
                        <h3>Simple Screen Recording</h3>
                        <p>Effortless screen recording for everyone. 
                            Record with ease, no tech expertise required.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={shareIcon} alt='share icon'/>
                    <div>
                        <h3>Easy-to-Share URL</h3>
                        <p>Share your recordings instantly with a single link. No attachments, 
                            no downloads.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={revisit} alt='revisit icon'/>
                    <div>
                        <h3>Revisit Recordings</h3>
                        <p>Access and review your past content effortlessly. Your recordings, 
                            always at your fingertips.
                        </p>
                    </div>
                </div>
            </div>
            <img src={videoRepo} alt='video repository'/>
        </div>
    </div>
  )
}

export default Features