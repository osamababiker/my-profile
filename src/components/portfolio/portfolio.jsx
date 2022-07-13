import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper';
import { useTranslation } from "react-i18next";
import "swiper/css";
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import Work1 from '../../assets/images/work/01.jpg';
import Work2 from '../../assets/images/work/02.jpg';
import Work3 from '../../assets/images/work/03.jpg';
import GlassesimojiIcon from '../../assets/images/icons/glassesimoji.png';

const Portfolio = () => {

  const { t } = useTranslation();

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h3>{ t('portfolio_section_title') }<img src={GlassesimojiIcon} alt="Glasses imoji Icon" /> </h3>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          grabCursor={true}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          className="portfolio-slider">
          <SwiperSlide>
            <Link to='/posts/1'>
              <img src={Work1} alt="" />
              <h4> Keep kissing your product </h4>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Work2} alt="" />
            <h4> Timey project </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Work3} alt="" />
            <h4> Bsklita </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Work1} alt="" />
            <h4> feature creep </h4>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
