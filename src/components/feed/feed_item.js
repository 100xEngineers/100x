import React, { Component } from 'react';
import './feed_item.css'
import boy from '../../media/boy.svg';
import women3 from '../../media/women3.jpg';
import women4 from '../../media/women4.jpg';
import men from '../../media/men.jpg';

class FeedItem extends Component {
  render() {
    return (
      <div className="feed-item-wrap">
        <div className="author-photo">
          <img src={this.props.photo}  alt="author"/>
        </div>
        <div className="feed-item-details">
          <h3>{this.props.title}</h3>
          <h4>
            by {this.props.author} {this.props.time} ago {this.props.replies} replies
          </h4>
        </div>
        <div className="top-contributor">
          <div className="contributor" >
            <img src={boy} alt="Who cars"/>
          </div>
          <div className="contributor" >
            <img src={women3} alt="Who cars"/>
          </div>
          <div className="contributor" >
            <img src={women4} alt="Who cars"/>
          </div>
          <div className="contributor" >
            <img src={men} alt="Who cars"/>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedItem;