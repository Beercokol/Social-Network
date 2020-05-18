import React from "react";
import './Navbar.css';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
       <div> <NavLink to="/profile">Profile</NavLink> </div>
              <div><NavLink to="/message">Messages</NavLink> </div>
       <div><a href="/music">Music</a> </div>
       <div><a href="/settings">Settings</a></div>
              <div><NavLink to="/users">All Users</NavLink></div>
              <button className="logout">Log out</button>
          
       </nav>
  );
};
export default Navbar;

