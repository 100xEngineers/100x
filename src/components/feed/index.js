import React, { Component } from 'react';
import './index.css'
import FeedItem from './feed_item';
import women1 from '../../media/women.jpg';
import women2 from '../../media/women2.jpg';
import women3 from '../../media/women3.jpg';
import men from '../../media/men.jpg';
import star1 from '../../media/starl1.svg';
import star2 from '../../media/starl2.svg';
import star3 from '../../media/starl3.svg';
import StrackProfile from './strack_profile';
import female from '../../media/female_avtar.svg'
import male from '../../media/male_avatar.svg'

class index extends Component {
  render() {
    return (
      <div className="feed-wrap">
        <div className="discussion-section">
          <div className="discussion-header">
            <div className="section-title">
              <h2>Your discussion</h2>
              <h4>view all discussions</h4>
            </div>
            <div className="intiate-discussion">
              <button type="button"> 
                Start a new discussion
              </button>
            </div>
          </div>
          <div className="feed-items-wrap">
            <FeedItem 
              photo={women1}
              title={"How to get used to people addressing you differently when you get into new relationship"}
              author={"Maisie Williams"}
              time={"2 hours"}
              replies={78}
              isActive={true}/>
            <FeedItem 
              photo={women3}
              title={"Lets just discuss rendom stuff like how to survive just on tea for eternity"}
              author={"YouKnow Who"}
              time={"2 days"}
              replies={3}
              isActive={false}/>
            <FeedItem 
              photo={men}
              title={"Recently I have developed ability to give dagaa to my all friends here are the benefits of that"}
              author={"Saone Doshi"}
              time={"2 hours"}
              replies={1178}
              isActive={false}/>
            <FeedItem 
              photo={women2}
              title={"Your excitement for this one is obvious but I am bored now so lets just review website and not focus on content for now"}
              author={"Aham brahmasmi"}
              time={"2 hours"}
              replies={78}
              isActive={true}/>
          </div>
        </div>
        <div className="top-strecks-section">
          <div className="section-title">
            <h2> Top Stracks</h2>
            <h4> Regularly participate in making this community cooler and earn strack points and also chance to featue in this section</h4>
          </div>
          <div className="stracks-wrap">
            <StrackProfile 
              photo={women2}
              name={"Anushka Sharma"}
              level={star3}
              stracks={1220}/>
            <StrackProfile 
              photo={men}
              name={"Adam Gilchrist"}
              level={star3}
              stracks={1190}/>
            <StrackProfile 
              photo={female}
              name={"Virat Kohli"}
              level={star3}
              stracks={980}/>
            <StrackProfile 
              photo={women2}
              name={"Satya Nadela"}
              level={star2}
              stracks={976}/>
            <StrackProfile 
              photo={women2}
              name={"Graham Bell"}
              level={star2}
              stracks={948}/>
            <StrackProfile 
              photo={women2}
              name={"Alexa Bell"}
              level={star2}
              stracks={883}/>
            <StrackProfile 
              photo={women2}
              name={"Siri Sharma"}
              level={star2}
              stracks={836}/>
            <StrackProfile 
              photo={women2}
              name={"Sakshi Maharaj"}
              level={star2}
              stracks={780}/>
            <StrackProfile 
              photo={women2}
              name={"Asharam Bapu"}
              level={star1}
              stracks={604}/>
            <StrackProfile 
              photo={women2}
              name={"Narendra Gandhi"}
              level={star1}
              stracks={540}/>
          </div>

        </div>
        
      </div>
    );
  }
}

export default index;