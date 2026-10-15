import React from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
const Headerlogout = () => {


const navigate =useNavigate()

const Handler=()=>{
navigate("/");
}
  return (




    <>
    <div className='text-white top-0 w-full absolute flex'>
            <div className='w-40 m-1'> <img src={logo} alt="logo" /></div>
            <div className=' ml-auto m-3'><button className="bg-red-600 cursor-pointer rounded-[6px] text-xl font-semibold w-26 h-10" onClick={Handler}><center>Log Out</center></button></div>
        </div>
    </>
  )
}

export default Headerlogout