import React from "react";
import Hero from "../components/Hero";
import styled from "styled-components";
import Anime from "../components/Anime";

const Home = () => {
  return(
    <Container>
      <Anime/>
      <Hero/>
    </Container>
  )
}


const Container = styled.div`
width: 100%;
`

export default Home