import React, { useState } from 'react';
import Image from 'next/image';

const ScrollableColumn = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
  };

  const currentItem = content[currentIndex];

  return (
    <div className="container">
      <div className="column arrow" onClick={handlePrev}>
        &lt;
      </div>
      <div className="column content">
        <h1>{currentItem.title}</h1>
        <Image
          src={currentItem.image}
          alt={currentItem.title}
          width={300} // Adjust the width as needed
          height={200} // Adjust the height as needed
        />
        <p>{currentItem.description}</p>
      </div>
      <div className="column arrow" onClick={handleNext}>
        &gt;
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .column {
          flex: 1;
          text-align: center;
          cursor: pointer;
        }
        .arrow {
          font-size: 24px;
        }
        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default ScrollableColumn;
