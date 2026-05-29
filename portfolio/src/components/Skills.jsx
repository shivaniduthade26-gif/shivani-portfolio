import React from "react";
import "../styles/Skills.css";

function Skills() {

  const skills = [

    {
      name: "HTML",
      image:
        "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },

    {
      name: "CSS",
      image:
        "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },

    {
      name: "JavaScript",
      image:
        "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },

    {
      name: "React",
      image:
        "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    },

    {
      name: "Java",
      image:
        "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },

    {
      name: "C++",
      image:
        "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    },

  ];

  return (

    <section className="skills" id="skills">

      <h1 className="skills-title">
        My <span>Skills</span>
      </h1>

      {/* HORIZONTAL SLIDER */}

      <div className="slider">

        <div className="slide-track">

          {[...skills, ...skills].map((skill, index) => (

            <div className="skill-box" key={index}>

              <img
                src={skill.image}
                alt={skill.name}
              />

              <h2>{skill.name}</h2>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;