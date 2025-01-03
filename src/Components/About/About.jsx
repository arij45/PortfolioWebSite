
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
            <p>I am a passionate full-stack web developer who is dedicated to bringing innovative ideas to life. </p>
            <p>My journey began with a strong foundation in computer science and a genuine interest in crafting seamless user experiences. Through school projects and valuable internships, I gained hands-on experience in both front-end and back-end technologies. I enjoy the challenge of turning complex problems into elegant solutions, and my creativity and problem-solving mindset have made me a sought-after professional in the ever-evolving world of web development.I am a passionate full-stack web developer who is dedicated to bringing innovative ideas to life. My journey began with a strong foundation in computer science and a genuine interest in crafting seamless user experiences. Through school projects and valuable internships, I gained hands-on experience in both front-end and back-end technologies. I enjoy the challenge of turning complex problems into elegant solutions, and my creativity and problem-solving mindset have made me a sought-after professional in the ever-evolving world of web development.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                <p>skill1</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                <p>skill1</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                <p>skill1</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                <p>skill1</p><hr style={{width:"50%"}}/>
                </div>
            </div>
        </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
     </div>

  )
}

export default About