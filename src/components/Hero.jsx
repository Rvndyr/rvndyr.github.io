/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


// const avatar = require("./assets/randy.jpg")

const Hero = () => {

  return (
    <Container>
      <LeftBox>
        <span>hey</span>
        <P>
      I'm a developer specializing in cloud engineering and automation. I dabble in web dev here and there 🌚. My approach to the work I do is all about keeping things simple and practical, following basic principles that work. On this site you can see what I'm doing <i><StyledLink to="/now">now</StyledLink></i>, learn <i><StyledLink to="/about">about</StyledLink></i> me, and see what <i><StyledLink to="/projects">projects</StyledLink></i> I've worked on.
    </P>      </LeftBox>
      <ImageWrapper>
      <Image src="src/assets/randy.JPG" alt="Profile pic" />
      </ImageWrapper>
    </Container>
  )
}
const Container = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding-top: 5%;
// border: thick double #32a1ce;
`

const P = styled.p`
text-wrap: wrap;
width: 100%;
// border: thick double red
`

const LeftBox = styled.div`
display: flex;
flex-direction: column;
// border: thick double #32a1ce;
width: 80%
`

const Image = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  padding-left: 100px;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end; /* Aligns the image to the right */
  width: 100%; /* Ensures the wrapper takes the full width */

`;

const StyledLink = styled(Link)`
  color: inherit; /* Use the current text color */
  text-decoration: underline; /* Add underline */
  text-underline-offset: 2px; /* Adjust underline spacing */
  text-decoration-thickness: 1.5px; /* Adjust underline thickness */
  &:hover {
    text-decoration-style: wavy; /* Wavy underline on hover (optional) */
  }
`;
export default Hero