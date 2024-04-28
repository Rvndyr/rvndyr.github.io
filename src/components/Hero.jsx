/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import Anime from "./Anime";


// const avatar = require("./assets/randy.jpg")

const Hero = () => {

  return (
    <Container>
      <LeftBox>
        <span>Hi, my name is</span>
        <h1><abbr title="Randy Rodriguez :)">Randy</abbr></h1>
        <span>I'm a software developer who makes open-source projects 
          and writes about life, code, design, and more. Welcome to my digital garden. 🌱 </span>
      </LeftBox>
      <Anime />
      {/* <Image src="src/assets/randy.JPG"></Image> */}
    </Container>
  )
}
const Container = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
// padding-top: 10%;
border: thick double #32a1ce;
`

const P = styled.p`
text-wrap: wrap;
width: 75%;
border: thick double red
`

const LeftBox = styled.div`
display: flex;
flex-direction: column;
border: thick double #32a1ce;
width: 50%
`
const Image = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  margin-top: 30px;

`
export default Hero