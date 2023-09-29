import React, { useState } from 'react';
import Image from 'next/image';
import { RightArrowButton, LeftArrowButton } from '../Common/Icons';

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
    <div className='col-span-9 text-center pb-4'>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '58px',
          marginBottom: '100px',
          height: '400px', // Set a fixed height for the container
          width: '2000px',
        }}
      >
        <div
          className="column arrow"
          onClick={handlePrev}
          style={{
            flex: '1',
            textAlign: 'center',
            cursor: 'pointer',
            fontSize: '24px',
          }}
        >
          <div
            className="arrow-container"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%', // Match the height of the container
            }}
          >
            <LeftArrowButton className='fill-primary' style={{ width: '20%', height: '100%' }} />
          </div>
        </div>
        <div
          className="column content"
          style={{
            flex: '1',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '100px',
          }}
        >
          <span className='text-lg font-bold uppercase text-accentgreen/75'>
            <h1>{currentItem.title}</h1>
          </span>
          <div
            className="image-container"
            style={{
              maxWidth: '100%',
              height: 'auto',
              width: '100%', // Image takes up full width of its container
            }}
          >
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              sizes="(max-width: 768px) 100vs, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p>{currentItem.description}</p>
        </div>
        <div
          className="column arrow"
          onClick={handleNext}
          style={{
            flex: '1',
            textAlign: 'center',
            cursor: 'pointer',
            fontSize: '24px',
          }}
        >
          <div
            className="arrow-container"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%', // Match the height of the container
            }}
          >
            <RightArrowButton className='fill-primary' style={{ width: '20%', height: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableColumn;
