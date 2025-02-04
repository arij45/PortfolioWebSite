
import './Hero.css'
import profile_img from '../../assets/profileImage.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=""/>
        <h1><span>I'am Arij Kortas, </span>Android and Flutter Developer, a DevOps Enthusiast, and currently a Flutter freelancer </h1>
        <p>I'm an Android and Flutter Developer, a DevOps Enthusiast and currently a Flutter freelancer from Tunisia. I'm a dynamic and ambitious developer with solid experience in software development.</p>
        <div className='hero-action'>
            <div><AnchorLink className='hero-connect' href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">
             <a href="/Arij_Kortas_Software_Engineer.pdf" download="Arij_Kortas_Software_Engineer.pdf" className="hero-resume-link">My Resume</a>
             </div>
            </div>
    </div>
  )
}

export default Hero