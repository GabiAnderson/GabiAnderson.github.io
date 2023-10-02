// See Bottom of code for different ways to call this

import React, { useState } from 'react';
import Image from 'next/image';

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

// ...

const HoverTripleColumn = ({ img1, img2, img3, title1, title2, title3, desc1, desc2, desc3, width1, height1, width2, height2, width3, height3, }) => {
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
      <div className='col-span-3 flex flex-col items-center justify-center'>
        <div
          onMouseOver={() => handleMouseOver(0)}
          onMouseOut={handleMouseOut}
          className={`relative transition-transform hover:scale-105 ${
            hoveredIndex === 0 ? 'hover:text-dark dark:hover:text-light' : ''
          }`}
        >
          <div className={`border-4 border-solid ${borderColorClass1} p-2 rounded-lg`}>
            <Image
              src={img1}
              className='rounded-lg'
              width={width1 || "900"} // Use provided width or default to "100%"
              height={height1 || "300"} // Use provided height or default to "500px"
            />
          </div>
          {hoveredIndex === 0 && (
            <div className='p-4 text-center'>
              <h2 className='text-primary font-bold pb-2'>{title1}</h2>
              <p>{desc1}</p>
            </div>
          )}
        </div>
      </div>

      <div className='col-span-3 flex flex-col items-center justify-center'>
        <div
          onMouseOver={() => handleMouseOver(1)}
          onMouseOut={handleMouseOut}
          className={`relative transition-transform hover:scale-105 ${
            hoveredIndex === 1 ? 'hover:text-dark dark:hover:text-light' : ''
          }`}
        >
          <div className={`border-4 border-solid ${borderColorClass2} p-2 rounded-lg`}>
            <Image
              src={img2}
              className='rounded-lg'
              width={width2 || "900"} // Use provided width or default to "100%"
              height={height2 || "300"} // Use provided height or default to "500px"
            />
          </div>
          {hoveredIndex === 1 && (
            <div className='p-4 text-center'>
              <div className='text-primary font-bold pb-2'>{title2}</div>
              <p>{desc2}</p>
            </div>
          )}
        </div>
      </div>

      <div className='col-span-3 flex flex-col items-center justify-center'>
        <div
          onMouseOver={() => handleMouseOver(2)}
          onMouseOut={handleMouseOut}
          className={`relative transition-transform hover:scale-105 ${
            hoveredIndex === 2 ? 'hover:text-dark dark:hover:text-light' : ''
          }`}
        >
          <div className={`border-4 border-solid ${borderColorClass3} p-2 rounded-lg`}>
            <Image
              src={img3}
              className='rounded-lg'
              width={width3 || "900"} // Use provided width or default to "100%"
              height={height3 || "300"} // Use provided height or default to "500px"
            />
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


/* These examples are DoubleColumn but just add an additional img, title, desc and width/height as needed
Without Specifying Width and Height (Default Behavior):
<DoubleColumn
  img1={testImg1}
  img2={testImg2}
  title1="Image 1"
  title2="Image 2"
  desc1="Description 1"
  desc2="Description 2"
/>


Specifying Width and Height for One Image:
<DoubleColumn
  img1={testImg1}
  img2={testImg2}
  title1="Image 1"
  title2="Image 2"
  desc1="Description 1"
  desc2="Description 2"
  width1={300}
  height1={200}
/>

Specifying Width and Height for Both Images:
<DoubleColumn
  img1={testImg1}
  img2={testImg2}
  title1="Image 1"
  title2="Image 2"
  desc1="Description 1"
  desc2="Description 2"
  width1={300}
  height1={200}
  width2={200}
  height2={300}
/>

Specifying Width and Height for the Second Image Only:
<DoubleColumn
  img1={testImg1}
  img2={testImg2}
  title1="Image 1"
  title2="Image 2"
  desc1="Description 1"
  desc2="Description 2"
  width2={200}
  height2={300}
/>
 */