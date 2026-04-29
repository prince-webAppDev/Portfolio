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
      category: 'Full-Stack Development',
      description: 'A comprehensive platform for astrology services, featuring real-time consultations and e-commerce.',
      tech: ['NestJS', 'React', 'TypeScript', 'Socket.io', 'PostgreSQL']
    },
    {
      title: 'Creative Portfolio',
      category: '3D & Motion Graphics',
      description: 'An immersive 3D portfolio built with Three.js and GSAP to showcase creative works.',
      tech: ['Three.js', 'React Three Fiber', 'GSAP', 'Vite']
    },
    {
      title: 'E-commerce Engine',
      category: 'Web Application',
      description: 'Scalable e-commerce solution with advanced filtering, payment integration, and admin dashboard.',
      tech: ['Next.js', 'Tailwind CSS', 'Redux', 'Razorpay']
    },
    {
      title: 'Real-time Dashboards',
      category: 'Data Visualization',
      description: 'Complex monitoring systems for agents and experts with live data synchronization.',
      tech: ['React', 'Socket.io', 'Chart.js', 'Node.js']
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
