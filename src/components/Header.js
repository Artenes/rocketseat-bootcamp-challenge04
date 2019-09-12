import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header id="header">
        <h1>Larabook</h1>
        <a id="profile" href="#">
          My Profile
          <span id="icon-profile"></span>
        </a>
      </header>
    );
  }

}

export default Header;