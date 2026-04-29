import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { smoother } from '../components/Navbar';
import './styles/AboutPage.css';

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
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

        if (smoother) {
          smoother.refresh();
        }
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
      <div className="about-container-inner">
        <div className="about-grid">
          <div className="about-text-section">
            <h1 className="about-title">
              Engineering <span className="accent">Excellence</span>
            </h1>
            
            <div className="about-content">
              <p>
                I'm Prince Patel, a Full-Stack Software Engineer with a <strong>B.Sc in Graphics and Web Designing</strong>. 
                I bridge the gap between complex backend logic and visually stunning user experiences, 
                leveraging a unique eye for design to build high-performance applications.
              </p>
              <p>
                Currently, I lead the technical architecture for the <strong>Astrology in Bharat</strong> ecosystem—a massive 
                multi-platform project involving 7+ specialized dashboards, real-time 
                communication, and complex wallet/payment systems.
              </p>
              <p>
                With a background of delivering <strong>30+ CMS platforms</strong> and <strong>15+ custom-coded enterprise apps</strong>, 
                I specialize in crafting robust systems with <strong>NestJS</strong>, <strong>PostgreSQL</strong>, and <strong>React</strong>. 
                I am also a <strong>National Level Chess Player</strong> and a <strong>Powerlifter</strong>, disciplines 
                that fuel my strategic foresight and consistency in software engineering.
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
              <span className="placeholder-text">PRINCE PATEL</span>
              {/* <img src="/images/about-me.png" alt="Prince Patel" /> */}
              <div className="image-overlay"></div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">CMS Sites</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Custom Apps</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Top</span>
                <span className="stat-label">Chess Rank</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
