import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h3 className="header-name">Varun Sharma</h3>
      <button className="btn__resume">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1mBJn48KSnLzkaRbGTyxPKwRwoqNQY-tu/view?usp=sharing"
        >
          Resume
        </a>
      </button>
    </div>
  );
}

export default Header;
