import React from "react";
import "../styles/Projects.css";

function Projects() {

  const projects = [

    {
      name: "Job Portal",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",

      info:
        "A modern job portal website where users can search and apply for jobs easily.",
    },

    {
      name: "Hospital Management",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",

      info:
        "Hospital system for managing patients, doctors, appointments and reports.",
    },

    {
      name: "Food Ordering App",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",

      info:
        "Online food ordering app with attractive UI and fast delivery features.",
    },

    {
      name: "Online Shopping App",
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",

      info:
        "E-commerce shopping app with product listing, cart and payment system.",
    },

    {
      name: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",

      info:
        "Personal portfolio website showing skills, projects and contact information.",
    },

    {
      name: "Student Management",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",

      info:
        "Student management system for attendance, marks and student records.",
    },

  ];

  return (

    <section className="projects" id="projects">

      <h1 className="project-title">
        My <span>Projects</span>
      </h1>

      {/* SLIDER */}

      <div className="project-slider">

        <div className="project-track">

          {[...projects, ...projects].map((project, index) => (

            <div className="flip-card" key={index}>

              <div className="flip-card-inner">

                {/* FRONT */}

                <div className="flip-card-front">

                  <img
                    src={project.image}
                    alt={project.name}
                  />

                  <h2>{project.name}</h2>

                </div>

                {/* BACK */}

                <div className="flip-card-back">

                  <h2>{project.name}</h2>

                  <p>{project.info}</p>

                 

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;