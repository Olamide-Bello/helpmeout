import React from 'react'
import step1 from './Assets/step1.png'
import step2 from './Assets/step2.png'
import step3 from './Assets/step3.png'
import rec1 from './Assets/rec1.png'
import rec2 from './Assets/rec2.png'
import rec3 from './Assets/rec3.png'



const How = () => {
  return (
    <div className='how'>
        <h3>How it works</h3>
        <div className='how-steps'>
            <div>
                <img src={step1} alt='step1'/>
                <div>
                    <h3>Record Screen</h3>
                    <p>Click the "Start Recording" button in our extension.  choose which part 
                        of your screen to capture and who you want to send it to.
                    </p>
                </div>
                <img src={rec1} alt='rec1'/>
            </div>
            <div>
                <img src={step2} alt='step2'/>
                <div>
                    <h3>Share Your Recording</h3>
                    <p>We generate a shareable link for your video. Simply send it to your audience 
                        via email or copy the link to send via any platform.
                    </p>
                </div>
                <img src={rec2} alt='rec2'/>
            </div>
            <div>
                <img src={step3} alt='step3'/>
                <div>
                    <h3>Learn Effortlessly</h3>
                    <p>Recipients can access your video effortlessly through the provided link, with 
                        our user-friendly interface suitable for everyone.
                    </p>
                </div>
                <img src={rec3} alt='rec3'/>
            </div>
        </div>
    </div>
  )
}

export default How