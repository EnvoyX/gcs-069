import { Outlet, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import requireAuth from "../utility/requireAuth";

export default function HostLayout() {
  const activeStyle = {
    color: "#161616",
    fontWeight: "bold",
    textDecoration: "underline",
  };
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      console.log(token);
      try {
        const response = await fetch(
          `http://localhost:8000/verify-token/${token}`
        );
        if (!response.ok) {
          throw new Error("Token verification failed");
        }
        requireAuth(true);
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login?message=You Have to Login First");
      }
    };
    verifyToken();
  }, [navigate]);
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
