import React from "react";
import '../style/navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <Link to="/">
          <h2>PODCASTER</h2>
        </Link>
        <p>LOADING</p>
      </div>
    </>
  );
};

export default Navbar;
