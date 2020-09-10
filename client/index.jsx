import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TitleBar from "./components/TitleBar.jsx";
import NavBar from "./components/NavBar.jsx";
import WorkContainer from "./components/WorkContainer.jsx";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <TitleBar />
          <Switch>
            <Route
              path="/web"
              render={props => (
                <>
                  <NavBar {...props} category={props.match.path} />
                  <WorkContainer {...props} category={props.match.path} />
                </>
              )}
            />
            <Route
              path="/photo"
              render={props => (
                <>
                  <NavBar {...props} category={props.match.path} />
                  <WorkContainer {...props} category={props.match.path} />
                </>
              )}
            />
            <Route
              path="/illustration"
              render={props => (
                <>
                  <NavBar {...props} category={props.match.path} />
                  <WorkContainer {...props} category={props.match.path} />
                </>
              )}
            />
            <Route
              path="/other"
              render={props => (
                <>
                  <NavBar {...props} category={props.match.path} />
                  <WorkContainer {...props} category={props.match.path} />
                </>
              )}
            />
            <Route
              path="/"
              render={props => (
                <>
                  <NavBar {...props} category={props.match.path} />
                  <WorkContainer {...props} category={props.match.path} />
                </>
              )}
            />
          </Switch>
        </Router>
        <footer>
          &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
        </footer>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Portfolio />, document.getElementById("portfolio"));
