import React, { useState } from 'react';
import Image from 'next/image';
import { RightArrowButton, LeftArrowButton } from '../Common/Icons';
import AnimatedTextType from '../Common/AnimatedTextType';
import AnimatedText from '../Common/AnimatedText';

const ScrollableColumn = ({ content, sectionTitle }) => {
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
      <AnimatedText text={sectionTitle} className='text-primary'/>
      <p className='text-accentpink font-bold text-lg'>Click the arrows to scroll</p>
      <div className="container">
        <div className="column arrow" onClick={handlePrev}>
          <div className="arrow-container">
            <LeftArrowButton className='fill-primary' style={{ width: '20%', height: '100%' }} />
          </div>
        </div>
        <div className="column content">
          <span className='text-lg font-bold uppercase text-accentgreen/75'>
            <h1>{currentItem.title}</h1>
          </span>
          <div className="image-container">
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              sizes="(max-width: 768px) 100vs, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p>{currentItem.description}</p>
        </div>
        <div className="column arrow" onClick={handleNext}>
          <div className="arrow-container">
            <RightArrowButton className='fill-primary' style={{ width: '20%', height: '100%' }} />
          </div>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 58px;
            margin-bottom: 100px;
            height: 400px; /* Set a fixed height for the container */
            width: 2000px;
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
            padding-top: 100px;
          }
          .arrow-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%; /* Match the height of the container */
          }
          img {
            max-width: 100%;
            height: auto;
            width: 100%; /* Image takes up full width of its container */
          }
        `}</style>
      </div>
    </div>
  );
};

export default ScrollableColumn;
