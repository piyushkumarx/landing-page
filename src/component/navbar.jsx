import "./navbar.css";
import { useEffect } from "react";
import { NavFunction } from "../app";







function Navbar() {



   useEffect(() => {
    NavFunction(); 
  }, []);


  return (
    <>
      <div className="navbar">
        <div id="headerlogo">
          <img src="./logo.svg" alt="logo" />
        </div>

        <div id="optionBox">
          <img id="hamburger" src="./icon-hamburger.svg" alt="icon-hamburger" />
        </div>

        <div id="closeBox">
            <img src="./icon-close.svg" alt="icon-close" />
          
        </div>

        <div id="option">
          <span className="choose">How we work</span>
          <span className="choose">Blog</span>
          <span className="choose">Account</span>
          <span id="view">View plans</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;


