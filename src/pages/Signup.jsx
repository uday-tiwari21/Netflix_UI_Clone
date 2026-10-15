import React, {  useState } from "react";
import Header from "../components/Header.jsx";
import BackgroundImage from "../Components/BackgroundImage";

import {createUserWithEmailAndPassword}  from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config.js";
import { useNavigate } from "react-router-dom";

const Signup = () => {

const navigate=useNavigate()
const [show, setshow] = useState("")
const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")

const GETstartedHandler=(event)=>{
setshow(event.target.innerHTML)
}


const UserDataEmail=(event)=>{
setEmail(event.target.value)

}

const UserDataPassword=(event)=>{
setPassword(event.target.value)

}

console.log({Email,Password})


const formHandler= async (event)=>{
 event.preventDefault

  try{
const email=Email
const password=Password
await createUserWithEmailAndPassword(firebaseAuth,email,password)
    navigate("/login");

  }
  catch(err){
    console.log(err)
  }

}






  return (
    <>
      <div className="overflow-hidden">
        <BackgroundImage />
      <Header />
      <div className=" text-amber-50 absolute top-45 left-120">
        <div className="">
          <h1 className="text-4xl font-extrabold p-1">
            Unlimited movies,TV shows
          </h1>
          <h1 className="text-4xl font-extrabold ml-40">and more</h1>
          <h4 className="text-xl font-medium ml-25 p-1">
            Starts at $149.Cancel at any time
          </h4>
          <br />
          <h6 className="text-xl font-medium ml-1 ">
            Ready to watch? Enter your Email to create or restart your <br />
            <span className="ml-50">membership.</span>
          </h6>
        </div>

        <div>
          <div className="form">

            <input onChange={UserDataEmail}
              className="border-2 w-72 p-4 m-3 h-15.5 align-middle "
              type="email"
              placeholder="Enter email"
              name="email"
            />

        {
          show=="Get Started"&&(
          <input onChange={UserDataPassword}
              className="border-2 w-72 p-4 h-15.5 align-middle"
              type="password"
              placeholder="Enter password"
              name="password"
            />
             
          )
        }
            {
              show!="Get Started"&&(
                 
            <button className="bg-red-600 m-2 align-middle cursor-pointer text-2xl font-semibold w-50 h-16" onClick={GETstartedHandler}>
              Get Started
            </button>
              )
            }
            
           
          </div>
          <button onClick={formHandler} type="submit" className="bg-red-600 m-3 rounded-[6px] text-2xl font-semibold w-35 cursor-pointer h-15">
            Sign Up
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
