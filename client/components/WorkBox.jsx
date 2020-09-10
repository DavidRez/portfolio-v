import React from "react";
import Lightbox from "./Lightbox.jsx";
import LazyLoad from 'react-lazyload';

class WorkBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded : false
    }
  }

  loaded() {
    console.log('loaded')
    this.setState({imageLoaded : true})
  }

  render() {
    return (
      <LazyLoad>
        <div className={"work fadeIn"}>
              <div className="imageBox" data-type={this.props.work.datatype}>
                <a href={"#" + this.props.work.url}>
                  <div className="overlay" name={this.props.work.url}></div>
                </a>
                <img src={this.props.work.mainImage} alt={this.props.work.title} onLoad={this.loaded.bind(this)}></img>
              </div>
              <div className="worktitle">{this.props.work.title}</div>
              <div className="type">{this.props.work.type}</div>
        </div>
        <Lightbox project={this.props.project} url={this.props.work.url} />
      </LazyLoad>
    );
  }
};

export default WorkBox;
