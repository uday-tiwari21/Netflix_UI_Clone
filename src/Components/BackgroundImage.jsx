import React from 'react'
import Background from "../assets/login.jpg"

const BackgroundImage = () => {
  return (
    <div className='w-full h-screen bg-cover bg-center'>
<img className='brightness-50' src={Background} alt="background" />
    </div>
  )
}

export default BackgroundImage