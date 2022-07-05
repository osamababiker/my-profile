import React from 'react';
import './services.css';
import MobileAppIcon from '../../assets/images/mobile-app.png';
import WebAppIcon from '../../assets/images/web-design.png';
import IdeaIcon from '../../assets/images/idea.png';
import ContentIcon from '../../assets/images/content.png';

const Services = () => {
  return (
    <section className="services" id="services"> 
        <div className="container">
          <h2>I Build innovation Only</h2>
          <p>
              We already reach the point where people have thousands of choices for every single need <br />
              In such a days the last things people want to see is an app or website claims to make the world a better place
              <span> I can help you deal with that by building <i>new</i> <i>creative</i> <i>innovative</i> <i>WOW</i> solutions </span>
          </p>
          <div className="services-boxes">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12 mt-4">
                <div className="box p-4">
                  <img src={MobileAppIcon} alt="Mobile App Icon" />
                  <p> Mobile Apps </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 mt-4">
                <div className="box p-4">
                  <img src={IdeaIcon} alt="Idea Icon" />
                  <p>  ideas </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 mt-4">
                <div className="box p-4">
                  <img src={WebAppIcon} alt="Web App Icon" />
                  <p> Design website </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 mt-4">
                <div className="box p-4">
                  <img src={ContentIcon} alt="Content Icon" />
                  <p> Branding  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Services;