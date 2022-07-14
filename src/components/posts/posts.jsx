import "./posts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper';
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie';
import "swiper/css";
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import GlassesimojiIcon from '../../assets/images/icons/glassesimoji.png';
import { useEffect, useState } from "react";

const Posts = () => {

  const [posts , setPosts] = useState([]);
  const { t } = useTranslation();
  const currentLangCode = cookies.get('i18next') || 'en';

  const fetchPosts = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/posts');
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    }
    getPosts();
  }, []);


  return (
    <div className="portfolio" id="portfolio" dir={currentLangCode === 'ar' ? 'ltr' : ''}>
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
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <Link to={`/posts/${post.id}`}>
                  <img src={`http://127.0.0.1:8000/upload/posts/${post.poster}`} alt={post.enTitle} />
                  <h4> {post.enTitle} </h4>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Posts;
