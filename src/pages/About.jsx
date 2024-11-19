import React from "react";
import styled from "styled-components";


const About = ()=> {

  return(
    <>
    <h3>about</h3>

    

    <p>brief facts about me</p>
    <ul>
      <ListStyle>
        born in new york city, raised in the bronx. my roots gave me <i>thick</i> skin
      </ListStyle>
      <ListStyle>
        packaged my bags and drove 1,000* miles to tampa, florida, which i now call home
      </ListStyle>
      <ListStyle>
        passionate about cars, bikes, tech, and fitness
      </ListStyle>
      <ListStyle>
        fluent in english and spanish
      </ListStyle>
      <ListStyle>
        unfortunantely, i have an obssession with watches; 
      </ListStyle>
      <ListStyle>
        i listen to all types of music, different genre's, pace, and language(s), especially japanese music
      </ListStyle>
    </ul>
    </>
  )
}


const ListStyle = styled.li`
list-style-type: "⏤";
margin-bottom: .5em;
padding-inline-start: .375em;
`
export default About