import React, { useState } from 'react';
import Image from 'next/image';
import { RightArrowButton, LeftArrowButton } from '../Common/Icons';

const colorClassMap = {
  accentgreen: 'fill-accentgreen/60',
  accentblue: 'fill-accentblue/60',
  accentpink: 'fill-accentpink/60',
};

function getRandomColorClass() {
  const classNames = Object.values(colorClassMap);
  const randomIndex = Math.floor(Math.random() * classNames.length);
  return classNames[randomIndex];
}

const ScrollableColumn = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
  };

  const currentItem = content[currentIndex];

  const arrowColorClass = getRandomColorClass();

  return (
    <div className='col-span-9 text-center pb-4'>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'center', // Center the content horizontally
          alignItems: 'center', // Center the content vertically
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%', // Set a fixed height for the arrow button container
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
            <LeftArrowButton className={`${arrowColorClass}`} style={{ width: '50px', height: '50px' }} />
          </div>
        </div>
        <div
          className="column content"
          style={{
            flex: '6', // Adjust the flex value to control the size ratio
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
              maxHeight: '500px', // Set a fixed height for the image container
              overflow: 'hidden', // Hide overflow content if the image is too large
              position: 'relative',
            }}
          >
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              width={500} // Set a fixed width for the image
              height={500} // Set a fixed height for the image
            />
          </div>
          <p className='dark:text-light'>{currentItem.description}</p>
        </div>
        <div
          className="column arrow"
          onClick={handleNext}
          style={{
            flex: '1',
            textAlign: 'center',
            cursor: 'pointer',
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%', // Set a fixed height for the arrow button container
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
            <RightArrowButton className={`${arrowColorClass}`} style={{ width: '50px', height: '50px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableColumn;
