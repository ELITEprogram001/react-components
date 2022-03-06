import React from 'react';
import './BusinessCard.css';
import profilePicture from '../images/snow_profile_1.jpg';
import emailIcon from '../images/email.png';
import linkedinIcon from '../images/linkedin_white_background.png';
import twitterIcon from '../images/twitter.png';
import githubIcon from '../images/github.png';
import instagramIcon from '../images/instagram.png';

export default function BusinessCard() {
  return (
    <div className="business-card">
      <img className='profile-img' src={profilePicture} alt="Dalton Ridgeway in Colorado." />
      <div className='content'>
        <ContactInfo />
        <Info title="About">
          I'm a recent Computer Science B.S. graduate from UHCL. I've designed this
          page using React to showcase my progress learning. I'm looking for a job 
          as a web developer.
        </Info>
        <Info title="Interests">
          I LOVE music. I'm hoping that one day I can stumble into a job where I can
          work with some of the amazing talent I listen to everyday. Ultimately, I picked
          Computer Science for a reason and will be happy at most positions where I am 
          coding.
        </Info>
      </div>
      <SocialFooter />
    </div>
  );
}

function ContactInfo() {
  return (
    <div className='contact-info'>
      <h1 className='contact-name'>Dalton Ridgeway</h1>
      <h3 className='contact-profession'>Web Developer</h3>
      <div className='contact-links'>
        <a className='link email link-icon' href='mailto:ridgeway.jared@gmail.com'>
          <img src={emailIcon} alt='email icon' />
          <span>Email</span>
        </a>
        <a className='link linkedin link-icon' href='https://www.linkedin.com/in/dalton-ridgeway/'>
          <img src={linkedinIcon} alt='linkedin link' />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

function Info(props) {
  return (
    <div className='info'>
      <h4>{props.title}</h4>
      <p>{props.children}</p>
    </div>
  );
}

function SocialFooter() {
  return (
    <div className='social-footer'>
      <a className='footer-icon' href='https://twitter.com/ELITEprogram001'>
        <img src={twitterIcon} alt='twitter icon link'/>
      </a>
      <a className='footer-icon' href='https://www.instagram.com/jack_of_nil/'>
        <img src={instagramIcon} alt='instagram icon link'/>
      </a>
      <a className='footer-icon' href='https://github.com/ELITEprogram001'>
        <img src={githubIcon} alt='github icon link'/>
      </a>
    </div>
  );
}