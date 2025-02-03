import { Link, NavLink } from 'react-router-dom';
import avatarImage from '../assets/images/avatar-icon.png';

export default function Header() {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };
  return (
    <header className="h-[110px] flex items-center px-[10px]">
      <Link
        className="site-logo text-black mr-auto uppercase font-[900] text-[25px] hover:no-underline "
        to={`/`}
      >
        #VANLIFE
      </Link>
      <nav className="flex items-center">
        <NavLink
          className="font-[600] text-[#4d4d4d] py-1 px-5 hover:underline hover:text-[#161616]"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className="font-[600] text-[#4d4d4d] py-1 px-5 hover:underline hover:text-[#161616]"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="font-[600] text-[#4d4d4d] py-1 px-5 hover:underline hover:text-[#161616]"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/vans"
        >
          Vans
        </NavLink>

        <Link to="login" className="login-link">
          <img src={avatarImage} className="login-icon h-5 w-5" />
        </Link>
      </nav>
    </header>
  );
}
