import React from "react";
import holbertonLogo from '../assets/Holberton-logo.jpg';
import './Header.css';

function Header() {
  return (
    <div className="App-header">
      <img src={holbertonLogo} className="App-logo" alt="logo" />

      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
