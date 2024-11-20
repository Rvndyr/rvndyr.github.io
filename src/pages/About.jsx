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
        packaged my bags and drove 1,000* miles to tampa, florida which i now call home
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
        i listen to all types of music, different genre's, pace, and language(s), especially <a href="https://music.apple.com/us/album/otonoke/1771603028?i=1771603031" target="_blank" rel="noopener noreferrer">japanese</a> music
      </ListStyle>
    </ul>
    </>
  )
}


const ListStyle = styled.li`
list-style-type: "⏤";
margin-bottom: .5em;
padding-inline-start: .375em;
a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

a::before,
a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
a::before {
  background-color: #ffff;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #fffff;
}

a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
a:hover::after {
  transform: translate3d(0, 0, 0);
}

a span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

a:hover span {
  transform: translate3d(-200%, 0, 0);
}

/* Presentational Styles */
body {
  display: grid;
  font-family: 'Poppins', sans-serif;
  font-size: 27px;
  line-height: 1.5;
  height: 100vh;
  place-items: center;
}

a {
  text-decoration: none;
  color: #ffff;
  font-weight: 700;
  vertical-align: top;
}

`
export default About