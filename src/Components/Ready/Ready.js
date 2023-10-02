import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import edit from '../Assets/edit.png'
import copy from '../Assets/copy.png'
import facebook from '../Assets/Facebook1.png'
import whatsapp from '../Assets/whatsapp.png'
import telegram from '../Assets/Group.png'
import ReactPlayer from 'react-player'
import './Ready.css'
import VideoRepo from '../Assets/VideoRepo.png'
import { useEffect } from 'react'

const Ready = () => {
    const { id } = useParams()
    console.log(id)
    const [video, setVideo] = useState({})
    useEffect(()=> {
        setVideo({})
    }, [])
    return (
        <div>
            <div>
                <div>
                    <h2>Your video is ready!</h2>
                    <div>
                        <p>Name</p>
                        {video?.name ?
                            <p>{video?.name}</p> :
                            <p>your video name</p>}
                        <img src={edit} alt='edit icon' />
                    </div>
                    <div>
                        <input type='email' id='email' name='email' placeholder='enter email of reciever' />
                        <button>Send</button>
                    </div>
                    <div>
                        <p>Video Url</p>
                        <div>
                            <p></p>
                            <p><img src={copy} alt='copy' />&nbsp; Copy</p>
                        </div>
                    </div>
                    <div>
                        <p>Share your video</p>
                        <div>
                            <div>
                                <img src={facebook} alt='facebook' />
                                <p>Facebook</p>
                            </div>
                            <div>
                                <img src={whatsapp} alt='whatsapp' />
                                <p>WhatsApp</p>
                            </div>
                            <div>
                                <img src={telegram} alt='telegram' />
                                <p>Telegram</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='player-container'>
                        <ReactPlayer
                            className='react-player'
                            url={"https://youtu.be/hLDQ88vAhIs?si=n5cITECPS0GW86ax"}
                            width={"100%"}
                            height={"100%"}
                            light={<img src={VideoRepo} alt='Thumbnail' />}
                        />
                    </div>
                    <div>
                        <h3>Transcript</h3>
                        <select defaultValue="English" name="language" id="language">
                            <option value="english">English</option>
                            <option value="french">French</option>
                            <option value="spanish">Spanish</option>
                            <option value="italian">Italian</option>
                            <option value="chinese">Chinese</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <p>To ensure the availability and privacy of your video, we
                    recommend saving it to your account.
                </p>
                <button>Save Button</button>
                <p>Don't have an account? <a href='/signup'>Create account</a></p>
            </div>
        </div>
    )
}

export default Ready