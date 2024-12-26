// Have a list of blogs and each blog is a link that opens a route to the blog.md page
import React from 'react'
import styled from 'styled-components'

const Blog = () => {
  return (
  <Container>
    <h2>now</h2>
    <p>This “Now” page reflects my current priorities and goals, and I will update it regularly as my focus and activities change over time. I’m currently building a digital version of the War card game. I chose this project because it’s a fun way to dive deeper into programming fundamentals like data structures (queues, stacks, etc.) and problem-solving. I’m building the game from scratch using Python and React. My goal is to keep improving my skills through real-world applications so i plan on adding in some operational scripts/automation to this project too. Wether thats a simple ci/cd or hosting the site on aws.</p>
    <p>published: 2024.12 | last updated: 2024.12 | this now page is inspired by <StyledLink href="https://nownownow.com/about" target="_blank">Derek Sivers</StyledLink></p>
    
    <p>other things</p>
    <ul>
      <ListStyle>
        focusing on working out, lifting heavy weights, and eating enough calories to maintain muscle
      </ListStyle>
      <ListStyle>
        taking up the aws associate developer cert to improve on my aws skills for future projects
      </ListStyle>
      <ListStyle>
        trying to read more manhwa. i finished the <a
            href="https://www.amazon.com/dp/B08G4GCLX3?binding=paperback&qid=1735183650&sr=8-2&ref=dbs_dp_rwt_sb_pc_tpbk"
            target="_blank"
            rel="noopener noreferrer">
            <i>solo leveling</i></a> series and it was captivating. now im looking for the next
      </ListStyle>
      <ListStyle>
        preparing for my daughter to be born! thinking about names and we might be going with <strong>aria</strong>
      </ListStyle>
      <ListStyle>
        trying to be consitent in anything i do. whether thats in work, my studies, my relationships, or my health
      </ListStyle>
    </ul>
    </Container>
  )
}

const Container = styled.div`
max-width: 35vw;
font-size: 1.1rem;
display: flex;
flex-direction: column;

`
const ListStyle = styled.li`
  list-style-type: "⏤";
  margin-bottom: 0.5em;
  padding-inline-start: 0.375em;
  a {
    overflow: hidden;
    position: relative;
    display: inline-block;
  }

  a::before,
  a::after {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
  }
  a::before {
    background-color: #ffff;
    height: 2px;
    bottom: 0;
    transform-origin: 100% 50%;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }
  a::after {
    content: attr(data-replace);
    height: 100%;
    top: 0;
    transform-origin: 100% 50%;
    transform: translate3d(200%, 0, 0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
    color: #fffff;
  }

  a:hover::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }
  a:hover::after {
    transform: translate3d(0, 0, 0);
  }

  a span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  a:hover span {
    transform: translate3d(-200%, 0, 0);
  }

  a {
    text-decoration: none;
    color: #ffff;
    font-weight: 700;
    vertical-align: top;
  }

  @media screen and (max-width: 720px) {
    font-size: 0.9em;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8em;
    line-height: 1.3;
  }
`;

const StyledLink = styled.a`
  color: inherit; /* Use the current text color */
  // text-underline-offset: 2px; /* Adjust underline spacing */
  text-decoration-thickness: 1.5px;

  &:hover {
    text-decoration-style: wavy; /* Wavy underline on hover */
  }
`;

export default Blog