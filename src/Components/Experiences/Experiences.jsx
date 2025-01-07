import './Experiences.css'
import Experiences_Data from '../../assets/experiences_data';
import github_img from '../../assets/githubImage.png'

const Experiences = () => {
  return (
    <div id="experiences" className="experiences">
      <div className="experiences-title">
        <h1>My Experiences</h1>
      </div>

      <div className="experiences-container">
        {Experiences_Data.map((experience, index) => {
          const descriptionList = experience.s_desc.split('.').filter(desc => desc.trim() !== "");
          const dynamicStyle = {
            left: experience.left, 
          };
          return (
            <div key={index} className="experiences-format">
              <h3>{experience.s_name}</h3>
              <div className="company-icon"style={dynamicStyle}
              data-index={index}
              >
              <img src={experience.s_companyimage} alt="Company" />
              </div>
              <h2>{experience.s_company}</h2>
              <ul>
                {descriptionList.map((desc, i) => (
                  <li key={i}>{desc.trim()}.</li>
                ))}
              </ul>
              <h2>{experience.s_date}</h2>
              <div className="github-icon">
              <a href={experience.s_github} target="_blank" rel="noopener noreferrer">
              <img src={github_img} alt="GitHub" />
               </a>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences