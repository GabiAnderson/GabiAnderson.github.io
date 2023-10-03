// See Bottom of code for different ways to call this

import React, { useState } from 'react';
import Image from 'next/image';

const colorShades = {
  Shade1: ["border-primaryColorShade1", "border-secondaryColorShade1", "border-tertiaryColorShade1", "border-secondaryTertiaryColorShade1"],
  Shade2: ["border-primaryColorShade2", "border-secondaryColorShade2", "border-tertiaryColorShade2", "border-secondaryTertiaryColorShade2"],
  Shade3: ["border-primaryColorShade3", "border-secondaryColorShade3", "border-tertiaryColorShade3", "border-secondaryTertiaryColorShade3"],
  Shade4: ["border-primaryColorShade4", "border-secondaryColorShade4", "border-tertiaryColorShade4", "border-secondaryTertiaryColorShade4"],
};

function getRandomColorClass(shadeName) {
  const shades = colorShades[shadeName];
  if (!shades) return ""; // Return an empty string if shadeName is not valid
  const randomIndex = Math.floor(Math.random() * shades.length);
  return shades[randomIndex];
}

const HoverTripleColumn = ({ img1, img2, img3, title1, title2, title3, desc1, desc2, desc3, width1, height1, width2, height2, width3, height3, shadeName = 'Shade1' }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const borderColorClass1 = getRandomColorClass(shadeName);
  let borderColorClass2 = getRandomColorClass(shadeName);
  let borderColorClass3 = getRandomColorClass(shadeName);
  // Ensure borderColorClass2 is different from borderColorClass1
  while (borderColorClass2 === borderColorClass1) {
    borderColorClass2 = getRandomColorClass(shadeName);
  }
  // Ensure borderColorClass3 is different from both borderColorClass1 and borderColorClass2
  while (borderColorClass3 === borderColorClass1 || borderColorClass3 === borderColorClass2) {
    borderColorClass3 = getRandomColorClass(shadeName);
  }

  return (
    <div className='grid w-full grid-cols-9 gap-8 px-8 my-8'>
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
              <h2 className='text-primaryColor font-bold pb-2'>{title1}</h2>
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
              <div className='text-primaryColor font-bold pb-2'>{title2}</div>
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
              <h2 className='text-primaryColor font-bold pb-2'>{title3}</h2>
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