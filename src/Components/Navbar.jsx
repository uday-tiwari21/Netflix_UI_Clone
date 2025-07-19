import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { firebaseAuth } from "../utils/firebase-config";
import { FaPowerOff, FaSearch } from "react-icons/fa";

export default function Navbar({ isScrolled }) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
const navigate=useNavigate()
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  const redirect=()=>{
   signOut(firebaseAuth)
   navigate("/login")
  }
  return (
    <div
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center h-24 px-16">
        
        <div className="flex items-center gap-8">
          <div>
            <img src={logo} alt="Logo" className="h-16" />
          </div>
          <ul className="flex gap-8 list-none">
            {links.map(({ name, link }) => (
              <li key={name}>
                <Link to={link} className="text-white no-underline hover:underline">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      
        <div className="flex items-center gap-4">
          
          <div
            className={`flex items-center gap-2 px-2 py-1 transition-all duration-300 ${
              showSearch
                ? "border border-white bg-black/60"
                : "border-0 bg-transparent"
            }`}
          >
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
              className="text-white text-lg focus:outline-none"
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setInputHover(false);
                setShowSearch(false);
              }}
              className={`bg-transparent border-none text-white transition-all duration-300 placeholder-white focus:outline-none ${
                showSearch
                  ? "w-48 opacity-100 visible px-2 py-1"
                  : "w-0 opacity-0 invisible"
              }`}
            />
          </div>

       
          <button
            onClick={redirect}
            className="text-red-500 text-lg focus:outline-none"
          >
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </div>
  );
}
