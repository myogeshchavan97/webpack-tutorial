import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Home Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel
        praesentium, maiores officiis repellat illum provident expedita tenetur
        commodi voluptate aliquid distinctio. Asperiores soluta quae veniam
        excepturi, quidem libero maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel
        praesentium, maiores officiis repellat illum provident expedita tenetur
        commodi voluptate aliquid distinctio. Asperiores soluta quae veniam
        excepturi, quidem libero maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel
        praesentium, maiores officiis repellat illum provident expedita tenetur
        commodi voluptate aliquid distinctio. Asperiores soluta quae veniam
        excepturi, quidem libero maiores?
      </p>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h2>Profile Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel
        praesentium, maiores officiis repellat illum provident expedita tenetur
        commodi voluptate aliquid distinctio. Asperiores soluta quae veniam
        excepturi, quidem libero maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel
        praesentium, maiores officiis repellat illum provident expedita tenetur
        commodi voluptate aliquid distinctio. Asperiores soluta quae veniam
        excepturi, quidem libero maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel
        praesentium, maiores officiis repellat illum provident expedita tenetur
        commodi voluptate aliquid distinctio. Asperiores soluta quae veniam
        excepturi, quidem libero maiores?
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel
        praesentium, maiores officiis repellat illum provident expedita tenetur
        commodi voluptate aliquid distinctio. Asperiores soluta quae veniam
        excepturi, quidem libero maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel
        praesentium, maiores officiis repellat illum provident expedita tenetur
        commodi voluptate aliquid distinctio. Asperiores soluta quae veniam
        excepturi, quidem libero maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel
        praesentium, maiores officiis repellat illum provident expedita tenetur
        commodi voluptate aliquid distinctio. Asperiores soluta quae veniam
        excepturi, quidem libero maiores?
      </p>
    </div>
  );
};

const App = () => {
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
