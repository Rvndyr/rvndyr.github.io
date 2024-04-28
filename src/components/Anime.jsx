import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Anime = () => {
  const [quoteData, setQuoteData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://waifu.it/api/v4/quote";
        const response = await axios.get(url, {
          headers: {
            Authorization: "NDExNjc5OTkxNTYzMjg4NTc2.MTcxNDI0NTc3OQ--.6b3d81a76",
          },
        });
        setQuoteData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function to prevent memory leaks
    return () => {
      // Cleanup code if any
    };
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <p>Quote: {quoteData.quote}</p>
      <p>Anime: {quoteData.anime}</p>
      <p>Author: {quoteData.author}</p>
    </Container>
  );
};

export default Anime

const Container = styled.div`
  position: relative;
  width: 50%;
`