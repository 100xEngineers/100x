import React, { Component } from 'react';
import './index.css';
import author from '../../media/male_avatar.svg';
import author2 from '../../media/female_avtar.svg';

class Featured extends Component {
  render() {
    return (
      <div className="featured-wrap">
        <div className="featured-content">
          <h2 className="title">Featured</h2>
          <div className="featured-item-wrap featured-science">
            <h3>How NASA Astronauts Spark Joy in Marie Kondo While Decluttering Space Station</h3>
            <div className="featured-auth-wrap">
              <div className="auth-icon">
                <img src={author} alt="author" />
              </div>
              <div className="auth-name">
                <h4> by Harry Porter</h4>
              </div>
            </div>            
          </div>
          <div className="featured-item-wrap featured-politics">
            <h3>Obama must pardon Manning and Snowden before Trump takes office because its already too late</h3>
            <div className="featured-auth-wrap">
              <div className="auth-icon">
                <img src={author2} alt="author" />
              </div>
              <div className="auth-name">
                <h4> by Hermione Granger</h4>
              </div>
            </div>            
          </div>
          <div className="featured-item-wrap featured-travel">
            <h3>Exploring and heading off the main path or simply finding yourself somewhere totally unexpected.</h3>
            <div className="featured-auth-wrap">
              <div className="auth-icon">
                <img src={author2} alt="author" />
              </div>
              <div className="auth-name">
                <h4> by Ginny Weasley</h4>
              </div>
            </div>            
          </div>
          <div className="featured-item-wrap featured-computer-science">
            <h3>Quantum Generative Adversarial Networks for learning and loading random distributions</h3>
            <div className="featured-auth-wrap">
              <div className="auth-icon">
                <img src={author} alt="author" />
              </div>
              <div className="auth-name">
                <h4> by Lord Voldemort</h4>
              </div>
            </div>            
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default Featured;