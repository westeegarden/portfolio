import { useEffect } from "react";
import ProjectImages from "../components/ProjectImages";

const compChordsWebImages = [
  `${import.meta.env.BASE_URL}CompChordsWebLogo.jpg`,
  `${import.meta.env.BASE_URL}cc_update_3_18.jpg`
];

export default function CompChordsWeb() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when component mounts
  }, []);
  
  return (
    <div className="project-view-page">
      <div className="project-view-content">
        {/* Text section */}
        <div className="project-view-text">
          <h2 className="project-view-header">Comp Chords Web App</h2>
          <p className="project-view-description">
            For my senior spring semester, I undertook an independent study in UX design where I scaled Compatible Chords, my CLI music 
            composition tool into a full web application. I reworked the UX from front to back to ensure the most helpful and intuitive
            experience for users of all experience levels. The web app currently features drag and drop mini-DAW functionality, audio
            playback, MIDI export, and tutorials to help new users get started. While the experience is reworked, 
            the backend logic is pulled directly from the original CLI tool, maintaining the original UX vision. 
          </p>

          <ul className="project-view-skills">
            <h3 className="project-view-skills-label">Skills Used:</h3>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Full Stack Development</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>C++ Crow</li>
            <li>Tone.js</li>
            <li>REST API design</li>
            <li>Music Theory</li>
          </ul>
        </div>  

        {/* Image section */}
        <ProjectImages images={compChordsWebImages} />
      </div>
    </div>
  );
}