import React from 'react';
import Header from '../../components/header/header';
import Services from '../../components/services/services';
import CallToAction from '../../components/call_to_action/call_to_action';
import Posts from '../../components/posts/posts';
import Testimonial from '../../components/testimonials/testimonial';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';

const Home = () => {
  return (
    <>
        <Header />
        <Services />
        <CallToAction />
        <Posts />
        <Testimonial />
        <Contact />
        <Footer />
    </>
  )
}

export default Home;