// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx'
import styled from 'styled-components'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Now from './pages/Now.jsx';
import Projects from './pages/Projects.jsx';

function App() {

  return (
   <Background>
    <Container>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/now' element={<Now/>} />
        <Route exact path='/projects' element={<Projects/>} />
      </Routes>
    </Container>
      <Footer>
      © “Catch on fire if you must, sometimes everything must burn to the ground so that we may grow.” A. J. Lawless
      </Footer>
   </Background>
  )
}
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 200vh;
  background-color: #15191f;
  color: #f9f9f9;
  text-transform: lowercase;
  font-family: Geist Mono,serif;
`;
const Container = styled.div`
  width: 50vw;
  height: 40%;
  // border: thick double yellow
  // flex: 1;
`;

const Footer = styled.footer`
  color: #fff;
  text-align: center;
  padding: 1rem;
  font-family: "Bad Script", cursive;
  font-weight: 200;
  font-style: normal;
  font-size: 1rem;
`;

export default App
