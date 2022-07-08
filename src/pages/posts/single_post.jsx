import React from 'react';
import Logo from '../../assets/images/logo.jpeg';
import WorkImg from '../../assets/images/work/01.jpg';
import HumbleEmojiIcon from '../../assets/images/icons/humble.png';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './single_post.css';
import Work from '../../assets/images/work/01.jpg';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';

const SinglePost = () => {
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
                    <RouterLink className="navbar-brand"  to="/">
                    <img
                        src={Logo}
                        alt=""
                        width="30"
                        className="d-inline-block align-text-top rounded-circle"/> Osama M Babiker 
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
                            Home
                        </RouterLink>
                    </li>
                    <li className="nav-item">
                        <RouterLink className='nav-link' to="/#services">
                            What I do
                        </RouterLink>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="contact-me" spy={true} smooth={true}>
                            Let Us Talk
                        </Link>
                    </li>
                    <li className="nav-item">
                        <RouterLink className='nav-link' to="/#portfolio">
                            My Work
                        </RouterLink>
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