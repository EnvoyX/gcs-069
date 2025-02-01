import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VansDetail from "./pages/VansDetail";
import "../Backend/api/server";

function App() {
  return (
    <BrowserRouter>
      <header className="h-[110px] flex items-center px-[10px]">
        <Link
          className="site-logo text-black mr-auto uppercase font-[900] text-[25px] "
          to={`/`}
        >
          #VANLIFE
        </Link>
        <nav className=" ">
          <Link className="font-[600] text-[#4d4d4d] py-1 px-5" to="/about">
            About
          </Link>
          <Link className="font-[600] text-[#4d4d4d] py-1 px-5 " to="/vans">
            Vans
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vans" element={<Vans />}></Route>
        {/* Route with params */}
        <Route path="/vans/:id" element={<VansDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
