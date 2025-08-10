import React from 'react';

interface Book {
  title: string;
  image: string;
  link: string;
  series?: string;
  seriesOrder?: number;
  currentlyReading?: boolean;
}

const books: Book[] = [
  {
    title: "Dark Age",
    image: "https://m.media-amazon.com/images/I/81gO5aXFeqL._SY466_.jpg",
    link: "https://a.co/d/heZvNdq",
    series: "Red Rising Saga",
    seriesOrder: 5,
    currentlyReading: true
  },  
  {
    title: "Iron Gold",
    image: "https://m.media-amazon.com/images/I/81rwXOFT3QL._SY466_.jpg",
    link: "https://a.co/d/caLWtpP",
    series: "Red Rising Saga",
    seriesOrder: 4,
  },
  {
    title: "Morning Star",
    image: "https://m.media-amazon.com/images/I/617wGOptJPL._SL1200_.jpg",
    link: "https://a.co/d/gfP3k6e",
    series: "Red Rising Saga",
    seriesOrder: 3
  },
  {
    title: "Red Rising",
    image: "https://m.media-amazon.com/images/I/81wGzzxqHSL._SL1500_.jpg",
    link: "https://a.co/d/7Z9Z9Zz",
    series: "Red Rising Saga",
    seriesOrder: 1
  },
  {
    title: "Golden Son",
    image: "https://m.media-amazon.com/images/I/61HFDxBnhxL._SL1200_.jpg",
    link: "https://a.co/d/0C6aUlR",
    series: "Red Rising Saga",
    seriesOrder: 2
  },
  {
    title: "Made to Stick: Why Some Ideas Survive and Others Die",
    image: "https://m.media-amazon.com/images/I/71ZtF6rSKYL._SL1500_.jpg",
    link: "https://a.co/d/iQulef7"
  },
  {
    title: "Uncommon Sense Teaching: Practical Insights in Brain Science to Help Students Learn",
    image: "https://m.media-amazon.com/images/I/71lt-QLaDgL._SL1500_.jpg",
    link: "https://a.co/d/gi7v4WI"
  },
  {
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    image: "https://m.media-amazon.com/images/I/718fiiLzNAL._SL1500_.jpg",
    link: "https://a.co/d/8wkO9HF"
  },
  {
    title: "A Return to Love: Reflections on the Principles of 'A Course in Miracles'",
    image: "https://m.media-amazon.com/images/I/71aY0tkOJbL._SL1500_.jpg",
    link: "https://a.co/d/5HbbRbN"
  },    
  {
    title: "Crush It!: Why NOW Is the Time to Cash In on Your Passion",
    image: "https://m.media-amazon.com/images/I/819hsUytzUL._SL1500_.jpg",
    link: "https://a.co/d/e3w8ZWO"
  },
];

export function Books() {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto pb-4 pt-4 snap-x snap-mandatory scrollbar-hide">
        {books.map((book) => (
          <div 
            key={book.title} 
            className="flex-none snap-center"
          >
            <a 
              href={book.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-[100px] h-[150px] rounded-md shadow-md object-cover"
                  title={`${book.title}${book.seriesOrder ? ` (Book ${book.seriesOrder})` : ''}`}
                />
                {book.currentlyReading && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-lg animate-pulse">
                    Reading
                  </div>
                )}
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent opacity-50" />
    </div>
  );
}