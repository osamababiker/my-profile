import './assets/css/normalize.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import SinglePost from './pages/post/single_post';

function App() {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/posts/1' element={<SinglePost />} />
      </Routes>
      
    </main>
  );
}

export default App;
