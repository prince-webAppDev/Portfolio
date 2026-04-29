import React, { lazy, Suspense } from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import WhatIDo from "../components/WhatIDo";
import Career from "../components/Career";
import Work from "../components/Work";
import Contact from "../components/Contact";

const TechStack = lazy(() => import("../components/TechStack"));

interface HomeProps {
  isDesktopView: boolean;
  children?: React.ReactNode;
}

const Home = ({ isDesktopView, children }: HomeProps) => {
  return (
    <div className="container-main">
      <Landing>{!isDesktopView && children}</Landing>
      <About />
      <WhatIDo />
      <Career />
      <Work />
      {isDesktopView && (
        <Suspense fallback={<div>Loading....</div>}>
          <TechStack />
        </Suspense>
      )}
      <Contact />
    </div>
  );
};

export default Home;
