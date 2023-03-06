import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
          <strong>About: </strong>{props.info}
          </li>
          <li>
          <a href={props.link}><strong>Deployed Page</strong></a>
          </li>
          <li>
          <a href={props.repo}><strong>Github Repo</strong></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
