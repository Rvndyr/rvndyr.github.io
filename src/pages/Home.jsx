import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";


const Home = () => {
  return(
  <div>
  <Hero/>
  <p>socials</p>
  <Socials>
  <a href="https://buymeacoffee.com/rvndyr" target="_blank">
  <Img src="https://img.icons8.com/?size=100&id=26396&format=png&color=000000"></Img></a>

  <a href="https://github.com/Rvndyr/" target="_blank">
  <Img src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000"></Img></a>

  <a href="https://www.linkedin.com/in/randyrod/" target="_blank">
  <Img src="https://img.icons8.com/?size=100&id=y5JIrUFMX5be&format=png&color=000000"></Img></a>
  </Socials>

  </div>
  )
}

const Socials = styled.div`
color: #ffff;
font-size: 1rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: 10px;
`
const Img = styled.img`
filter: brightness(0) invert(1); /* Converts black to white */
width: 2vw;
transition: transform 0.3s ease; /* Smooth scaling */

&:hover {
  transform: scale(1.2); /* Slight zoom on hover */
}
`;

export default Home

// 