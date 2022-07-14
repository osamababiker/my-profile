import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import './single_post.css';
import Work from '../../assets/images/work/01.jpg';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';
import Logo from '../../assets/images/logo.jpeg';
import WorkImg from '../../assets/images/work/01.jpg';
import HumbleEmojiIcon from '../../assets/images/icons/humble.png';
import GlobeIcon from "@iconscout/react-unicons/icons/uil-globe";

const SinglePost = () => { 

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
        <>
        <header>
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
                    <RouterLink className="navbar-brand"  to="/">
                    <img
                        src={Logo}
                        alt=""
                        width="30"
                        className="d-inline-block align-text-top rounded-circle"/> { t('site_name') }
                    </RouterLink>
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
                        <RouterLink  className="nav-link active" to="/">
                            { t('header_home_link') } 
                        </RouterLink>
                    </li>
                    <li className="nav-item">
                        <RouterLink className='nav-link' to="/#services">
                            { t('header_services_link') }
                        </RouterLink>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="contact-me" spy={true} smooth={true}>
                            { t('header_contact_link') }
                        </Link>
                    </li>
                    <li className="nav-item">
                        <RouterLink className='nav-link' to="/#portfolio">
                            { t('header_portfolio_link') }
                        </RouterLink>
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

        <section className="container post-cover" id="post-cover">
            <img src={WorkImg} alt="post" />
        </section>
    </header>

        <section className="single-post container">
        <div className="content">
            <h3>
                Keep kissing your product 
            </h3>
            <p>
                s simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <img src={Work} alt="single post" />

            <p>
                s simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <iframe  src="https://www.youtube.com/embed/fWC53mPdaw4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            
            <p>
                s simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </section>
    <Contact />
    <Footer />
    </>
  )
}

export default SinglePost;