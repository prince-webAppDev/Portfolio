import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../data/projectsData";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Entrance animation for header
    gsap.from('.work-title-comp', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.work-title-comp',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      }
    });

    // Cards animation
    const cards = gsap.utils.toArray('.project-card');
    cards.forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=20',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    });
  }, { scope: containerRef });

  return (
    <div className="work-section-comp" id="work" ref={containerRef}>
      <div className="work-container-inner">
        <header className="work-header-comp">
          <h2 className="work-title-comp">Selected <span className="accent">Works</span></h2>
          <p className="work-subtitle-comp">A detailed collection of my technical and creative projects.</p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <WorkImage 
                  image={project.image} 
                  alt={project.name} 
                  link={project.link !== '#' ? project.link : undefined} 
                />
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h2 className="project-name">{project.name}</h2>
                <p className="project-desc">{project.tools}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

