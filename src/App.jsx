import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

const App = () => {
  console.log(process.env.REACT_APP_API_KEY);
  console.log(process.env.REACT_APP_ANOTHER_KEY);
  return (
    <div>
      <h1>Welcome to React</h1>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
