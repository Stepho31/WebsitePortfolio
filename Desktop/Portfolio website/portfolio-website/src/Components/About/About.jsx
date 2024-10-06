import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/user_icon.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Software Engineer with over 3 years of expertise in the technology field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p>My passion for Software Engineering is not only reflected in my experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>C#</p><hr style={{width:"65%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Swift</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"55%"}} /></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"80%"}} /></div>
            </div>
        </div> 
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
