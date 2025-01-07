import './Footer.css'
import footer_logo from '../../assets/profileNameImage.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
    <div className='footer-top-left'>
        <img src={footer_logo} alt=""/>
        <p>I'm an Android and Flutter Developer, as well as a DevOps Enthusiast from Tunisia. I'm a dynamic and ambitious developer with solid experience in software development.</p>
    </div>
    </div>
    <hr/>
    <div className='footer-bottom'>
        <p className='footer-bottom-left'>© 2025 Arij Kortas. All rights reserved.</p>
        <div className='footer-bottom-right'>
           <p>Term of Services</p> 
           <p>Privacy Policy</p>
           <p>Connect with me</p>
        </div>
    </div>
    </div>
  )
}

export default Footer