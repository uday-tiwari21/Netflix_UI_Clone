import React, { useState } from "react";
import BackgroundImage from "../Components/BackgroundImage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import Headerlogin from "../Components/Headerlogin";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const DataEmail = (event) => {
    setemail(event.target.value);
  };

  const DataPassword = (event) => {
    setpassword(event.target.value);
  };
  console.log({ email, password });

  const formHandlerlogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/netflix");
    } catch (err) {
      console.log(err);
    }
  };





  return (
    <>
      <div className="h-screen overflow-hidden">
        <BackgroundImage />
        <Headerlogin />

        <div className="absolute left-[36.5%] top-[40%] ">
          <div className=" bg-black opacity-80  text-amber-50 inline-block h-80 w-100  ">
            <center className="text-xl font-bold m-6">Login</center>
            <form>
              <center>
                <div>
                  <input
                    onChange={DataEmail}
                    className="w-60 h-10 m-4 bg-white text-gray-600"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <input
                    onChange={DataPassword}
                    className="w-60 h-10 m-4  bg-white text-gray-600"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <button
                 
                    onClick={formHandlerlogin}
                    className="bg-red-600 cursor-pointer text-xl m-4 font-bold w-60 p-1 rounded-sm"
                  >
                    Log In
                  </button>
                </div>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
