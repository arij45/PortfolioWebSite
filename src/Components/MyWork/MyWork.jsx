import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import github_img from '../../assets/githubImage.png'
const MyWork = () => {
    return (
      <div id='work'className="mywork">
        <div className="mywork-title">
          <h1>My Latest Work</h1>
        </div>
        <div className="mywork-container">
          {mywork_data.map((work, index) => (
            <div key={index} className="work-card">
              <div className="work-image-container">
                <img src={work.w_img} alt={work.w_title} className="work-image" />
                <div className="github-icon">
                  <a href={work.w_github} target="_blank" rel="noopener noreferrer">
                    <img src={github_img} alt="GitHub" />
                  </a>
                </div>
              </div>
              <div className="work-details">
                <h3 className="work-title">{work.w_title}</h3>
                <p className="work-description">{work.w_desc}</p>
                <div className="work-tags">
                  {work.w_tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="work-tag">{`#${tag}`}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mywork-showmore">
          <p>Show More</p>
          <span className="material-icons">arrow_forward</span>
        </div>
      </div>
    );
  };
export default MyWork