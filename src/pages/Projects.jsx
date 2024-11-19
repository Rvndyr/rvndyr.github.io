import React from "react";
import styled from "styled-components";

const Projects = () => {
  "This is a spread operator that turns projects -> obj into an array of an object "

  return(
<>
  <Container>
  <h3>things ive done.</h3>
    <ul>
      <ListStyle>
       <a href="https://multi-mon.netlify.app/login" target="_blank" rel="noopener noreferrer"> multi-mon:</a> a utility used to watch multiple streams over twitch | <a href="https://github.com/Rvndyr/MultiMon-frontend" target= "_blank">github</a>
      </ListStyle>
      <ListStyle>
        born in new york city, raised in the bronx. my roots gave me <i>thick</i> skin
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
 a {
    color: #007acc; /* Use your preferred link color */
    text-decoration: none;
  }

  a:visited {
    color: #007acc; /* Override visited link color */
  }

  a:hover {
    text-decoration: underline; /* Add underline on hover */
  }
// border: thick double green;
`;

const ListStyle = styled.li`
list-style-type: "⏤";
margin-bottom: .5em;
padding-inline-start: .375em;
`
export default Projects;
