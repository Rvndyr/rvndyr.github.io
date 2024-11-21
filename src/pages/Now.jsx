// Have a list of blogs and each blog is a link that opens a route to the blog.md page
import React from 'react'
import styled from 'styled-components'
import Posts from '../components/Posts'

const Blog = () => {
  return (
  <Container>
    <h1>Blog</h1>

    <div>
      <h3>2024</h3>
      <Posts />
    </div>

    </Container>
  )
}

const Container = styled.div`
font-size: 2vw;

`

export default Blog