/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";


// const avatar = require("./assets/randy.jpg")

const Hero = () => {

  return (
    <Container>
      <LeftBox>
        <span>hey</span>
        <P>im a developer specializing in cloud engineering and automation. i dabble in web dev here and there 🌚. my approach to the work i do is all about keeping things simple and practical, following basic principles that work.</P>
      </LeftBox>
    </Container>
  )
}
const Container = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding-top: 5%;
border: thick double #32a1ce;
`

const P = styled.p`
text-wrap: wrap;
width: 100%;
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