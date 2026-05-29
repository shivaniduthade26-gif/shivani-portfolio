import React, { useState } from "react";import "../styles/About.css";
import shivaniImg from "../assets/shivani.png";

function About() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="about" id="about">

      {/* LEFT SIDE CONTENT */}

      <div className="about-content">

        <h4>About Me</h4>

        <h1>
          Frontend <span>Developer</span>
        </h1>

        <p>
          I am a passionate Full Stack Developer with knowledge of both frontend and backend development. I enjoy creating modern, responsive and user-friendly websites along with powerful web applications. I can develop complete projects from designing attractive user interfaces to managing backend functionality and databases. 
        </p>

        <p>
         I love working on creative projects like Portfolio Websites, Job Portals, Shopping Apps and Management Systems. I am always eager to learn new technologies and improve my coding skills to build better digital experiences. My goal is to create professional, fast and impactful websites that provide smooth and interactive user experiences.
        </p>
        {showMore && (

  <p className="more-text">

    I’m a creative and passionate Full Stack Developer who loves building modern, responsive, and user-friendly websites. I enjoy turning ideas into beautiful digital experiences with clean design, smooth animations, and interactive user interfaces. I have worked on different web projects including portfolio websites, responsive UI designs, and creative web applications that focus on both functionality and attractive design.

My skills include HTML, CSS, JavaScript, React.js, and Full Stack Development. I always focus on creating websites that are visually appealing, mobile-friendly, and provide a smooth user experience across all devices. I’m also very hardworking, dedicated, and always excited to learn new technologies and improve my development skills every day.


  </p>
)}
<button
  className="about-btn"
  onClick={() => setShowMore(!showMore)}
>

  {showMore ? "About Less" : "About More"}

</button>

        
         </div>

      {/* RIGHT SIDE IMAGE */}

      <div className="about-image">

        <img
          src={shivaniImg}
          alt="about"
        />

      </div>

    </section>
  );
}

export default About;