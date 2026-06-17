import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "Android Developer with experience building production applications using Kotlin, Jetpack Compose, XML, and Kotlin Multiplatform (KMP).",
        },
        {
          id: "second-p-about",
          content:
            "Skilled in MVVM architecture, Dependency Injection, REST API integration, media playback, and Play Store deployment.",
        },
        {
          id: "third-p-about",
          content:
            "Experienced with backend technologies including Node.js, Ktor, Docker, and GCP.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-12">
                    <div className="about-me">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
