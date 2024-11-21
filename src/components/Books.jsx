import React from "react";
import styled from "styled-components";

// Styled components
const BookListContainer = styled.div`
  display: flex;
  flex-direction: grid;
  gap: 16px;
  padding: 16px;
`;

const BookItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BookImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Books = () => {
  // Book data stored within the component
  const books = [
    {
      title: "Made to Stick: Why Some Ideas Survive and Others Die Why Some Ideas Survive and Others Die (Books)",
      image: "https://m.media-amazon.com/images/I/71ZtF6rSKYL._SL1500_.jpg",
      link: "https://a.co/d/iQulef7",
    },
    {
      title: "Uncommon Sense Teaching: Practical Insights in Brain Science to Help Students Learn",
      image: "https://m.media-amazon.com/images/I/71lt-QLaDgL._SL1500_.jpg",
      link: "https://a.co/d/gi7v4WI",
    },
    {
      title: "Your Next Five Moves: Master the Art of Business Strategy",
      image: "https://m.media-amazon.com/images/I/718fiiLzNAL._SL1500_.jpg",
      link: "https://a.co/d/8wkO9HF",
    },
    {
      title: "A Return to Love: Reflections on the Principles of 'A Course in Miracles'",
      image: "https://m.media-amazon.com/images/I/71aY0tkOJbL._SL1500_.jpg",
      link: "https://a.co/d/5HbbRbN",
    },    
    {
      title: "Crush It!: Why NOW Is the Time to Cash In on Your Passion",
      image: "https://m.media-amazon.com/images/I/819hsUytzUL._SL1500_.jpg",
      link: "https://a.co/d/e3w8ZWO",
    },
  ];
  //

  return (
    <BookListContainer>
      {books.map((book, index) => (
        <BookItem key={index}>
          <a href={book.link} target="_blank" rel="noopener noreferrer">
            <BookImage src={book.image} alt={book.title} />
          </a>
          <div>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
            </a>
          </div>
        </BookItem>
      ))}
    </BookListContainer>
  );
};

export default Books;
