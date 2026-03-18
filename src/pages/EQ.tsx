import { useEffect } from "react";
import ProjectImages from "../components/ProjectImages";

const eqImages = [
  `${import.meta.env.BASE_URL}5_band_eq.jpg`,
];

export default function EQ() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when component mounts
  }, []);
  
  return (
    <div className="project-view-page">
      <div className="project-view-content">
        {/* Text section */}
        <div className="project-view-text">
          <h2 className="project-view-header">5-Band Parametric EQ</h2>
          <p className="project-view-description">
            A digital implementation of a 5-band parametric equalizer with adjustable frequency, gain, and Q factor for each band.
            Each band can be toggled on and off, and the low and high bands have selectable shelf or cut filter types for precise tonal shaping. 
          </p>

          <ul className="project-view-skills">
            <h3 className="project-view-skills-label">Skills Used:</h3>
            <li>Digital Signal Processing</li>
            <li>UI/UX Design</li>
            <li>Full Stack Development</li>
            <li>C++</li>
            <li>JUCE Framework</li>
            <li>VST Plugin Development</li>
            <li>Audio Engineering</li>
          </ul>
        </div>  

        {/* Image section */}
        <ProjectImages images={eqImages} />
      </div>
    </div>
  );
}