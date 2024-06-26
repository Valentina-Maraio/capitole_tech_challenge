import React from "react";
import '../style/navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <Link to="/" className="link-text">
          <h1>Podcaster</h1>
        </Link>
        <h2>LOADING</h2>
      </div>
    </>
  );
};

export default Navbar;
