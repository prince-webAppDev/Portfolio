import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !flexRef.current) return;

      // Small delay to ensure all images/layout are settled
      ScrollTrigger.refresh();

      const getTranslateX = () => {
        return flexRef.current ? flexRef.current.scrollWidth - window.innerWidth : 0;
      };

      const mm = gsap.matchMedia();

      mm.add("(min-width: 0px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${getTranslateX()}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        tl.to(flexRef.current, {
          x: () => -getTranslateX(),
          ease: "none",
        });

        return () => {
          tl.kill();
        };
      });
    },
    { scope: sectionRef }
  );

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex" ref={flexRef}>
          {[
            {
              name: "Eagle Sports Ground",
              category: "Cricket Platform (MERN)",
              tools: "Next.js, Turbo Repo, Node.js, MongoDB",
              link: "https://eagle-sports-ground-frontend-match.vercel.app/",
              image: "/images/project/Eagle-Ground.png",
            },
            {
              name: "Astrology in Bharat",
              category: "WebRTC Marketplace",
              tools: "Node.js, Next.js, Turbo Repo, WebRTC, Socket.io",
              link: "https://astrology-in-bharat-app-frontend-ad.vercel.app/",
              image: "/images/project/Astrology-in-Bharat.png",
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
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{(index + 1).toString().padStart(2, '0')}</h3>

                  <div>
                    <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h4>{project.name}</h4>
                    </a>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
