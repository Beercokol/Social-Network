import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";


const Header = (props) => {
  return (
    <header className="header">
      <img src='https://i.pinimg.com/originals/d8/61/d5/d861d5e86ac54fd848f6de237795e21f.png' />
     
      <div className='login-info'>
       { props.isAuth? <NavLink to='login'>{props.login}</NavLink>:  <NavLink to='login'>Login</NavLink> }
      
      </div>
      </header>
  );
};
export default Header;
