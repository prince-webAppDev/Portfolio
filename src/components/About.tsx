import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/about-me.png" alt="Prince Patel" />
          <div className="about-image-overlay"></div>
        </div>
        
        <div className="about-me">
          <h3 className="title">About Me</h3>
          <p className="para">
            My journey into tech began with a fascination for creation. I started with Python, but everything clicked when I discovered Web Development. 
            I became obsessed with the fact that if I see a problem, I have the power to build a solution from scratch—whether it's a website, a mobile app, or complex software.
          </p>
          
          <p className="para">
            I specialize in bridging the gap between complex backend logic and seamless user experiences. With a <strong>B.Sc in Graphics and Web Designing</strong>, 
            I bring a unique aesthetic eye to my technical work. Having delivered <strong>30+ CMS platforms</strong> and multiple custom-coded applications, 
            I balance rapid deployment with long-term scalability.
          </p>

          <p className="para">
            Beyond the screen, I am a <strong>National Level Chess Player</strong> and a <strong>Powerlifter</strong>. 
            Chess has taught me the strategic foresight I apply to architecting systems, while powerlifting keeps me disciplined and consistent in everything I build.
          </p>

          <p className="para">
            Currently, I am deep-diving into <strong>DevOps</strong> and <strong>Agentic AI</strong>. I'm focused on automating infrastructure and building autonomous AI agents that can solve complex, multi-step problems—pushing the boundaries of what's possible in modern software engineering.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <h4>30+</h4>
              <p>CMS Sites</p>
            </div>
            <div className="stat-item">
              <h4>10+</h4>
              <p>Custom Apps</p>
            </div>
            <div className="stat-item">
              <h4>National</h4>
              <p>Chess Player</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
