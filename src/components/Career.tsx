import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in Graphic and Web Designing</h4>
                <h5>CGC Landran, Mohali</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Started my academic journey in Graphics and Web Designing at CGC Landran, laying the foundation for bridging the gap between complex logic and stunning user experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>RG Startup</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Joined RG Startup as a MERN Stack Developer, focusing on building scalable web applications and high-performance technical architectures for modern enterprise solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack + CMS Developer</h4>
                <h5>Professional Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently leading technical architecture for massive ecosystems like Astrology in Bharat, while specializing in crafting robust systems with NestJS, PostgreSQL, and React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
