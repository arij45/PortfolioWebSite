import './Experiences.css'
import Experiences_Data from '../../assets/experiences_data';

const Experiences = () => {
  return (
    <div id='experiences'className='experiences'>
      <div className='experiences-title'>
        <h1>My Experiences</h1>
        </div>  
        <div className='experiences-container'>
        {Experiences_Data.map((experience, index) => {

                return <div key={index} className='experiences-format'>
                    <h3>{experience.s_no}</h3>
                    <h2>{experience.s_name}</h2>
                    <p>{experience.s_desc}</p>
                    <div className='experiences-readmore'>
                    <p>Read More</p>
                    <span className="material-icons experiences-readmore img">arrow_forward</span>
                    </div>
                    </div>

            })}

        </div> 
    </div>
  )
}

export default Experiences