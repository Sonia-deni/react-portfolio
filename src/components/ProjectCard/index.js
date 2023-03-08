import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
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
          <a href={props.repo}><strong><FontAwesomeIcon icon={faSquareGithub} className="gitLink" /></strong></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
