import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { AiFillUpSquare } from "react-icons/ai";

function Com(props) {
  return (
   <div>
     <div className='header'>
      
      <div className='row'>
      <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand " href="/home"><img className='logo' src='https://www.kanavulabs.com/images/logo.png' alt='Logo'/></a>
    <button className="navBtn navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body navList">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/services">Our Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/products">Our Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/faq">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/contact">Contact Us</a>
          </li>
          
        </ul>
        <button type="button" className="clBtn btn btn-dark">Call us</button>
      </div>
    </div>
  </div>
</nav>
      </div>

    </div>

    <div className='content'>
            {props.children}
        </div>

        <ScrollToTop smooth component={<AiFillUpSquare className='topIcon' />} />
        
        
        

    <div className='footer mt-5'>
    <div className="row">
        <div className="text-center container-fluid">
            <p className="copyright">© 2023 All Rights Reserved by Kanavu Labs Private Limited.</p>
        </div>
    </div>
    </div>
      </div>
  )
}

export default Com