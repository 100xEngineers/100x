import React, { Component } from 'react';
import './strack_profile.css'

class StrackProfile extends Component {
  render() {
    return (
      <div className="profile-wrap">
        <div className="avtar-wrap">
          <img src={this.props.photo} alt="stracker" />
        </div>
        <div className="profile-name">
          <h3>{this.props.name}</h3>
          <img src={this.props.level} alt="level" />
        </div>
        <h4>{this.props.stracks}</h4>
      </div>
    );
  }
}

export default StrackProfile;