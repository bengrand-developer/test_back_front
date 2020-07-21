import React, { useState, useEffect } from "react";
import Axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/api/projects").then((response) =>
      setProjects(response.data)
    );
  });
  return (
    <div className="projects-container">
      <div className="project">
        {projects.map((project) => (
          <div>
            {project.name} et {project.projet}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
