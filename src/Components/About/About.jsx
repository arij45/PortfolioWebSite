
import './About.css'
import profile_img from '../../assets/profileImage.png'
const About = () => {
  return (
    <div id='about'className='about'>
     <div className="about-title">
        <h1>About me</h1>
     </div>
     <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
            <div className="about-para">
            <p>I am an enthusiastic Android and Flutter developer with a solid background in computer science and a passion for mobile development. My journey started with school projects and internships, where I developed hands-on expertise in building intuitive user experiences. I enjoy the challenge of solving complex problems and take pride in creating Android applications from concept to deployment. Seeing my work come to life on devices is deeply rewarding. With a creative mindset and a knack for problem-solving, I am committed to delivering innovative solutions in the ever-evolving mobile development landscape. </p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                <p>Flutter</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                <p>Java</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                <p>Spring Boot</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                <p>Github</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                <p>Docker</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                <p>Jenkins</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                <p>Azure</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                <p>AWS</p><hr style={{width:"50%"}}/>
                </div>
            </div>
        </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>6 years</h1>
                <p>ENGINEERING DIMPLOMA</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>6</h1>
                <p>INTERSHIPS</p>
            </div>
        </div>
     </div>

  )
}

export default About