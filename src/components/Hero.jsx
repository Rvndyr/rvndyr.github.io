/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";

// const avatar = require("./assets/randy.jpg")

const Hero = () => {

  return (
    <Container>
      <LeftBox>
        <h1>Hey, I'm Randy </h1>
        <P>I'm a software developer who makes open-source projects and writes about life, code, design, and more. Welcome to my digital garden. 🌱</P>
      </LeftBox>
      <Image src="src/assets/randy.JPG"></Image>
    </Container>
  )
}
const Container = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding-top: 10%;
`

const P = styled.p`
text-wrap: wrap;
width: 75%;
`

const LeftBox = styled.div`
display: flex;
flex-direction: column;
`

const Image = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  margin-top: 30px;

`
export default Hero