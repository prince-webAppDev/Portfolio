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
                <h4>Full Stack Developer</h4>
                <h5>Professional Projects</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Architected high-concurrency marketplaces and real-time communication systems using Turbo Repo and WebRTC. Delivered scalable applications including Jobish and Astrology in Bharat.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CMS Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Successfully delivered 30+ professional websites using WordPress, focusing on performance, custom UI, and SEO. Developed custom plugins to automate professional workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in Graphic and Web Designing</h4>
                <h5>CGC Landran, Mohali</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing degree (2022 – 2025) while working on advanced full-stack implementations and AI-assisted development (Vibe Coding).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
