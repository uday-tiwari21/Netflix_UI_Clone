import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import movielogo from "../assets/homeTitle .webp";
import Background from "../assets/home.jpg";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  fetchmovies, getGenres } from "../store";
import Slider from '../Components/Slider'

const Netflix = () => {
  const navigate = useNavigate();
  const [isScrolled, setisScrolled] = useState(false);
const genresLoaded=useSelector((state)=> state.netflix.genresLoaded)
  const dispatch=useDispatch()
  const movies=useSelector((state)=>state.netflix.movies)

  useEffect(()=>{
dispatch(getGenres())
  },[])

useEffect(()=>{
  if(genresLoaded)
    dispatch(fetchmovies({type:"all"}))
})


  window.onscroll = () => {
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar isScrolled={isScrolled} />
        <div>
          <img className="brightness-60  w-screen" src={Background} alt="background" />
        </div>
        <div>
          <div className="absolute top-70 left-30">
            <img src={movielogo} alt="movielogo" />
          </div>
          <div className=" absolute bottom-6 left-30 flex ">
            <div className="h-10 w-35">
              <button
                onClick={() => {
                  navigate("/Player");
                }}
                className="h-10 rounded-[6px] p-5 bg-gray-200 hover:bg-gray-300 cursor-pointer w-30 flex items-center text-xl font-sans gap-1"
              >
                <FaPlay /> play
              </button>
            </div>
            <div className="h-10 w-40">
              <button className="h-10 rounded-[6px] p-2 bg-gray-500 hover:bg-gray-600 cursor-pointer opacity-90 text-white w-40 flex items-center text-2xl font-sans gap-1">
                <AiOutlineInfoCircle /> More info
              </button>
            </div>
          </div>
        </div>
      </div>
      <Slider movies={movies}/>
    </>
  );
};

export default Netflix;
