import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";


const Home = () => {
  return(
  <Container>
    <Hero/>
  </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Home;
