import React from 'react';
import './services.css';
import MobileAppIcon from '@iconscout/react-unicons/icons/uil-apps';
import WebAppIcon from '@iconscout/react-unicons/icons/uil-browser';
import IdeaIcon from '@iconscout/react-unicons/icons/uil-lightbulb-alt';
import ContentIcon from '@iconscout/react-unicons/icons/uil-document-layout-center';

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
                  <MobileAppIcon />
                  <p> I can Build your app </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 mt-4">
                <div className="box p-4">
                  <IdeaIcon />
                  <p> I can Provide you with great business ideas </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 mt-4">
                <div className="box p-4">
                  <WebAppIcon />
                  <p> I can Design your website </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 mt-4">
                <div className="box p-4">
                  <ContentIcon />
                  <p> I can build a brand and write content  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Services;