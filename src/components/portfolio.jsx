import React from "react";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/projects.json")
      .then(response => response.json())
      .then(data => this.setState({ projects: data, loading: false }))
      .catch(error => {
        console.error("Error fetching projects:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { projects, loading } = this.state;
    const completedProjects = projects.filter(p => p.type === "completed");
    const upcomingProjects = projects.filter(p => p.type === "upcoming");

    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center">Loading projects...</div>
          ) : (
            <div className="row">
              {completedProjects.map((project) => (
                <div className="col-md-4" key={project.id}>
                  <div className="work-box d-flex flex-column" style={{ height: '100%' }}>
                    <a href={project.link} target={project.link !== "#" ? "_blank" : "_self"} rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <div className="work-img d-flex align-items-center justify-content-center" style={{ backgroundColor: "#ffffff", height: "250px", overflow: "hidden" }}>
                        <img src={process.env.PUBLIC_URL + "/img/" + project.image} alt={project.title} className="img-fluid" style={{ maxHeight: "100%", objectFit: "contain" }} />
                      </div>
                      <div className="work-content flex-grow-1">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">{project.title}</h2>
                            <div className="w-more">
                              <span className="w-ctegory">{project.category}</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="row mt-4">
            <div className="col-sm-12 text-center">
              <a href="https://github.com/vedangj72" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                More Projects
              </a>
            </div>
          </div>
          
          <div id="upcoming" className="row mt-5">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Upcoming Projects</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {upcomingProjects.map((project) => (
              <div className="col-md-4" key={project.id}>
                <div className="work-box d-flex flex-column" style={{ height: '100%' }}>
                  <div className="work-img d-flex align-items-center justify-content-center" style={{ backgroundColor: "#ffffff", height: "250px", overflow: "hidden" }}>
                    <img src={process.env.PUBLIC_URL + "/img/" + project.image} alt={project.title} className="img-fluid" style={{ maxHeight: "100%", objectFit: "contain" }} />
                  </div>
                  <div className="work-content flex-grow-1">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">{project.title}</h2>
                        <div className="w-more">
                          <span className="w-ctegory">{project.category}</span>
                        </div>
                      </div>
                      <div className="col-sm-4">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
