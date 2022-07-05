import React from 'react';
import './footer.css';
import Logo from '../../assets/images/logo.jpeg';

const Footer = () => {
  return (
    <footer class="footer">
        <div class="container">
            <img src={Logo} class="rounded-circle" alt="osama babiker" />
            <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
            </div>
            <p class="copyright">All Right Recived <span> Osama Mohammed Babiker &copy; 2022</span> </p>
        </div>
    </footer>
  );
}

export default Footer;