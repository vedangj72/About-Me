import React from "react";

const skillsSlides = [
  [
    { id: "kotlin",  content: "Kotlin",              porcentage: "90%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
    { id: "compose", content: "Jetpack Compose",      porcentage: "85%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
    { id: "kmp",     content: "Kotlin Multiplatform", porcentage: "80%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-plain.svg" }
  ],
  [
    { id: "android",    content: "Android SDK / XML", porcentage: "90%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original-wordmark.svg" },
    { id: "java",       content: "Java",              porcentage: "80%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { id: "javascript", content: "JavaScript",        porcentage: "75%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
  ],
  [
    { id: "react",   content: "React JS",   porcentage: "80%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { id: "node",    content: "Node JS",    porcentage: "75%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { id: "express", content: "Express JS", porcentage: "75%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" }
  ],
  [
    { id: "docker", content: "Docker", porcentage: "75%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { id: "gcp",    content: "GCP",    porcentage: "70%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { id: "git",    content: "Git",    porcentage: "85%", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
  ]
];

function Skills() {
  return (
    <section id="skills" className="sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Skills</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div
                id="skillsCarousel"
                className="carousel slide"
                data-ride="carousel"
                data-interval="3500"
              >
                <div className="carousel-inner text-center">
                  {skillsSlides.map((slide, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="row justify-content-center">
                        {slide.map(skill => (
                          <div
                            className="col-12 col-sm-4 mb-4"
                            key={skill.id}
                            style={{ padding: "10px" }}
                          >
                            <img
                              src={skill.logo}
                              alt={skill.content}
                              style={{
                                width: "100px",
                                height: "100px",
                                minWidth: "100px",
                                minHeight: "100px",
                                marginBottom: "12px",
                                display: "block",
                                margin: "0 auto 12px auto",
                              }}
                            />
                            <h6 style={{ marginBottom: "6px" }}>{skill.content}</h6>
                            <span className="badge badge-primary">{skill.porcentage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Indicators */}
                <ol className="carousel-indicators" style={{ bottom: "-30px" }}>
                  {skillsSlides.map((_, index) => (
                    <li
                      key={index}
                      data-target="#skillsCarousel"
                      data-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      style={{ backgroundColor: "#0078ff" }}
                    ></li>
                  ))}
                </ol>

                <a
                  className="carousel-control-prev"
                  href="#skillsCarousel"
                  role="button"
                  data-slide="prev"
                  style={{ filter: "invert(50%)" }}
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#skillsCarousel"
                  role="button"
                  data-slide="next"
                  style={{ filter: "invert(50%)" }}
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
