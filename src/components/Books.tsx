import React from 'react';

const books = [
  {
    title: "Made to Stick: Why Some Ideas Survive and Others Die",
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

export function Books() {
  return (
    <div className="flex gap-4 p-4">
      {books.map((book, index) => (
        <div key={index} className="flex items-center">
          <a 
            href={book.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-[100px] h-auto rounded-md shadow-md"
              title={book.title}
            />
          </a>
        </div>
      ))}
    </div>
  );
}