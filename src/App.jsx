import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx'
import styled from 'styled-components'
import Home from './pages/Home.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    // This container wraps the entire page under the body tag to size content how I want
   <Container darkMode = {darkMode}>
    {/* This nav component takes in two params and a func handles the "props" to enable or disable darkmode. */}
    <Nav darkModeSetter={setDarkMode} darkModeGetter={darkMode}/>
    {/* Routes handles the routes on the page. Additionally, houses components I want rendered for each page. Each page is shown under routes as a component */}
    <Routes>
      <Route exact path='/' element={<Home/>} />
    </Routes>
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
color: ${props=>props.darkMode ? '#f9f9f9': '#181818'};
`

export default App
