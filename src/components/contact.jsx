import React, { useState } from "react";
import imageOverlay from "../img/earth.jpg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMail = (e) => {
    e.preventDefault();
    const bodyText = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:vedangjoshi772@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(" + imageOverlay + ")" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    <form onSubmit={handleSendMail} className="contactForm">
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Your Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Subject"
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              rows="5"
                              placeholder="Message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="button button-a button-big button-rouded"
                          >
                            Send Mail
                          </button>
                          <small className="text-muted d-block mt-2">
                            Clicking Send Mail will open your email client with this message pre-filled.
                          </small>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the form and send me an email.
                      </p>
                    </div>
                    <div className="socials">
                      <ul className="list-unstyled">
                        <li className="mb-3">
                          <a
                            href="https://github.com/vedangj72"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
                          >
                            <span className="ico-circle" style={{ width: "40px", height: "40px", lineHeight: "40px", fontSize: "1.2rem", marginRight: "15px" }}>
                              <i className="ion-social-github"></i>
                            </span>
                            <span>GitHub (vedangj72)</span>
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="https://www.linkedin.com/in/vedang-joshi-70117220b"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
                          >
                            <span className="ico-circle" style={{ width: "40px", height: "40px", lineHeight: "40px", fontSize: "1.2rem", marginRight: "15px" }}>
                              <i className="ion-social-linkedin"></i>
                            </span>
                            <span>LinkedIn (Vedang Joshi)</span>
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="https://leetcode.com/u/vedangCannotCode/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
                          >
                            <span className="ico-circle" style={{ width: "40px", height: "40px", lineHeight: "40px", fontSize: "1.2rem", marginRight: "15px" }}>
                              <i className="ion-code-working"></i>
                            </span>
                            <span>LeetCode (vedangCannotCode)</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
