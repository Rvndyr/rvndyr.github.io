import React from "react";
import Hero from "../components/Hero";
import styled from "styled-components";

const Home = () => {
  return(
    <Container>
      <Hero/>
    </Container>
  )
}


const Container = styled.div`
width: 100%;
`

export default Home