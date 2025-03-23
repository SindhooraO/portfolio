import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';


const Nav=()=>{
    return(
        <>
 <nav className="navbar">
 <Link to="/" className="nav-logo">Sindhoora O</Link>
 <div className="nav-links">
   <Link to="/about">About</Link>
   <Link to="/projects">Projects</Link>
   <a href="https://drive.google.com/file/d/116hLPRK4VxJy7LYODpauZhGXoYIgRrEb/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>

   <Link to="/contact">Contact</Link>

 </div> </nav>

 <hr></hr>
 </>
    )
}
export default Nav;