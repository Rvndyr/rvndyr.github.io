/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <LeftBox>
        <Header>hey</Header>
        <P>
          I'm a developer specializing in cloud engineering and automation. I like to keep things simple and practical. On this site, you can see what I'm doing{" "}
          <i>
            <StyledLink to="/now">now</StyledLink>
          </i>
          , learn{" "}
          <i>
            <StyledLink to="/about">about</StyledLink>
          </i>{" "}
          me, and see what{" "}
          <i>
            <StyledLink to="/projects">projects</StyledLink>
          </i>{" "}
          I've worked on. I dabble in web dev here and there 🌚.
        </P>
      </LeftBox>
      <ImageWrapper>
        <Dummy></Dummy>
        <IconWrapper>
          <Image
            src="https://rvndyr-portfolio.s3.us-east-2.amazonaws.com/assets/randy.JPG"
            alt="Profile pic"
            loading="lazy"
          />
          <Socials>
            <a href="https://buymeacoffee.com/rvndyr" target="_blank" rel="noopener noreferrer">
              <Img src="https://img.icons8.com/?size=100&id=26396&format=png&color=000000" />
            </a>
            <a href="https://github.com/Rvndyr/" target="_blank" rel="noopener noreferrer">
              <Img src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000" />
            </a>
            <a href="https://www.linkedin.com/in/randyrod/" target="_blank" rel="noopener noreferrer">
              <Img src="https://img.icons8.com/?size=100&id=y5JIrUFMX5be&format=png&color=000000" />
            </a>
          </Socials>
        </IconWrapper>
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 5%;
  max-width: 1024px;
  gap: 20px; /* Adds spacing between columns */

  @media (max-width: 1024px) and (min-width: 768px) {
    /* Targets iPads in landscape and portrait mode */
    flex-direction: column-reverse; /* Image above text */
    align-items: center;
    padding-top: 2%;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Stacks for smaller tablets and phones */
    align-items: center;
    padding-top: 2%;
  }

  @media (max-width: 480px) {
    padding-top: 1%;
  }
`;

const Header = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const P = styled.p`
  text-wrap: wrap;
  width: 100%;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 250;
  font-style: normal;
  font-size: 1.2rem;
  line-height: 1.6rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.3rem;
  }
`;

const Dummy = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    display: none; /* Hide on smaller screens */
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  gap: 10px;
  transform: translateX(25px);

  @media (max-width: 768px) {
    transform: none;
    width: 100%;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    margin-bottom: 20px; /* Space below the image for iPads */
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    margin-bottom: 20px; /* Space below the image */
  }
`;
const Image = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;

  @media (max-width: 768px) {
    height: 12rem;
    width: 12rem;
  }

  @media (max-width: 480px) {
    height: 10rem;
    width: 10rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;

  @media (max-width: 1024px) and (min-width: 768px) {
    flex-direction: column;
    align-items: center; /* Align for iPads */
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: inherit; /* Use the current text color */
  text-decoration: underline; /* Add underline */
  text-underline-offset: 2px; /* Adjust underline spacing */
  text-decoration-thickness: 1.5px;

  &:hover {
    text-decoration-style: wavy; /* Wavy underline on hover */
  }
`;

const Socials = styled.div`
  color: #fff;
  font-size: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

const Img = styled.img`
  filter: brightness(0) invert(1); /* Converts black to white */
  width: 1vw;
  transition: transform 0.3s ease; /* Smooth scaling */

  &:hover {
    transform: scale(1.2); /* Slight zoom on hover */
  }

  @media (max-width: 768px) {
    width: 2vw;
  }

  @media (max-width: 480px) {
    width: 3vw;
  }
`;

export default Hero;
