import React, { useState } from 'react';
import Image from 'next/image';
import AnimatedTextTypeInView from '@/animations/AnimatedTextTypeInView';

const colorClassMap = {
  accentgreen: 'border-accentgreen/60',
  accentblue: 'border-accentblue/60',
  accentpink: 'border-accentpink/60',
  accentyellow: 'border-accentyellow/60',
  accentmaroon: 'border-accentmaroon/60',
};

function getRandomColorClass() {
  const classNames = Object.values(colorClassMap);
  const randomIndex = Math.floor(Math.random() * classNames.length);
  return classNames[randomIndex];
}

const HoverTripleColumn = ({ img1, img2, img3, title1, title2, title3, desc1, desc2, desc3 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const borderColorClass1 = getRandomColorClass();
  const borderColorClass2 = getRandomColorClass();
  const borderColorClass3 = getRandomColorClass();

  return (
    <div className='grid w-full grid-cols-9 gap-8 px-8 my-16'>
      <div className='col-span-3 flex flex-col items-start justify-center'>
        <div
          onMouseOver={() => handleMouseOver(0)}
          onMouseOut={handleMouseOut}
          className={`relative transition-transform hover:scale-105 ${
            hoveredIndex === 0 ? 'hover:text-dark dark:hover:text-light' : ''
          }`}
        >
          <div className={`border-4 border-solid ${borderColorClass1} p-2 rounded-lg`}>
            <Image src={img1} className='rounded-lg' />
          </div>
          {hoveredIndex === 0 && (
            <div className='p-4 text-center'>
              <h2 className='text-primary font-bold pb-2'>{title1}</h2>
              <p>{desc1}</p>
            </div>
          )}
        </div>
      </div>

      <div className='col-span-3 flex flex-col items-start justify-center'>
        <div
          onMouseOver={() => handleMouseOver(1)}
          onMouseOut={handleMouseOut}
          className={`relative transition-transform hover:scale-105 ${
            hoveredIndex === 1 ? 'hover:text-dark dark:hover:text-light' : ''
          }`}
        >
          <div className={`border-4 border-solid ${borderColorClass2} p-2 rounded-lg`}>
            <Image src={img2} className='rounded-lg' />
          </div>
          {hoveredIndex === 1 && (
            <div className='p-4 text-center'>
              <div className='text-primary font-bold pb-2'>{title2}</div>
              <p>{desc2}</p>
            </div>
          )}
        </div>
      </div>

      <div className='col-span-3 flex flex-col items-start justify-center'>
        <div
          onMouseOver={() => handleMouseOver(2)}
          onMouseOut={handleMouseOut}
          className={`relative transition-transform hover:scale-105 ${
            hoveredIndex === 2 ? 'hover:text-dark dark:hover:text-light' : ''
          }`}
        >
          <div className={`border-4 border-solid ${borderColorClass3} p-2 rounded-lg`}>
            <Image src={img3} className='rounded-lg' />
          </div>
          {hoveredIndex === 2 && (
            <div className='p-4 text-center'>
              <h2 className='text-primary font-bold pb-2'>{title3}</h2>
              <p>{desc3}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HoverTripleColumn;
