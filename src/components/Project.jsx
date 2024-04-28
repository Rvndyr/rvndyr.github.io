/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Project = ({time, title, sourceLink, liveLink, desc}) => {
  return (
    <Container>
      <Time>{time}</Time>
      <span>{title}</span>

      <P>{desc}</P>

      <ButtonContainer>
        <ButtonLinks>
          <A href={sourceLink} target="_blank">Source</A>
        </ButtonLinks>
        <ButtonLinks>
          <A href={liveLink} target="_blank">Demo</A>
        </ButtonLinks>

      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
width: 40%;
width: auto;
box-sizing: border-box;
background-color: #252525;
border: 1px solid #2c2c2c;
border-radius: 10px;
height: 15vh;
height: auto;
padding: 25px;
overflow: hidden;

&:hover {
  border: 1px solid #4c4c4c;
}
`;

const Time = styled.div`
color: #5eddac;
`

const ButtonLinks = styled.div`
background-color: #252525;
border: 2px solid #2c2c2c;
border-radius: 10px;
&:hover {
  border: 1.5px solid #4c4c4c;
}

`
const ButtonContainer = styled.div`
display: flex;
flex-wrap: nowrap;
gap: .5rem;
gap: 1vw;

`
const A = styled.a`
text-decoration: none;
color: inherit;
`;

const P = styled.p`
color: #999;
`

export default Project;