import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; 
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useEffect } from 'react';
import 'flag-icon-css/css/flag-icons.min.css';
import './header.css';
import Logo from '../../assets/images/logo.jpeg';
import GlassesimojiIcon from '../../assets/images/icons/glasses.png';
import HeartIcon from '../../assets/images/icons/heart.png';
import HumbleEmojiIcon from '../../assets/images/icons/humble.png';
import GlobeIcon from "@iconscout/react-unicons/icons/uil-globe";


const Header = () => { 

  const transition = { duration: 1, type: "spring", repeat: Infinity,  };
  const { t } = useTranslation();
  
  const languages = [
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
      dir: 'ltr'
    },
    { 
      code: 'ar',
      name: 'العربية',
      country_code: 'sa',
      dir: 'rtl'
    },
  ];

  const currentLangCode = cookies.get('i18next') || 'en';
  const currentLang = languages.find(lang => lang.code === currentLangCode);

  useEffect(() => {
    document.body.dir = currentLang.dir;
    if(currentLang.code === 'ar')  
      document.body.style.fontFamily = 'Tajawal, sans-serif';
    else 
      document.body.style.fontFamily = 'Roboto, sans-serif';
  }, [currentLang]);

  return (
    <header id='header'>
    <nav className="navbar sidebar-menu">
      <div className="container">
        <RouterLink className="navbar-brand" to="/">
          <img
            src={Logo}
            alt=""
            width="30"
            className="d-inline-block align-text-top rounded-circle"/> { t('site_name') }
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
                className="d-inline-block align-text-top rounded-circle"/> { t('site_name') } 
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
                  { t('header_home_link') } 
                </Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="services" spy={true} smooth={true}>
                  { t('header_services_link') }
                </Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="contact-me" spy={true} smooth={true}>
                  { t('header_contact_link') }
                </Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="portfolio" spy={true} smooth={true}>
                  { t('header_portfolio_link') }
                </Link>
              </li>
              <div className="dropdown">
                <button className="btn btn-link dropdown-toggle" style={{ color: "var(--text-color)" }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <GlobeIcon  />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {languages.map(({code, name, country_code}) => (
                    <li key={country_code}>
                      <button onClick={() => i18next.changeLanguage(code)} className="dropdown-item" > 
                        <span className={`flag-icon flag-icon-${country_code}`}></span> {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </ul>
            <address className="contact-info">
              <span>{ t('sidebar_email_label') }: wow@osamababiker.com</span>
              <span>{ t('sidebar_phone_label') }: +971525440487</span>
              <span>Abu Dhabi , UAE</span>
              <span>linkedin.com/in/osamambabiker</span>
            </address>
            <a download href="cv.pdf" className="btn side-menu-action">
              { t('sidebar_my_resume_button') } <img src={HumbleEmojiIcon} alt="Humble imoji Icon" />
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
              { t('home_landing_slogan_one') } <br />
              <span> { t('home_landing_slogan_two') }  <img src={HeartIcon} alt="heart icon" /> . </span>
            </motion.h1>
            <p>
              { t('home_landing_slogn_bio') }
            </p>
            <Link className='btn btn-main landing-contact-btn mt-4' to="contact-me" spy={true} smooth={true}>
              { t('home_landing_action_btn') } <img src={GlassesimojiIcon} alt="" />
            </Link>
        </div>
    </section>
  </header>
  );
}

export default Header;