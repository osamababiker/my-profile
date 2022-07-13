import React from 'react';
import { useTranslation } from "react-i18next";
import './contact.css';
import HeartIcon from '../../assets/images/icons/heart.png';
import { motion } from 'framer-motion';

const Contact = () => {

  const transition = { duration: 1, type: "spring", repeat: Infinity,  };
  const { t } = useTranslation();

  return (
    <section className="contact-me container" id="contact-me">
        <div className="content">
          <h3>
            { t('contact_section_title') }
          </h3>
          <div className="contact-form">
              <form action="">
                <div className="row">
                  <div className="form-group col-md-4">
                    <label htmlFor="name">{ t('contact_section_name_label') }</label>
                    <input type="text" id="name" placeholder={ t('contact_section_name_placeholder') } name="name" className="form-input" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="email">{ t('contact_section_email_label') }</label>
                    <input type="text" id="email" placeholder={ t('contact_section_email_label') }  name="email" className="form-input" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="subject">{ t('contact_section_subject_label') }</label>
                    <select id="subject" name="subject" className="form-input">
                      <option value="app">{ t('contact_section_subject_app_option') }</option>
                      <option value="web">{ t('contact_section_subject_web_option') }</option>
                      <option value="ideas">{ t('contact_section_subject_idea_option') }</option>
                      <option value="content">{ t('contact_section_subject_content_option') }</option>
                    </select>
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="message">{ t('contact_section_message_label') }</label>
                    <textarea name="message" id="message" className="form-input" placeholder={ t('contact_section_message_placeholder') }></textarea>
                  </div>
                </div>
                <motion.button 
                 whileInView={{ scale: 1.1 }}
                 transition={transition}
                type="submit" className="btn contact-me-btn">
                  { t('contact_section_btn') } <img src={HeartIcon} alt="heart icon" /> 
                </motion.button>
              </form>
          </div>
        </div>
      </section>
  );
}

export default Contact;