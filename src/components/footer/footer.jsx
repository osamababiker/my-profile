import React from 'react';
import { useTranslation } from "react-i18next";
import './footer.css';
import Logo from '../../assets/images/logo.jpeg';

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="footer">
        <div className="container">
            <img src={Logo} className="rounded-circle" alt="osama babiker" />
            <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
            </div>
            <p className="copyright"> { t('footer_section_copyright') } <span> { t('site_name') } &copy; 2022</span> </p>
        </div>
    </footer>
  );
}

export default Footer;