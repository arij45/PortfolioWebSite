
import './Hero.css'
import profile_img from '../../assets/profileImage.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=""/>
        <h1><span>I'am Arij Kortas, </span>Android and Flutter Developer, as well as a DevOps Enthusiast</h1>
        <p>I'm an Android and Flutter Developer, as well as a DevOps Enthusiast from Tunisia. I'm a dynamic and ambitious developer with solid experience in software development.</p>
        <div className='hero-action'>
            <div><AnchorLink className='hero-connect' href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">
             <a href="/KortasArij_SoftwareEngineer.pdf" download="KortasArij_SoftwareEngineer.pdf" className="hero-resume-link">My Resume</a>
             </div>
            </div>
    </div>
  )
}

export default Hero