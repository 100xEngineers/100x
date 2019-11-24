import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import Featured from '../../components/featured';
import Feed from '../../components/feed'

class Home extends Component {
  render() {
    return (
      <div className="home-content">
        <Navbar />
        <Featured />
        <Feed />
      </div>
    );
  }
}

export default Home;