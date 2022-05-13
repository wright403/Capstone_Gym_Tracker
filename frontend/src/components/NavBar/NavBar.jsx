import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="revenuepage" style={{ textDecoration: "none", color: "white" }}>
            <b>Gym Tracker</b>
          </Link>
          </li>
          <li>
          <Link to="/distance" style={{ textDecoration: "none", color: "white" }}><b>Distance</b></Link>
          </li>
           {/* <Link to="/places" style={{ textDecoration: "none", color: "white" }}>PlaceDetails!</Link>  */}
           <li>
          <Link to="/reviewpage"  style={{ textDecoration: "none", color: "white" }}><b>Chart</b></Link>
          </li>
          <li>
          <Link to="/placesmap" style={{ textDecoration: "none", color: "white" }}><b>Places</b></Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
