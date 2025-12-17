export default function Resume() {
  return (
    <div className="resume-page">
        <h2 className="resume-header">My Resume</h2>

        <iframe
            src="/WesleyTeegardenResume.pdf"
            width="70%"
            height="800px"
            title="Resume"
            style={{ border: "1px solid #000000ff" }}
      />
    </div>
  );
}