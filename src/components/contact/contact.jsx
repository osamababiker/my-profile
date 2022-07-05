import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-me container" id="contact-me">
        <div className="content">
          <h3>
            Let us talk innovation 
          </h3>
          <div className="contact-form">
              <form action="">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" placeholder="What is your name" name="name" className="form-input" />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="subject">How i can help you ?</label>
                    <select id="subject" name="subject" className="form-input">
                      <option value="app">Build your app</option>
                      <option value="web">Design your website</option>
                      <option value="ideas">Provide business ideas</option>
                      <option value="content">Write you social media content</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="email">Your email</label>
                    <input type="text" id="email" placeholder="Enter your email"  name="email" className="form-input" />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="phone">Your phone</label>
                    <input type="tel" id="phone" placeholder="Enter your phone number"  name="phone" className="form-input" />
                  </div>
                  <div className="form-group col-md-12">
                    <label for="message">Your message</label>
                    <textarea name="message" id="message" className="form-input" placeholder="Tell me more how i can help you"></textarea>
                  </div>
                </div>
                <input type="submit" className="btn contact-me-btn" value="Send Message" />
              </form>
          </div>
        </div>
      </section>
  );
}

export default Contact;