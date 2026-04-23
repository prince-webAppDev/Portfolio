import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
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
              name: "LMS Platform",
              category: "Education Technology",
              tools: "Course Streaming, Progress Tracking, CMS",
              link: "#",
              image: "/images/placeholder.webp",
            },
            {
              name: "CMS & WordPress",
              category: "30+ CMS Projects",
              tools: "WordPress, Custom Plugins, SEO, Performance",
              link: "https://dgnbuild.com/",
              image: "/images/placeholder.webp",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

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
