import React from 'react';
import './my_works.css';
import Work1 from '../../assets/images/work/01.jpg';
import Work2 from '../../assets/images/work/02.jpg';
import Work3 from '../../assets/images/work/03.jpg';

const MyWorks = () => {
  return (
    <section className="my-works" id="my-work">
    <div className="container">
      <h3>Some cool stuff </h3>
      <div className="work-boxes">
        <div className="box">
          <a href="work.js">
            <div className="row wow bounceInDown" data-wow-duration="0.8s" data-wow-delay="0.5s">
              <div className="col-md-6">
                <h4>Keep kissing your product  </h4>
                <p>
                  This text is an example of a text that can be replaced in the same space. This text was generated from the Arabic text generator, 
                  where you can generate such text or many other texts in addition to increasing the number of characters generated by the application.
                </p>
              </div>
              <div className="col-md-6">
                <img src={Work1} alt="Work1" />
              </div>
            </div>
          </a>
        </div>
        <div className="box">
          <a href="work.js">
            <div className="row wow bounceInDown" data-wow-duration="0.8s" data-wow-delay="1.0s">
              <div className="col-md-6">
                <h4>Bsklita project  </h4>
                <p>
                  This text is an example of a text that can be replaced in the same space. This text was generated from the Arabic text generator, 
                  where you can generate such text or many other texts in addition to increasing the number of characters generated by the application.
                </p>
              </div>
              <div className="col-md-6">
                <img src={Work2} alt="Work1" />
              </div>
            </div>
          </a>
        </div>
         <div className="box">
          <a href="work.js">
            <div className="row wow bounceInDown" data-wow-duration="0.8s" data-wow-delay="1.5s">
              <div className="col-md-6">
                <h4>Featue creap </h4>
                <p>
                  This text is an example of a text that can be replaced in the same space. This text was generated from the Arabic text generator, 
                  where you can generate such text or many other texts in addition to increasing the number of characters generated by the application.
                </p>
              </div>
              <div className="col-md-6">
                <img src={Work3} alt="" />
              </div>
            </div>
          </a>
        </div>
         <div className="box">
          <a href="work.js">
            <div className="row wow bounceInDown" data-wow-duration="0.8s" data-wow-delay="2.0s">
              <div className="col-md-6">
                <h4>Disired lines  </h4>
                <p>
                  This text is an example of a text that can be replaced in the same space. This text was generated from the Arabic text generator, 
                  where you can generate such text or many other texts in addition to increasing the number of characters generated by the application.
                </p>
              </div>
              <div className="col-md-6">
                <img src={Work1} alt="" />
              </div>
            </div>
          </a>
        </div>
        <div className="box">
          <a href="work.js">
            <div className="row wow bounceInDown" data-wow-duration="0.8s" data-wow-delay="2.5s">
              <div className="col-md-6">
                <h4>GitStartup </h4>
                <p>
                  This text is an example of a text that can be replaced in the same space. This text was generated from the Arabic text generator, 
                  where you can generate such text or many other texts in addition to increasing the number of characters generated by the application.
                </p>
              </div>
              <div className="col-md-6">
                <img src={Work2} alt="" />
              </div>
            </div>
          </a>
        </div>
          <div className="box">
            <a href="work.js">
              <div className="row wow bounceInDown" data-wow-duration="0.8s" data-wow-delay="3.0s">
                <div className="col-md-6">
                  <h4>Sunk cost effect </h4>
                  <p>
                    This text is an example of a text that can be replaced in the same space. This text was generated from the Arabic text generator, 
                    where you can generate such text or many other texts in addition to increasing the number of characters generated by the application.
                  </p>
                </div>
                <div className="col-md-6">
                  <img src={Work3} alt="" />
                </div>
              </div>
            </a>
          </div>
      </div>
    </div>
  </section>
  );
}

export default MyWorks;