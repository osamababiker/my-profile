import React from 'react';
import './footer.css';
import Logo from '../../assets/images/logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <img src={Logo} className="rounded-circle" alt="osama babiker" />
            <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
            </div>
            <p className="copyright">All Right Recived <span> Osama Mohammed Babiker &copy; 2022</span> </p>
        </div>
    </footer>
  );
}

export default Footer;