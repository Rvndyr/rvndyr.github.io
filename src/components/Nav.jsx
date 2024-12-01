import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Burger } from "./Burger";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  let windowsSize = window.innerWidth <= 768
  return (
    <Container>
      <Home to="/">randy rodriguez</Home>
      <NavRoutes>
        {windowsSize
        ? <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
        :<>
        <NavLink to="/Now">now</NavLink>
        <NavLink to="/Projects">work</NavLink>
        <NavLink to="/About">about</NavLink> </>}
      </NavRoutes>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Aligns Home to the left and NavRoutes to the right */
  padding-top: 3vh;
  width: 100%;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    align-items: center;
    padding-top: 2vh;
    // border: 1px solid red;
  }
`;

const NavLink = styled(Link)`
  background: none;
  text-decoration: none;
  color: #adb5bd;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem; /* Slightly smaller font for tablets */
  }

  @media (max-width: 480px) {
    font-size: 0.8rem; /* Smaller font for phones */
  }
`;

const NavRoutes = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 1vh;
  }

  @media (max-width: 480px) {
    flex-direction: column; /* Stack links vertically for phones */
    align-items: center;
    gap: 5px;
  }
`;

const Home = styled(NavLink)`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Slightly smaller font for tablets */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Smaller font for phones */
  }
`;

export default Nav;
