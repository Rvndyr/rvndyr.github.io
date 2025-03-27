import React from 'react';

interface TBRBook {
  title: string;
  image: string;
  link: string;
  series?: string;
  seriesOrder?: number;
}

const tbrBooks: TBRBook[] = [
  {
    "title": "The Hero of Ages",
    "image": "https://m.media-amazon.com/images/I/61RjT56kuDL._SL1500_.jpg",
    "link": "https://www.amazon.com/dp/0765316897",
    "series": "Mistborn",
    "seriesOrder": 3,
    "currentlyReading": false
  },
  {
    "title": "The Well of Ascension",
    "image": "https://m.media-amazon.com/images/I/71DSAOjnSbL._SL1500_.jpg",
    "link": "https://www.amazon.com/dp/0765316889",
    "series": "Mistborn",
    "seriesOrder": 2,
    "currentlyReading": false
  },
  {
    "title": "The Final Empire",
    "image": "https://m.media-amazon.com/images/I/717Cf+uOV4L._SL1500_.jpg",
    "link": "https://www.amazon.com/dp/076531178X",
    "series": "Mistborn",
    "seriesOrder": 1,
    "currentlyReading": false
  },
  {
    "title": "The War of Art: Break Through the Blocks and Win Your Inner Creative Battles",
    "image": "https://m.media-amazon.com/images/I/51lmpnWEuEL._SL1360_.jpg",
    "link": "https://www.amazon.com/dp/1936891026",
    "series": null,
    "seriesOrder": null,
    "currentlyReading": false
  },
  {
    "title": "A Game of Thrones 5-Book Boxed Set (A Song of Ice and Fire)",
    "image": "https://m.media-amazon.com/images/I/71RxGxZBojL._SL1280_.jpg",
    "link": "https://www.amazon.com/dp/0345535529",
    "series": "A Song of Ice and Fire",
    "seriesOrder": "1-5",
    "currentlyReading": false
  },
  {
    "title": "Of Blood and Fire",
    "image": "https://m.media-amazon.com/images/I/71bP8WhvwxL._SL1360_.jpg",
    "link": "https://www.amazon.com/dp/1838381809",
    "series": "The Bound and The Broken",
    "seriesOrder": 1,
    "currentlyReading": false
  },
  {
    "title": "The Sword of Kaigen: A Theonite War Story",
    "image": "https://m.media-amazon.com/images/I/71CrKDOkS2L._SL1500_.jpg",
    "link": "https://www.amazon.com/dp/1720193863",
    "series": null,
    "seriesOrder": null,
    "currentlyReading": false
  },
  {
    "title": "Foundryside: A Novel",
    "image": "https://m.media-amazon.com/images/I/81AFr9Klb6L._SL1500_.jpg",
    "link": "https://www.amazon.com/dp/1524760366",
    "series": "The Founders Trilogy",
    "seriesOrder": 1,
    "currentlyReading": false
  },
  {
    "title": "Blake Crouch Collection 3 Books Set (Upgrade, Recursion, Dark Matter)",
    "image": "https://m.media-amazon.com/images/I/51WN4v8EGJL._SX342_SY445_.jpg",
    "link": "https://www.amazon.com/dp/B0BJZDVKPL",
    "series": null,
    "seriesOrder": null,
    "currentlyReading": false
  }
]

export function TBRBooks() {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {tbrBooks.map((book) => (
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
              <img
                src={book.image}
                alt={book.title}
                className="w-[100px] h-[150px] rounded-md shadow-md object-cover"
                title={`${book.title}${book.series ? ` (${book.series} Book ${book.seriesOrder})` : ''}`}
              />
            </a>
          </div>
        ))}
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent opacity-50" />
    </div>
  );
}