import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './styles/AboutPage.css';

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.from('.about-title', {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          delay: 0.5
        });
        
        gsap.from('.about-content p', {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.8
        });

        gsap.from('.about-image-placeholder', {
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: 'expo.out',
          delay: 0.5
        });

        gsap.from('.skill-tag', {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          delay: 1.2
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 
    'Three.js', 'GSAP', 'Tailwind CSS', 'PostgreSQL', 'MongoDB',
    'Framer Motion', 'Turborepo', 'Docker', 'AWS'
  ];

  return (
    <div className="about-page" ref={containerRef}>
      <div className="container1">
        <div className="about-grid">
          <div className="about-text-section">
            <h1 className="about-title">
              Crafting Digital <span className="accent">Experiences</span>
            </h1>
            
            <div className="about-content">
              <p>
                I'm Prince, a Full-Stack Developer with a passion for building 
                highly interactive and visually stunning web applications. 
                My focus lies at the intersection of performance and aesthetics.
              </p>
              <p>
                With expertise in modern JavaScript frameworks and 3D web technologies, 
                I bridge the gap between complex backend logic and immersive frontend interfaces.
              </p>
              
              <div className="skills-container">
                <h3>Technical Arsenal</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual-section">
            <div className="about-image-placeholder">
              <span className="placeholder-text">YOUR IMAGE HERE</span>
              {/* <img src="/path-to-your-image.jpg" alt="Prince" /> */}
              <div className="image-overlay"></div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
