// MyWork.js
import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="mywork-item">
              <p className="mywork-title">{work.title}</p> {/* Project title */}
              <a href={work.github_link} target="_blank" rel="noopener noreferrer">
                <img src={work.w_img} alt={work.title} />
              </a>
              <p className="mywork-techstack">{work.tech_stack}</p> {/* Tech stack below image */}
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;