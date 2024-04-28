`renders a nav bar with a button for light and dark mode. Nav takes in two params (props)`
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

// const Nav = ({darkModeGetter, darkModeSetter}) => {
  const Nav = () =>{
// function toggleDarkMode (){
//   darkModeSetter(!darkModeGetter)
// }
return (
  <Container>
    <LinkContainer>
      <Link to="/"><button>Home</button></Link>
      <Link to="/About"><button>About</button></Link>
      <Link to="/Blog"><button>Blog</button></Link>
      <Link to="/Projects"><button>Projects</button></Link>
      <Link to="https://github.com/Rvndyr" target="_blank"><button>Github</button></Link>
    </LinkContainer>
    {/* <button onClick={()=>toggleDarkMode()}>Dark</button> */}
  </Container>
)
}
const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding-top: 3vh;
width: 100%;
`
const LinkContainer = styled.div`
display: flex;
gap: 2vh;
`

export default Nav