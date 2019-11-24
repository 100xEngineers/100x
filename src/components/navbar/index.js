import React, { Component } from 'react';
import './index.css';
import notification from '../../media/notification.png';
import avtar from '../../media/female_avtar.svg'

class Navbar extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-nav-section">
          <div className="logo-wrapper">
            <div className="logo-first-line">
              100X
            </div>
            <div className=";logo-second-line">
              engineers
            </div>
          </div>
          <div className="nav-quick-links">
            <ul>
              <li> Feed </li>
              <li> Discover </li>
              <li> Feed </li>
            </ul>
          </div>
        </div>
        <div className="search-wrapper">
          <div className="search">
              <input type="text" className="searchTerm" placeholder="search....." />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
            </button>
          </div> 
        </div>
        <div className="right-nav-section">
          <div className="notification-wrapper">
            <img src={notification} alt="notification"/>
          </div>
          <div className="login-signup-wrapper">
            <div className="login-button">
              Login
            </div>
            <div className="login-button signup">
              Sign-up
            </div>
            <div className="avtar-icon">
              <img src={avtar} alt="you" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;