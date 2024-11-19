import React from "react";
import styled from "styled-components";
import Project from "../components/Project";
import projects from "../posts/projects"

const Projects = () => {
  "This is a spread operator that turns projects -> obj into an array of an object "

  return(
<>
  <Container>
  <h3>things ive done.</h3>
    <ul>
      <ListStyle>
        i obviously dont think to deep into design 😩
      </ListStyle>
      <ListStyle>
        born in new york city, raised in the bronx. my roots gave me <i>thick</i> skin
      </ListStyle>
      <ListStyle>
        packaged my bags and drove 1,000* miles to tampa, florida, which i now call home
      </ListStyle>
      <ListStyle>
        passionate about cars, bikes, and tech
      </ListStyle>
      <ListStyle>
        fluent in english and spanish
      </ListStyle>
    </ul>
    
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
// border: thick double green;
`;

const ListStyle = styled.li`
list-style-type: "⏤";
margin-bottom: .5em;
padding-inline-start: .375em;
`

export default Projects;
