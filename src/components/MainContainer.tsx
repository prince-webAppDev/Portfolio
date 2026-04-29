import { PropsWithChildren, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cursor from "./Cursor";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import setSplitText from "./utils/splitText";
import Home from "../pages/Home";
import PlaceholderPage from "../pages/PlaceholderPage";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Routes>
            <Route
              path="/"
              element={<Home isDesktopView={isDesktopView}>{children}</Home>}
            />
            <Route path="/about" element={<PlaceholderPage name="About" />} />
            <Route path="/work" element={<PlaceholderPage name="Work" />} />
            <Route path="/contact" element={<PlaceholderPage name="Contact" />} />
            <Route path="/career" element={<PlaceholderPage name="Career" />} />
            <Route path="/what-i-do" element={<PlaceholderPage name="What I Do" />} />
          </Routes>
        </div>
      </div>
      {isDesktopView && children}
    </div>
  );
};

export default MainContainer;
