import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/WorkPage.css';

gsap.registerPlugin(ScrollTrigger);

const WorkPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Astrology in Bharat',
      category: 'WebRTC Marketplace',
      description: 'A comprehensive platform for astrology services, featuring real-time WebRTC consultations, 7+ specialized dashboards, and a robust e-commerce engine.',
      tech: ['Turborepo', 'Next.js', 'NestJS', 'Socket.io', 'WebRTC', 'PostgreSQL']
    },
    {
      title: 'Eagle Sports Ground',
      category: 'Cricket Platform (MERN)',
      description: 'A dedicated platform for cricket enthusiasts, managing matches, ground bookings, and player statistics with a seamless user interface.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Turborepo']
    },
    {
      title: 'Jobish Career Services',
      category: 'Full-Stack Application',
      description: 'A career-focused platform providing automated resume generation, lead management, and job application tracking for professionals.',
      tech: ['React', 'Node.js', 'Express', 'Lead Management', 'PDF Generation']
    },
    {
      title: 'Atlanta Courier',
      category: 'Logistics Application',
      description: 'An end-to-end logistics solution featuring real-time package tracking, booking management, and a comprehensive admin dashboard for operations.',
      tech: ['React', 'Node.js', 'Google Maps API', 'Admin Dashboard']
    }
  ];

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.from('.work-title', {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.5
        });

        const cards = gsap.utils.toArray('.project-card');
        cards.forEach((card: any, i) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
          });
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="work-page" ref={containerRef}>
      <div className="container1">
        <header className="work-header">
          <h1 className="work-title">Selected <span className="accent">Works</span></h1>
          <p className="work-subtitle">A collection of projects where logic meets creativity.</p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <div className="project-image-placeholder">
                  <span className="placeholder-text">PROJECT PREVIEW</span>
                  {/* <img src={`/projects/project-${index+1}.jpg`} alt={project.title} /> */}
                  <div className="image-overlay"></div>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h2 className="project-name">{project.title}</h2>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-item">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
