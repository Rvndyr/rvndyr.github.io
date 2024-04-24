import React from "react";
import styled from "styled-components";
import Project from "../components/Project";
import projects from "../posts/projects"

const Projects = () => {
  "This is a spread operator that turns projects -> obj into an array of an object "

  return(
<>
  <h1>Projects</h1>
  <Container>
    {projects.map((project, i) => (
      <Project 
        key={i}
        title={project.title}
        description={project.description}
        time={project.time}
        sourceLink={project.sourceLink}
        liveLink={project.liveLink} />
    ) )}
     
  </Container>
 </> 
  )
}


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
height: 50vh;
gap: 2vh;
width: 100%;
`;

export default Projects;
