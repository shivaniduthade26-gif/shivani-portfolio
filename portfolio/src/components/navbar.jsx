import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import emailjs from "@emailjs/browser";

function Navbar() {

  const [showForm, setShowForm] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "contact",
      ];

      sections.forEach((section) => {

        const element = document.getElementById(section);

        if (element) {

          const top = element.offsetTop - 120;

          const height = element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", () => {
  setMenuOpen(false);
  });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.send(

      "service_xr782bl",
      "template_zmwb6e2",
      formData,
      "RTYUmDjZak2t0BP1a"
    )

    .then(() => {

      alert("Message Sent Successfully!");

      setShowForm(false);

    })

    .catch((error) => {

      console.log(error);

      alert("Failed to send message");
    });
  };

  return (

    <>

      <nav className="navbar">

        {/* LOGO */}

        <div className="logo">

          <h2>
            <a
              href="#home"
              className={
                activeSection === "home"
                  ? "active"
                  : ""
              }
            >
              Shivani
            </a>
          </h2>

        </div>

        {/* NAV LINKS */}

        <div
          className={`menu-icon`}
          role="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <a
              href="#home"
              className={
                activeSection === "home"
                  ? "active"
                  : ""
              }
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={
                activeSection === "about"
                  ? "active"
                  : ""
              }
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={
                activeSection === "skills"
                  ? "active"
                  : ""
              }
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={
                activeSection === "projects"
                  ? "active"
                  : ""
              }
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={
                activeSection === "contact" ? "active" : ""
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>

          {/* Mobile-only copy of Hire Me so it appears inside dropdown */}
          <li className="mobile-hire">
            <button
              className="nav-btn"
              onClick={() => {
                setShowForm(true);
                setMenuOpen(false);
              }}
            >
              Hire Me
            </button>
          </li>

        </ul>

        {/* HIRE ME BUTTON */}

        <button
          className="nav-btn desktop-hire"
          onClick={() => setShowForm(true)}
        >
          Hire Me
        </button>

      </nav>

      {/* POPUP FORM */}

      {showForm && (

        <div className="popup-overlay">

          <form
            className="popup-form"
            onSubmit={sendEmail}
          >

            <h2>Hire Me</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="number"
              placeholder="Your Number"
              value={formData.number}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="send-btn"
            >
              Send
            </button>

            <button
              type="button"
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>

          </form>

        </div>
      )}

    </>
  );
}

export default Navbar;

