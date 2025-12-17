import { useEffect } from "react";

export default function ColdCuts() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when component mounts
  }, []);
  
  return (
    <div className="project-view-page">
      <div className="project-view-content">
        {/* Text section */}
        <div className="project-view-text">
          <h2 className="project-view-header">Cold Cuts Score</h2>
          <p className="project-view-description">
            In my Jazz Composition course, I had the opportunity to compose an original piece for a three-horn jazz ensemble. Shaped around a modern Bossa Nova
            groove, "Cold Cuts" utilizes rhythmic punches and cadential deception to create a dynamic and engaging Latin jazz piece.
          </p>

          <ul className="project-view-skills">
            <h3 className="project-view-skills-label">Skills Used:</h3>
            <li>Music Composition</li>
            <li>Jazz Theory</li>
            <li>Arranging for Small Ensemble</li>
            <li>Notation Software (MuseScore)</li>
          </ul>
        </div>  

        {/* PDF section */}
        <div className="project-view-media">
          <iframe
            src="/public/final_score.pdf"
            width="100%"
            height="800px"
            title="Cold Cuts Score"
            style={{ border: "1px solid #000000ff" }}
          />
        </div>
      </div>
    </div>
  );
}