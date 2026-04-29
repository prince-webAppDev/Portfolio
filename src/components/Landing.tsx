import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PRINCE
              <br />
              <span>PATEL</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Full Stack</div>
              <div className="landing-h2-2">Specialist</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">Backend</div>
            </h2>
            <h2 style={{ marginTop: '10px', opacity: 0.8, fontSize: '1.2rem', fontWeight: 300, letterSpacing: '2px' }}>
              DevOps & Agentic AI Enthusiast
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
