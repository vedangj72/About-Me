import React from "react";

const educationEntries = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Government College of Engineering, Amravati",
    year: "2024",
    score: "CGPA: 8.4 / 10",
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary Education (HSC)",
    institution: "BabaSaheb Utangle Jr College, Akola",
    year: "2020",
    score: "Percentage: 78%",
  },
  {
    id: "primary",
    degree: "Secondary Education (SSC)",
    institution: "Saraswati Vidya Mandir, Khamgaon",
    year: "2018",
    score: "Percentage: 88%",
  },
];

function Education() {
  return (
    <section id="education" className="sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Education</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              {educationEntries.map((entry) => (
                <div
                  className="row align-items-center mb-4"
                  key={entry.id}
                  style={{ paddingBottom: "16px", borderBottom: "1px solid #eee" }}
                >
                  <div className="col-12 col-md-8">
                    <h5 style={{ marginBottom: "4px" }}>{entry.degree}</h5>
                    <h6 style={{ color: "#0078ff", marginBottom: "4px" }}>
                      {entry.institution}
                    </h6>
                  </div>
                  <div className="col-12 col-md-4 text-md-right">
                    <p className="lead" style={{ marginBottom: "0" }}>
                      <strong>{entry.year}</strong> &nbsp;|&nbsp; {entry.score}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
