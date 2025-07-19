import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { onAuthStateChanged} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import axios from "axios";

const Card = ({ movieData, isLiked = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const[email,setEmail]= useState(undefined)
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) setEmail(currentUser.email)
      else navigate ("/login")
  })

  const addToList = async()=>{
    try{
await axios.post("http://localhost:5000/api/user/add",{email,data:movieData})
    }catch (err){
console.log(err)
    }
  }

  return (
    <div className="relative w-60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="w-60 "
        src={`http://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie"
      />

{isHovered && (
  <div className="absolute top-[-100px] left-0 w-60 z-50 bg-black shadow-2xl transition-all duration-300 ease-in-out rounded-md">
    <video className="w-full rounded-t" src={video} autoPlay loop muted />
    
    <div className="bg-gray-800 p-2">
      <h3
        className="text-white font-bold text-xl px-2 cursor-pointer"
        onClick={() => navigate("/player")}
      >
        {movieData.name}
      </h3>
      <div className="flex items-center space-x-3 text-white text-xl px-2 py-1">
        <IoPlayCircleSharp title="Play" onClick={() => navigate("/player")} className="cursor-pointer" />
        <RiThumbUpFill title="Like" className="cursor-pointer" />
        <RiThumbDownFill title="Dislike" className="cursor-pointer" />
        {isLiked ? (
          <BsCheck title="Remove from List" className="cursor-pointer" />
        ) : (
          <AiOutlinePlus onClick={(addToList)} title="Add to My List" className="cursor-pointer" />
        )}
        <BiChevronDown title="More Info" className="cursor-pointer" />
      </div>
      <ul className="flex flex-wrap text-white text-sm px-2 py-1">
        {movieData.genres.map((genre) => (
          <li key={genre} className="mr-2">{genre}</li>
        ))}
      </ul>
    </div>
  </div>
)}

    </div>
  );
};

export default Card;
