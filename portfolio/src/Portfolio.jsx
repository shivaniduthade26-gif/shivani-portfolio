import React from "react";
import photo from "./images/shivani.jpg";

export default function App() {
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial,sans-serif;
        }

        body{
          background:#111;
          color:white;
          overflow-x:hidden;
          scroll-behavior:smooth;
        }

        /* NAVBAR */

        nav{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:80px;
          background:#1a1a1a;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:0 60px;
          z-index:1000;
          border-bottom:1px solid #615858;
        }

        .logo{
          font-size:30px;
          font-weight:bold;
          color:#f05a28;
        }

        nav ul{
          display:flex;
          list-style:none;
          gap:30px;
        }

        nav ul li a{
          text-decoration:none;
          color:white;
          font-size:18px;
          transition:0.3s;
        }

        nav ul li a:hover{
          color:#f05a28;
        }

        /* FULL SCREEN SECTION */

        section{
          min-height:100vh;
          width:100%;
          padding:120px 80px;
        }

        h1,h2{
          margin-bottom:20px;
        }

        p{
          color:#ccc;
          line-height:1.7;
        }

        /* HOME */

        .home{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:50px;
        }

        .home-text{
          flex:1;
        }

        .home-text h1{
          font-size:65px;
          margin-bottom:20px;
        }

        .home-text span{
          color:#f05a28;
        }

        .btns{
          margin-top:30px;
          display:flex;
          gap:20px;
        }

        .btn{
          padding:14px 28px;
          background:#f05a28;
          color:white;
          text-decoration:none;
          border-radius:40px;
          transition:0.3s;
          font-weight:bold;
        }

        .btn:hover{
          background:#ff7648;
        }

        .resume-btn{
          background:#222;
          border:1px solid rgb(233, 133, 133);
        }

        .resume-btn:hover{
          background:#333;
        }

        .photo{
          width:380px;
          height:450px;
          border-radius:20px;
          overflow:hidden;
          border:3px solid #f05a28;
          box-shadow:0 0 25px rgba(240,90,40,0.4);
        }

        .photo img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        /* ABOUT */

        .about-box{
          background:#1a1a1a;
          padding:40px;
          border-radius:20px;
          border:1px solid rgb(155, 149, 149);
          margin-top:40px;
        }

        /* SKILLS */

        .cards{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:25px;
          margin-top:50px;
        }

        .card{
          background:#1e1e1e;
          padding:35px;
          border-radius:20px;
          border:1px solid #9e8f8f;
          transition:0.4s;
          text-align:center;
        }

        .card:hover{
          transform:translateY(-10px);
          border-color:#f05a28;
          box-shadow:0 0 20px rgba(225, 217, 215, 0.85);
        }

        .card h3{
          margin:15px 0;
          color:#f05a28;
        }

        .icon{
          font-size:45px;
        }

        /* PROJECT */

        .project-img{
          height:200px;
          background:#222;
          border-radius:15px;
          margin-bottom:20px;
          display:flex;
          justify-content:center;
          align-items:center;
          color:#777;
        }

        /* CONTACT */

        form{
          max-width:700px;
          margin:auto;
          display:flex;
          flex-direction:column;
          gap:20px;
          margin-top:40px;
        }

        input,textarea{
          padding:16px;
          border:none;
          outline:none;
          border-radius:12px;
          background:#1e1e1e;
          color:white;
          border:1px solid rgb(227, 218, 218);
          font-size:16px;
        }

        button{
          padding:16px;
          border:none;
          border-radius:12px;
          background:#f05a28;
          color:white;
          font-size:18px;
          cursor:pointer;
          font-weight:bold;
          transition:0.3s;
        }

        button:hover{
          background:#ff7648;
        }

        footer{
          text-align:center;
          padding:30px;
          border-top:1px solid #d8cbcb;
          color:#888;
        }

        /* MOBILE */

        @media(max-width:900px){

          nav{
            padding:0 20px;
          }

          nav ul{
            gap:15px;
          }

          nav ul li a{
            font-size:14px;
          }

          section{
            padding:120px 25px;
          }

          .home{
            flex-direction:column;
            text-align:center;
          }

          .home-text h1{
            font-size:45px;
          }

          .btns{
            justify-content:center;
            flex-wrap:wrap;
          }

          .photo{
            width:300px;
            height:350px;
          }
        }

      `}</style>

      {/* NAVBAR */}

      <nav>

        <div className="logo">
          Shivani
        </div>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>

      {/* HOME */}

      <section id="home" className="home">

        <div className="home-text">

          <h1>
            Hi I'm <span>Shivani</span>
          </h1>

          <p>
            <p>
  I am Shivani, a passionate React and Frontend Developer
  who loves creating modern, responsive and user-friendly
  websites. I enjoy designing attractive UI and building
  fast web applications using HTML, CSS, JavaScript and
  React.js. I am always excited to learn new technologies
  and improve my development skills every day. My goal is
  to build creative digital experiences that make websites
  look professional and work smoothly on all devices.
</p>
          </p>

          <div className="btns">

            <a href="#contact" className="btn">
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn resume-btn"
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* PHOTO */}

        <div className="photo">

          <img
            
        src={photo}
        alt="Shivani"
        />
          

        </div>

      </section>

       ABOUT 

      <section id="about">

        <h2>About Me</h2>

        <div className="about-box">

          <p>
            <p>
  I am a passionate React and Frontend Developer
  who loves creating modern, responsive and user-friendly
  websites. I enjoy building clean UI designs and
  improving my web development skills every day.
</p>
          </p>

          <br />

          <p>
            I love designing responsive websites and learning
            new technologies every day.
          </p>

        </div>

      </section>

       SKILLS 

      <section id="skills">

        <h2>My Skills</h2>

        <div className="cards">

          <div className="card">
            <div className="icon">💻</div>
            <h3>HTML</h3>
            <p>Create website structure.</p>
          </div>

          <div className="card">
            <div className="icon">🎨</div>
            <h3>CSS</h3>
            <p>Responsive and modern design.</p>
          </div>

          <div className="card">
            <div className="icon">⚡</div>
            <h3>JavaScript</h3>
            <p>Add functionality to websites.</p>
          </div>

          <div className="card">
            <div className="icon">⚛️</div>
            <h3>React JS</h3>
            <p>Build dynamic frontend apps.</p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}

<section id="projects">

  <h2
    style={{
      textAlign:"center",
      fontSize:"45px",
      marginBottom:"50px"
    }}
  >
    My Projects
  </h2>

  <div className="cards">

    {/* Project 1 */}

    <div className="card">

      <img
        src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
        alt="Ecommerce"
        style={{
          width:"100%",
          height:"220px",
          objectFit:"cover",
          borderRadius:"15px",
          marginBottom:"20px"
        }}
      />

      <h3
        style={{
          fontSize:"26px",
          marginBottom:"10px"
        }}
      >
        Ecommerce Website
      </h3>

      <p>
        A modern online shopping website created using
        React.js with attractive UI, responsive design,
        product cards and smooth user experience.
      </p>

    </div>

    {/* Project 2 */}

    <div className="card">

      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        alt="Food Website"
        style={{
          width:"100%",
          height:"220px",
          objectFit:"cover",
          borderRadius:"15px",
          marginBottom:"20px"
        }}
      />

      <h3
        style={{
          fontSize:"26px",
          marginBottom:"10px"
        }}
      >
        Food Ordering Website
      </h3>

      <p>
        Responsive food delivery website with beautiful
        layout, online menu section and user-friendly
        frontend design using React and CSS.
      </p>

    </div>

    {/* Project 3 */}

    <div className="card">

      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        alt="Portfolio Website"
        style={{
          width:"100%",
          height:"220px",
          objectFit:"cover",
          borderRadius:"15px",
          marginBottom:"20px"
        }}
      />

      <h3
        style={{
          fontSize:"26px",
          marginBottom:"10px"
        }}
      >
        Portfolio Website
      </h3>

      <p>
        Personal portfolio website showcasing skills,
        projects and contact information with modern
        responsive UI and smooth scrolling sections.
      </p>

    </div>

  </div>

</section>
       CONTACT 
        <section id="contact">

  <h2
    style={{
      textAlign:"center",
      fontSize:"40px",
      marginBottom:"50px"
    }}
  >
    Contact Me
  </h2>

  <div
    style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      gap:"50px",
      flexWrap:"wrap"
    }}
  >

    {/* LEFT IMAGE */}

    <div
      style={{
        flex:"1",
        minWidth:"300px"
      }}
    >

      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        alt="contact"
        style={{
          width:"100%",
          height:"500px",
          objectFit:"cover",
          borderRadius:"25px",
          border:"3px solid #f05a28",
          boxShadow:"0 0 25px rgba(240,90,40,0.4)"
        }}
      />

    </div>

    {/* RIGHT FORM */}

    <div
      style={{
        flex:"1",
        minWidth:"300px"
      }}
    >

      <form
        action="https://formsubmit.co/YOURGMAIL@gmail.com"
        method="POST"
        style={{
          display:"flex",
          flexDirection:"column",
          gap:"20px",
          background:"#1a1a1a",
          padding:"40px",
          borderRadius:"20px",
          border:"1px solid #333"
        }}
      >

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          style={{
            padding:"16px",
            borderRadius:"12px",
            border:"1px solid #333",
            background:"#111",
            color:"white",
            fontSize:"16px"
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          style={{
            padding:"16px",
            borderRadius:"12px",
            border:"1px solid #333",
            background:"#111",
            color:"white",
            fontSize:"16px"
          }}
        />

        <input
          type="text"
          name="subject"
          placeholder="Enter subject"
          required
          style={{
            padding:"16px",
            borderRadius:"12px",
            border:"1px solid #333",
            background:"#111",
            color:"white",
            fontSize:"16px"
          }}
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
          style={{
            padding:"16px",
            borderRadius:"12px",
            border:"1px solid #333",
            background:"#111",
            color:"white",
            fontSize:"16px"
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding:"16px",
            border:"none",
            borderRadius:"12px",
            background:"#f05a28",
            color:"white",
            fontSize:"18px",
            cursor:"pointer",
            fontWeight:"bold"
          }}
        >
          Send Email
        </button>

      </form>

    </div>

  </div>

</section>

      {/* FOOTER */}

      <footer>
        © 2025 Shivani | React Portfolio
      </footer>

    </>
  );
}