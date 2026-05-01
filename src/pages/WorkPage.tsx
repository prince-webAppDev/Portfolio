import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Work from '../components/Work';
import { smoother } from '../components/Navbar';
import './styles/WorkPage.css';

gsap.registerPlugin(ScrollTrigger);

const WorkPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
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
  }, []);

  return (
    <div className="work-page" ref={containerRef}>
      <Work />
    </div>
  );
};

export default WorkPage;

