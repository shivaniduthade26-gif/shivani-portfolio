import React, { useRef, useState } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const [success, setSuccess] = useState(false);

  // EMAIL SEND

  const sendEmail = (e) => {

   e.preventDefault();

emailjs.sendForm(

  "service_xr782bl",
  "template_zmwb6e2",
  form.current,
  "RTYUmDjZak2t0BP1a"

).then(

      () => {

        setSuccess(true);

        e.target.reset();

      },

      (error) => {

        console.log(error.text);

      }
    );
  };

  return (

    <section className="contact" id="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-left">

          <h4>GET IN TOUCH</h4>

          <h1>
            Let's work
            <br />
            together
          </h1>

          <p>
          I’m open to working on creative websites and full stack projects, whether it’s a new idea or improving an existing website — let’s build something amazing together.

          </p>
          {/* GITHUB */}

<a
  href="https://github.com"
  target="_blank"
  rel="noreferrer"
  className="contact-item"
>

  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
    alt=""
  />

  <span>
    github.com/shivani
  </span>

</a>


{/* LINKEDIN */}
<br></br>
<a
  href="https://linkedin.com"
  target="_blank"
  rel="noreferrer"
  className="contact-item"
>

  <img
    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
    alt=""
  />

  <span>
    linkedin.com/in/shivani
  </span>

</a>

{/* EMAIL */}
<br></br>
<div className="contact-item">

  <img
    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
    alt=""
  />

  <span>
    hello@shivani.dev
  </span>

</div>

          </div>

        {/* RIGHT SIDE */}

        <div className={`form-box ${success ? "flip" : ""}`}>

          <div className="form-inner">

            {/* FRONT */}

            <div className="form-front">

              <form ref={form} onSubmit={sendEmail}>

                <div className="input-row">

                  <div className="input-group">

                    <label>Name *</label>

                    <input
                      type="text"
                      name="user_name"
                      placeholder="Sam Duthade"
                      required
                    />

                  </div>

                  <div className="input-group">

                    <label>Email *</label>

                    <input
                      type="email"
                      name="user_email"
                      placeholder="samduthade.com"
                      required
                    />

                  </div>

                </div>

                <div className="input-group">

                  <label>Subject</label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                  />

                </div>

                <div className="input-group">

                  <label>Message *</label>

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>

                </div>

                <button type="submit">
                  Send message →
                </button>

              </form>

            </div>

            {/* BACK */}

            <div className="form-back">

              <h1>Email Sent ✅</h1>

              <p>
                Your message was successfully delivered.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;