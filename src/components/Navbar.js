import React from "react";
import '../style/navbar.css'
import { Link } from "react-router-dom";
import LoadingCircle from "./LoadingCircle";

const Navbar = () => {

  return (
    <>
      <div className="nav_container">
        <Link to="/" className="link-text">
          <h1>Podcaster</h1>
        </Link>
        <LoadingCircle/>
      </div>
    </>
  );
};

export default Navbar;
