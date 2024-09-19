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
      <Home to="/">randy rodriguez</Home>
      <NavRoutes>
      <NavLink to="/Blog">blog</NavLink>
      <NavLink to="/Projects">work</NavLink>
      <NavLink to="/About">about</NavLink>
      </NavRoutes>
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
border: thick double purple
`
const NavLink = styled(Link)`
background: none;
text-decoration: none;
color: grey;
`
const NavRoutes = styled.div`
display: flex;
border: thick double red;
padding-right: 3vh;
gap: 10px;
`
const Home = styled(NavLink)`
color: white;
`
export default Nav