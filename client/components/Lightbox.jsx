import React from "react";
      
const Lightbox = props => {
  return (
    <div className="lightbox" id={props.url}>
      <div className="showcase">
        <div className="close" onClick={() => {window.location.href='#_'}}>
          <span></span>
          <span></span>
        </div>
        <div className="info_block">
          <div className="title_piece">{props.project.title}</div>
          <div className="tech">{props.project.tech}</div>
          <div className="description">{props.project.description}
          </div>
          {props.project.link ?
          <div className="links">
            <a
              href={props.project.link}
              target="_blank"
            >
              &gt; Link to code
            </a>
          </div>
          : null }
          {props.project.demo ?
          <div className="links">
            <a
              href={props.project.demo}
              target="_blank"
            >
              &gt; Link to demo
            </a>
          </div> : null }
        </div>
        <div className="image_block">
          {props.project.images.map((image, i) => {
            return <img
              key={props.project.title, i}
              src={image}
              alt={props.project.title}
            ></img>
          })}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
