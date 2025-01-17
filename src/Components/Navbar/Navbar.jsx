
import './Navbar.css'
import profileName from '../../assets/profileNameImage.png'
import { useState , useRef} from 'react'
import themePatternImage from '../../assets/themePatternImage.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {

 const [menu,setMenu] = useState("home");
 const menuRef = useRef();

 const openMenu = () => {
  menuRef.current.style.right="0"

 }

 const closeMenu = () => {
  menuRef.current.style.right="-350px"

 }

  return (
    <div className='navbar'>
        <img src={profileName} alt="Profile Name"/>
        <span onClick={openMenu}className="material-icons nav-mob-open">menu</span>
        <ul ref={menuRef}className="nav-menu">
        <span onClick={closeMenu}className="material-icons nav-mob-close">close</span>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=="home"?<img src={themePatternImage} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu=="about"?<img src={themePatternImage} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#experiences'><p onClick={()=>setMenu("experiences")}>Experiences</p></AnchorLink>{menu=="experiences"?<img src={themePatternImage} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu=="work"?<img src={themePatternImage} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu=="contact"?<img src={themePatternImage} alt=''/>:<></>}</li>
        </ul>
        <div><AnchorLink className='nav-connect' href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar