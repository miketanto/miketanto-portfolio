import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
	FaGithub,
  } from "react-icons/fa";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, link, github } = props;

	return (
		<React.Fragment>
			<div className="project">
				<div>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-links">
							<a href = {link} className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">view demo</div>
							</a>
							{github?
							<a href = {github} className="project-link">
								<div className="project-link-icon">
									<FaGithub/>
								</div>
								<div className="project-link-text">source code</div>
							</a>
							:null}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
