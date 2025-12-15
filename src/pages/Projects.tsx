import ProjectCard from "../components/ProjectCard";

export default function Projetcs() {
  return (
    <div className="projects-page">
        <h2 className="projects-header">My Projects</h2>

        <div className="projects-grid">
            <ProjectCard
                title="Doppelganger ML Guitar Pedal"
                description="A machine learning powered guitar pedal that can mimic the sound of any guitar tone it is trained on."
                image="/public/guiUpdate.jpg"
                link="/About"
            />
        </div>
    </div>
    
  );
}