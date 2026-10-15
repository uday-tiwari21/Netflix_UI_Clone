import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Netflix from "./pages/Netflix"
import Login from './pages/login';
import Signup from "./pages/Signup"
import Player from './pages/Player';
import UserListedMovies from "./pages/UserListedMovies"

const App = () => {
  return (
    
   
   <BrowserRouter>
   <Routes>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/" element={<Signup/>}/>
    <Route exact path="/netflix" element={<Netflix/>}/>
    <Route exact path="/player" element={<Player/>} />

   </Routes>
   </BrowserRouter>
    
  )
}


export default App