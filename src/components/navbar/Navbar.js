import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import "../navbar/Navbar.css";
function Navbar() {
  const LINKS = ["Home", "Contact", "About", "Sign in"];

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <div className="logo">
            <h2>Exclusive</h2>
          </div>

          <ul className="items">
            {LINKS?.map((val, i) => (
              <li key={i} className="item">
                {val}
              </li>
            ))}
          </ul>

          <div className="icons">
            <div className="form">
              <form>
                <input
                  type="text"
                  name="search"
                  placeholder="What are you looking for?"
                />
                <CiSearch />
              </form>
            </div>
            <IoCartOutline />
            <GoHeart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
