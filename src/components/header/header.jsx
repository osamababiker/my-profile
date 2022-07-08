import React from 'react';
import './header.css';
import Logo from '../../assets/images/logo.jpeg';
import GlassesimojiIcon from '../../assets/images/icons/glasses.png';
import HeartIcon from '../../assets/images/icons/heart.png';
import HumbleEmojiIcon from '../../assets/images/icons/humble.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; 
import { Link as RouterLink } from 'react-router-dom';

const Header = () => { 

  const transition = { duration: 1, type: "spring", repeat: Infinity,  };

  return (
    <header id='header'>
    <nav className="navbar sidebar-menu">
      <div className="container">
        <RouterLink className="navbar-brand" to="/">
          <img
            src={Logo}
            alt=""
            width="30"
            className="d-inline-block align-text-top rounded-circle"/> Osama M Babiker 
          </RouterLink>
        <button
          className="btn-navbar-toggler btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            <Link className="navbar-brand"  to="header" spy={true} smooth={true}>
              <img
                src={Logo}
                alt=""
                width="30"
                className="d-inline-block align-text-top rounded-circle"/> Osama M Babiker 
            </Link>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" >
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link activeClass='active' className="nav-link active" to="header" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="services" spy={true} smooth={true}>
                  What I do
                </Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="contact-me" spy={true} smooth={true}>
                  Let Us Talk
                </Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="portfolio" spy={true} smooth={true}>
                  My Work
                </Link>
              </li>
            </ul>
            <address className="contact-info">
              <span>Email: wow@osamababiker.com</span>
              <span>Phone: +971525440487</span>
              <span>Abu Dhabi , UAE</span>
              <span>linkedin.com/in/osamambabiker</span>
            </address>
            <a download href="cv.pdf" className="btn side-menu-action">
              My Resume <img src={HumbleEmojiIcon} alt="Humble imoji Icon" />
            </a>
          </div>
        </div>
      </div> 
    </nav>
    <section className="landing" id="landing">   
        <div className="content">
            <motion.h1
               whileInView={{ scale: 1.1 }}
               transition={transition}
            >
              I Can Help You Build The <br />
              <span> Next WOW  <img src={HeartIcon} alt="heart icon" /> . </span>
            </motion.h1>
            <p>
              with thousands of soluations for every consumer problem , you need
              more than digital product you need to build creative inovative wow
              product
            </p>
            <Link className='btn btn-main landing-contact-btn mt-4' to="contact-me" spy={true} smooth={true}>
              Let us build your next wow <img src={GlassesimojiIcon} alt="" />
            </Link>
        </div>
    </section>
  </header>
  );
}

export default Header;