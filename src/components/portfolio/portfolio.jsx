import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Work1 from '../../assets/images/work/01.jpg';
import Work2 from '../../assets/images/work/02.jpg';
import Work3 from '../../assets/images/work/03.jpg';
import GlassesimojiIcon from '../../assets/images/icons/glassesimoji.png';

const Portfolio = () => {

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h3>Some cool stuff <img src={GlassesimojiIcon} alt="Glasses imoji Icon" /> </h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <img src={Work1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Work2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Work3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Work1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
