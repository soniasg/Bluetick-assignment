
import React from 'react'
import './Navbar.css';
import Products from '../Products/Products';
import Carousel from '../Carousel/Carousel';
import Blogs from '../Blogs/Blogs';
import LetsConnect from '../LetsConnect/LetsConnect';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Bluetick Consultants                          
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-0 me-lg-2 mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#products">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#blogs">
            Blogs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact us
          </a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar