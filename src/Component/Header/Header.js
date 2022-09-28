import React from 'react';
import img from './logo.png'
import './Header.css'
const Header = () => {
    return (
        <div >
          <nav className='header'> 
          <img src={img} alt="" />
          </nav>
        </div>
    );
};

export default Header;