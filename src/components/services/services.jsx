import React from 'react';
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie';
import './services.css';
import MobileAppIcon from '../../assets/images/mobile-app.png';
import WebAppIcon from '../../assets/images/web-design.png';
import IdeaIcon from '../../assets/images/idea.png';
import ContentIcon from '../../assets/images/content.png';
 
const Services = () => {

  const { t } = useTranslation();
  const currentLangCode = cookies.get('i18next') || 'en';
  
  return (
    <section className="services text-left" id="services">  
        <div className="container">
          <h2>{ t('services_section_title') }</h2>
          <p>
            { t('services_section_bio_one') } <br />
            { t('services_section_bio_two') }
            <span> { t('services_section_bio_three') } <i>{ t('services_section_bio_four') }</i> <i>{ t('services_section_bio_five') }</i> <i>{ t('services_section_bio_six') }</i> <i>{ currentLangCode === 'en' ? t('services_section_bio_seven') : '' }</i> { currentLangCode === 'en' ? t('services_section_bio_eight') : '' } </span>
          </p>
          <div className="services-boxes"> 
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12 mt-4">
                <div className="box p-4">
                  <img src={MobileAppIcon} alt="Mobile App Icon" />
                  <p> { t('services_section_app_box') } </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 mt-4">
                <div className="box p-4">
                  <img src={IdeaIcon} alt="Idea Icon" />
                  <p> { t('services_section_ideas_box') } </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 mt-4">
                <div className="box p-4">
                  <img src={WebAppIcon} alt="Web App Icon" />
                  <p> { t('services_section_web_box') } </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 mt-4">
                <div className="box p-4">
                  <img src={ContentIcon} alt="Content Icon" />
                  <p> { t('services_section_branding_box') }  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Services;