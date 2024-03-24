import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import styled from 'styled-components'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
   <Container darkMode = {darkMode}>
    <Nav darkModeSetter={setDarkMode} darkModeGetter={darkMode}/>
    <Hero />
   </Container>
  )
}
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
height:100vh;
background-color: ${props=>props.darkMode ? '#181818': '#f9f9f9'};

`

export default App
