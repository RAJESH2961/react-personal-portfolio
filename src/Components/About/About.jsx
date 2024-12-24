import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/Rajesh_photo.png'

const About = () => {
  return (
    <div className="about" id='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                {/* <img src={profile_image} alt="" /> */}
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I'm Rajesh, a tech enthusiast currently advancing my knowledge in Computer Science and Engineering at Apollo University. With a diploma already under my belt, I've jumped straight into the 2nd year of my BTech program. My portfolio showcases a range of projects, from an intuitive e-commerce site to a fun random quote generator, reflecting my versatility and creativity in software development. I have also completed 6 months of industrial training in web development.</p>
                    <p>I'm passionate about leveraging technology to solve real-world problems and am particularly interested in AI and ML. I'm eager to connect with like-minded professionals who share a vision for innovation and growth in the tech industry.</p>
                </div>
                <div className="about-skills" id='skills'>
                    <h1>Top Skills</h1>
                    <div className="about-skill"><p>Django</p> <hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Python</p> <hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>React</p> <hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Java</p> <hr style={{width:"80%"}}/></div>
                    {/* Skills and Tools Known Section */}
{/* Skills, Tools, Libraries & Databases Section */}
<div className="skills-tools-libraries-databases">
  <h2>Skills, Tools, Libraries & Databases Known</h2>
  <div className="skills-tools-libraries-databases-columns">
    <div className="skills-column">
      <h3>Skills</h3>
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Django</li>
        <li>React</li>
        <li>Machine Learning</li>
      </ul>
    </div>
    <div className="tools-column">
      <h3>Tools</h3>
      <ul>
        <li>Git</li>
        <li>VS Code</li>
        <li>Docker</li>
        <li>Postman</li>
        <li>Figma</li>
      </ul>
    </div>
    <div className="libraries-column">
      <h3>Libraries</h3>
      <ul>
        <li>NumPy</li>
        <li>Pandas</li>
        <li>Matplotlib</li>
        <li>Scikit-learn</li>
        <li>TensorFlow</li>
      </ul>
    </div>
    <div className="databases-column">
      <h3>Databases</h3>
      <ul>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>SQLite</li>
      </ul>
    </div>
  </div>
</div>



                </div>
            </div>

            <div className="about-achievements">
                {/* <div className="about-achievement"> */}
                    {/* <h1>10</h1> */}
                {/* </div> */}
                {/* <hr /> */}
                {/* <div className="about"></div> */}
            </div>
        </div>
    </div>
  )
}

export default About