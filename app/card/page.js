"use client"
import { useState, useRef } from 'react';

export default function Carousel() {
  const cards = [
    { id: 1, content: 'Card 1' },
    { id: 2, content: 'Card 2' },
    { id: 3, content: 'Card 3' },
    { id: 4, content: 'Card 4' },
    { id: 5, content: 'Card 5' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  // Handle scroll logic for next and previous cards
  const handleScroll = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length); // Wrap around to the first card
    } else if (direction === 'prev') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length); // Wrap around to the last card
    }
  };

  // Handle touch start event
  const handleTouchStart = (e) => {
    touchStart.current = e.changedTouches[0].screenX;
  };

  // Handle touch end event
  const handleTouchEnd = (e) => {
    touchEnd.current = e.changedTouches[0].screenX;
    if (touchEnd.current < touchStart.current) {
      handleScroll('next');
    } else if (touchEnd.current > touchStart.current) {
      handleScroll('prev');
    }
  };

  // Handle card click event
  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full max-w-lg mx-auto overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Fading Effect at the ends */}
      <div className="absolute inset-0 bg-gradient-to-l from-white to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent z-10"></div>

      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex) * 100}%)`, // Moves the carousel based on the currentIndex
        }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 h-72 bg-blue-500 text-white rounded-lg shadow-lg flex items-center justify-center transition-opacity duration-300 cursor-pointer ${
              index === currentIndex
                ? 'opacity-100' // Full opacity for the current card
                : 'opacity-50' // Faded opacity for the surrounding cards
            }`}
            onClick={() => handleCardClick(index)} // Click to make the card the active one
          >
            {card.content}
          </div>
        ))}
      </div>

      {/* Optionally, you can add this for debugging */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        Current Index: {currentIndex + 1}
      </div>
    </div>
  );
}
