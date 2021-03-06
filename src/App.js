import { Routes, Route } from 'react-router-dom';

import './App.css';
import './assets/css/normalize.css';
import Home from './pages/home/home';
import SinglePost from './pages/posts/single_post';

function App() {
  return ( 
    <main>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/posts/:id' element={<SinglePost />} />
      </Routes>
    </main>
  );
}

export default App;
