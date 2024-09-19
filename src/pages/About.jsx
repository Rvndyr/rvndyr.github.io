import React from "react";
import Anime from "../components/Anime";
import styled from "styled-components";


const About = ()=> {

  return(
    <>
    <h1>about</h1>

    <Anime />

    <p>brief facts about me</p>
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
    </>
  )
}


const ListStyle = styled.li`
list-style-type: "⏤";
margin-bottom: .5em;
padding-inline-start: .375em;
`
export default About