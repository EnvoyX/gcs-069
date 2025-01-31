import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (
    <BrowserRouter>
      <header className="">
        <Link className="site-logo" to={`/`}>
          #VANLIFE
        </Link>
        <nav className="">
          <Link to={`/about`}>About</Link>
          <Link>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
