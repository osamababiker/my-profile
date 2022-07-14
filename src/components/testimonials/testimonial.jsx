import React from "react";
import cookies from 'js-cookie';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../assets/images/profile1.jpg";
import profilePic2 from "../../assets/images/profile2.jpg";
import profilePic3 from "../../assets/images/profile3.jpg";
import profilePic4 from "../../assets/images/profile4.jpg";
import "./testimonial.css";

const Testimonial = () => {

  const currentLangCode = cookies.get('i18next') || 'en';

  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem",
    },
  ];

  return (
    <div className="container testimonial-wrapper" id="testimonial"  dir={currentLangCode === 'ar' ? 'ltr' : ''}> 
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <p>{client.review}</p>
              </div>
            </SwiperSlide>
          ); 
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
