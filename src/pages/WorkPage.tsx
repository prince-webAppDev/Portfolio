import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WorkImage from '../components/WorkImage';
import { smoother } from '../components/Navbar';
import './styles/WorkPage.css';

gsap.registerPlugin(ScrollTrigger);

const WorkPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      name: "Astrology in Bharat",
      category: "WebRTC Marketplace",
      tools: "Node.js, Next.js, Turbo Repo, WebRTC, Socket.io",
      link: "https://astrology-in-bharat-app-frontend-ad.vercel.app/",
      image: "/images/project/Astrology-in-Bharat.png",
    },
    {
      name: "Eagle Sports Ground",
      category: "Cricket Platform (MERN)",
      tools: "Next.js, Turbo Repo, Node.js, MongoDB",
      link: "https://eagle-sports-ground-frontend-match.vercel.app/",
      image: "/images/project/Eagle-Ground.png",
    },
    {
      name: "Jobish",
      category: "Career Services",
      tools: "Full Stack, Resume Generation, Lead Management",
      link: "https://jobish-in.vercel.app/",
      image: "/images/project/Jobish.png",
    },
    {
      name: "Atlanta Courier",
      category: "Logistics Application",
      tools: "Logistics Booking, Tracking, Admin Dashboard",
      link: "https://atlantacourier.in/",
      image: "/images/project/Atlanta-Courier.png",
    },
    {
      name: "DGN Build",
      category: "Construction & Architecture",
      tools: "WordPress, Performance, SEO, Modern UI",
      link: "https://dgnbuild.com/",
      image: "/images/wordpress-project/DGN-Build.png",
    },
    {
      name: "Astrologer Gaurav Sharma Ji",
      category: "Spiritual Services",
      tools: "WordPress, Custom Design, SEO Optimized",
      link: "#",
      image: "/images/wordpress-project/Astrologer-Gaurav-Sharma-Ji.png",
    },
    {
      name: "Dilbag Decor",
      category: "Interior Design Portfolio",
      tools: "WordPress, Visual Content, CMS Management",
      link: "#",
      image: "/images/wordpress-project/Dilbag-Decor.png",
    },
    {
      name: "Lucky Tent House",
      category: "Event Management",
      tools: "WordPress, Booking Inquiries, Gallery",
      link: "#",
      image: "/images/wordpress-project/Lucky-Tent-House.png",
    },
    {
      name: "RG Startup",
      category: "Business Consulting",
      tools: "WordPress, Professional Branding, CMS",
      link: "#",
      image: "/images/wordpress-project/RG-Startup.png",
    },
    {
      name: "Tigerexch",
      category: "Gaming Platform UI",
      tools: "WordPress, UI/UX Design, Interactive Elements",
      link: "#",
      image: "/images/wordpress-project/Tigerexch.png",
    },
    {
      name: "Villa Aurena",
      category: "Hospitality & Resort",
      tools: "WordPress, Luxury Design, Performance",
      link: "#",
      image: "/images/wordpress-project/Villa-Aurena.png",
    },
    {
      name: "Hotel Booking",
      category: "Hospitality Services",
      tools: "WordPress, Management System, Custom CMS",
      link: "#",
      image: "/images/wordpress-project/hotel.png",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for header
      gsap.from('.work-title', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
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

      // Aggressive refresh for ScrollSmoother
      const refreshSmoother = () => {
        if (smoother) {
          smoother.refresh();
          ScrollTrigger.refresh();
        }
      };

      refreshSmoother();
      window.addEventListener('load', refreshSmoother);
      const timer1 = setTimeout(refreshSmoother, 100);
      const timer2 = setTimeout(refreshSmoother, 1000);
      
      return () => {
        window.removeEventListener('load', refreshSmoother);
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="work-page" ref={containerRef}>
      <div className="work-container-inner">
        <header className="work-header">
          <h1 className="work-title">Selected <span className="accent">Works</span></h1>
          <p className="work-subtitle">A detailed collection of my technical and creative projects.</p>
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

export default WorkPage;
