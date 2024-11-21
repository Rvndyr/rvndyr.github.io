import React from "react";
import styled from "styled-components";
import Books from "../components/Books";


const About = ()=> {

  return(
    <>
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
        i listen to all types of music, different genre's, and language(s), especially <a href="https://music.apple.com/us/album/otonoke/1771603028?i=1771603031" target="_blank" rel="noopener noreferrer">japanese</a> music
      </ListStyle>
      <ListStyle>

        i have 3 energetic <HoverText> dogs<PopupImage
        className="popup-image"
        src="src/assets/3_doggos.jpeg"
        alt="Popup"
          />
        </HoverText>!
      </ListStyle>
      <ListStyle>
        some of the books ive read:
        <Books/>
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
const HoverText = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover .popup-image {
    display: block; /* Show the image on hover */
  }
`;

// Styled component for the popup image
const PopupImage = styled.img`
  display: none; /* Hide image by default */
  position: absolute;
  bottom: 100%; /* Position the image above the text */
  left: 50%;
  transform: translateX(-50%) translateY(-8px); /* Adjust for spacing */
  margin-bottom: 8px; /* Space between the text and image */
  width: 150px; /* Adjust size of the popup image */
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
export default About