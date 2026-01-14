import { useEffect } from "react";
import ProjectImages from "../components/ProjectImages";

const compChordsWebImages = [
  `${import.meta.env.BASE_URL}CompChordsWebLogo.jpg`,
  `${import.meta.env.BASE_URL}KeySelect.jpg`,
  `${import.meta.env.BASE_URL}ChordBuilder.jpg`,
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
            For my senior spring semester, I'm undertaking an independent study in UX design where I scale Compatible Chords, my CLI music 
            composition tool into a full web application. The UX is being reworked front to back to ensure the most helpful and intuitive
            experience for users of all experience levels. The web app will feature drag and drop functionality, easy chord assembly,
            audio playback, and tutorials to help new users get started. While the experience is reworked, the backend logic is pulled directly 
            from the original CLI tool, ensuring the same powerful chord generation capabilities. - Project is currently in progress, stay tuned! -
          </p>

          <ul className="project-view-skills">
            <h3 className="project-view-skills-label">Skills Used:</h3>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Full Stack Development</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>C++ Crow</li>
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