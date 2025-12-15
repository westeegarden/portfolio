type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
        )}
      </div>

      <img src={image} alt={title} className="project-image" />
    </div>
  );
}
