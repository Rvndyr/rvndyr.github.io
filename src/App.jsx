// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './components/Nav.jsx'
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
  justify-content: space-between; /* Keeps space between content and footer */
  min-height: 100vh; /* Ensure the page takes up the full viewport height */
  max-height: 100vh; /* Prevent scrolling beyond the viewport */
  overflow: hidden; /* Disable scrolling beyond the footer */
  background-color: #15191f;
  color: #f9f9f9;
  text-transform: lowercase;
  font-family: Geist Mono, serif;
  // border: 1px solid green; /* Testing borders */
`;

const Container = styled.div`
  width: 50vw;
  flex-grow: 1; /* Fills the space between the nav and footer */
  overflow-y: auto; /* Enables scrolling if content exceeds the space */
  @media (max-width: 768px) {
    width: 90vw;
    // border: 1px solid red;
  }
  // border: 1px solid yellow; /* Testing borders */
`;

const Footer = styled.footer`
  color: #fff;
  text-align: center;
  padding: 1rem;
  font-family: "Bad Script", cursive;
  font-weight: 200;
  font-style: normal;
  font-size: 1rem;
  // border: 1px solid blue; /* Testing borders */
`;


export default App
