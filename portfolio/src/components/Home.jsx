import React from "react";
import "../styles/Home.css";
import shivaniImg from "../assets/shivani.png";

function Home() {
  return (
    <section className="home" id="home">

      {/* LEFT SIDE IMAGE */}

      <div className="hero-image-box">
        <img
          src={shivaniImg}
          className="hero-image"
          alt="profile"
        />
      </div>

      {/* RIGHT SIDE CONTENT */}

      <div className="home-content">

        <h3>Hello, It's Me</h3>

        <h1>Shivani Duthade</h1>

        <h2>
          I'm a <span>Frontend Developer And Backend Developer</span>
        </h2>

        <p>
          I am a passionate Full Stack Developer who loves building modern and creative websites. I have skills in frontend and backend development using technologies like React.js, HTML, CSS, JavaScript and more. I enjoy developing responsive web applications with attractive UI and smooth user experiences. I can create projects like Portfolio Websites, Job Portals, Shopping Apps and Management Systems. I am always motivated to learn new technologies and improve my development skills. My goal is to build professional, user-friendly and impactful digital solutions.
        </p>

        <div className="home-buttons">

          <a
  href="/resume.pdf"
  target="_blank"
  download
>
  <button className="home-btn">
    Download Resume
  </button>
</a>
          

          <a href="#contact" className="contact-btn">
            Contact Me
          </a>

        </div>

      </div>

    </section>
  );
}

export default Home;