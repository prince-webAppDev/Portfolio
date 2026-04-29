import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  useEffect(() => {
    if (smoother) {
      smoother.scrollTop(0);
      ScrollSmoother.refresh(true);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="header">
        <Link to="/" className="navbar-title" data-cursor="disable">
          PRINCE
        </Link>
        <a
          href="mailto:prince3328july@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          prince3328july@gmail.com
        </a>
        <ul>
          <li>
            <Link to="/about">
              <HoverLinks text="ABOUT" />
            </Link>
          </li>
          <li>
            <Link to="/work">
              <HoverLinks text="WORK" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <HoverLinks text="CONTACT" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
