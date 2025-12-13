import { MdEmail, MdSchool } from "react-icons/md";
import { FaLinkedin, FaHandshake } from "react-icons/fa";


export default function Contact() {
  return (
    <div className="contact-page">
        <h2 className="contact-header">Contact Me</h2>

        <div className="contact-links">
            <a href="mailto:wesley.teegarden@uvm.edu">
                School Email
                <MdSchool size={24} /> 
            </a>
            <a href="mailto:westeegarden@gmail.com">
                Gmail
                <MdEmail size={24} /> 
            </a>
            <a href="https://www.linkedin.com/in/wesley-teegarden-a53462267/" target="_blank" rel="noopener noreferrer">
                LinkedIn
                <FaLinkedin size={24} /> 
            </a>
            <a href="https://app.joinhandshake.com/profiles/mcj9uu" target="_blank" rel="noopener noreferrer">
                Handshake
                <FaHandshake size={24} /> 
            </a>
        </div>
    </div>
  );
}