import './assets/css/normalize.css';
import './App.css';
import Header from './components/header/header';
import Services from './components/services/services';
import CallToAction from './components/call_to_action/call_to_action';
import MyWorks from './components/my_works/my_works';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <main>
      <Header />
      <Services />
      <CallToAction />
      <MyWorks />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
