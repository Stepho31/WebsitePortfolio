// import React from 'react'
// import './Hero.css'
// import profile_img from '../../assets/profile_img.svg'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

// const Hero = () => {
//   return (
//     <div id='home' className='hero'>
//       <img src={profile_img} alt="" className='profile-img' />
//       <h1><span>I'm Stephen Byron,</span>Software Engineer based in USA.</h1>
//       <p>I am a Software Engineer from Dallas, Tx, USA with 2+ years of experience in multiple companies like UNOS and First Republic Bank.</p>
//       <div className="hero-action">
//         <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
//         <div className="hero-resume">My resume</div>
//         <a href="/your_resume.pdf" download="Stephen_Byron_Resume">My resume</a>

//       </div>
//     </div>
//   )
// }

// export default Hero
import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile Image" className='profile-img' />
      <h1><span>I'm Stephen Byron,</span> Software Engineer based in the USA.</h1>
      <p>I am a Software Engineer from Dallas, TX, USA with 2+ years of experience in multiple companies like UNOS and First Republic Bank.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="Stephen Byron Updated Resume.pdf" download="Stephen_Byron_Resume" className="anchor-link">My resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;
