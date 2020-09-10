import React from "react";
import WorkBox from "./WorkBox.jsx";
import { gallery, projects } from "../data/data.js";


class WorkContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: [],
      projects: {},
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({ gallery: gallery, projects: projects, loaded: true });
  }

  render() {
    const { loaded, gallery, projects } = this.state;
    let interval = 50;
    let count = 0;

    return (
      <React.Fragment>
        {loaded ? (
          <div className="work-container">
            {gallery.map((work, i) => {
              setTimeout(()=>{}, interval);
              interval += 500;
              if (('/' + work.datatype) === this.props.category || this.props.category === '/') {
                return <WorkBox key={"work" + i} work={work} project={projects[work.url]} />;
              }
            })}
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default WorkContainer;
