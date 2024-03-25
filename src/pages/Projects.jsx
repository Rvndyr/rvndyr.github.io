import React from "react";
import styled from "styled-components";
import Project from "../components/Project";

const Projects = () => {

  return(
<>
  <h1>Projects</h1>
  <Container>
     <Project  time={'2021'} title={'Twich'} source={'fooo'} liveLink={'fooo'} />
     <Project  time={'2021'} title={'Twich'} source={'fooo'} liveLink={'fooo'} />
     <Project  time={'2021'} title={'Twich'} source={'fooo'} liveLink={'fooo'} />
     <Project  time={'2021'} title={'Twich'} source={'fooo'} liveLink={'fooo'} />
     
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
