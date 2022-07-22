import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectElements = projects.map(entry => {
    return <li key={entry.id}>{entry.name}</li>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ul>
          {projectElements}
        </ul>
      </div>
    </div>
  );
}

export default ProjectList;
