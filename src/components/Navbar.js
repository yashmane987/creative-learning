import React from 'react'
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <div className="hero">
      <nav>
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li className="dropdown">
            <a href="#courses">Courses</a>
            <ul className="dropdown-menu">
              <li><a href="#certificate">Certificate</a></li>
            </ul>
          </li>
          <li><a href="#features">Features </a></li>
          <li><a href="#review">Reviews </a></li>
          <li><a href="#policy">Policy </a></li>
        </ul>

        <button className="contact-btn">Contact</button>
      </nav>
    </div>
  )
}

export default Navbar
