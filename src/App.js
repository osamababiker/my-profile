import './assets/css/normalize.css';
import './App.css';
import Header from './components/header/header';
import Services from './components/services/services';
import CallToAction from './components/call_to_action/call_to_action';
import Portfolio from './components/portfolio/portfolio';
import Testimonial from './components/testimonials/testimonial';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <main>
      <Header />
      <Services />
      <CallToAction />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
