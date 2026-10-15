import React from 'react'
import {BsArrowLeft} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import video from "../assets/video.mp4"

const Player = () => {
    const navigate=useNavigate()

  return (
    <div >
<div className='text-5xl  text-white '>
    <button onClick={()=>navigate(-1)} className='absolute z-20 cursor-pointer'><BsArrowLeft /></button>
</div>


<video className=' max-h-screen min-w-screen object-cover'  src={video} autoPlay loop controls muted  ></video>

    </div>
  )
}

export default Player