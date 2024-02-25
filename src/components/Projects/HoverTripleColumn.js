// See Bottom of code for different ways to call this

import React, { useState } from 'react';
import Image from 'next/image';
import TextFormat from '../Common/TextFormat';

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

  const [expandedImg, setExpandedImg] = useState(null); // State to track which image is expanded

  const handleImageClick = (imgSrc) => {
    setExpandedImg(imgSrc);
  };

  const handleCloseButtonClick = () => {
    setExpandedImg(null);
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
    <div className='grid w-full grid-cols-9 gap-8 my-4'>
      <div className='col-span-3 flex flex-col items-center justify-center'>
        <div
          onMouseOver={() => handleMouseOver(0)}
          onMouseOut={handleMouseOut}
          className={`relative transition-transform hover:scale-105 ${hoveredIndex === 0 ? 'hover:text-dark dark:hover:text-light' : ''
            }`}
        >
          <div className={`border-4 border-solid ${borderColorClass1} p-2 rounded-lg`}>
            <Image
              src={img1}
              className='rounded-lg'
              width={width1 || "900"} // Use provided width or default to "100%"
              height={height1 || "300"} // Use provided height or default to "500px"
              onClick={() => handleImageClick(img1)} // Expand the image on click
            />
            <button className='rounded-lg bg-light border-2 border-dark p-2 absolute top-4 
              right-4 md:p-1 md:top-2 md:right-2 md:border md:rounded-md dark:bg-dark dark:border-light'>
              <svg fill="None" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-4 lg:h-4 md:w-2 md:h-2">
                <path d="M22 42H6V26" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
                <path d="M26 6H42V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
              </svg>
            </button>
          </div>
          {hoveredIndex === 0 && (
            <div className='p-4 text-center'>
              <h2 className='text-primaryColor font-bold pb-2'>{title1}</h2>
              <TextFormat text={desc1} />
            </div>
          )}
        </div>
      </div>

      <div className='col-span-3 flex flex-col items-center justify-center'>
        <div
          onMouseOver={() => handleMouseOver(1)}
          onMouseOut={handleMouseOut}
          className={`relative transition-transform hover:scale-105 ${hoveredIndex === 1 ? 'hover:text-dark dark:hover:text-light' : ''
            }`}
        >
          <div className={`border-4 border-solid ${borderColorClass2} p-2 rounded-lg`}>
            <Image
              src={img2}
              className='rounded-lg'
              width={width2 || "900"} // Use provided width or default to "100%"
              height={height2 || "300"} // Use provided height or default to "500px"
              onClick={() => handleImageClick(img1)} // Expand the image on click
            />
            <button className='rounded-lg bg-light border-2 border-dark p-2 absolute top-4 
              right-4 md:p-1 md:top-2 md:right-2 md:border md:rounded-md dark:bg-dark dark:border-light'>
              <svg fill="None" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-4 lg:h-4 md:w-2 md:h-2">
                <path d="M22 42H6V26" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
                <path d="M26 6H42V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
              </svg>
            </button>
          </div>
          {hoveredIndex === 1 && (
            <div className='p-4 text-center'>
              <div className='text-primaryColor font-bold pb-2'>{title2}</div>
              <TextFormat text={desc2} />
            </div>
          )}
        </div>
      </div>

      <div className='col-span-3 flex flex-col items-center justify-center'>
        <div
          onMouseOver={() => handleMouseOver(2)}
          onMouseOut={handleMouseOut}
          className={`relative transition-transform hover:scale-105 ${hoveredIndex === 2 ? 'hover:text-dark dark:hover:text-light' : ''
            }`}
        >
          <div className={`border-4 border-solid ${borderColorClass3} p-2 rounded-lg`}>
            <Image
              src={img3}
              className='rounded-lg'
              width={width3 || "900"} // Use provided width or default to "100%"
              height={height3 || "300"} // Use provided height or default to "500px"
              onClick={() => handleImageClick(img1)} // Expand the image on click
            />
            <button className='rounded-lg bg-light border-2 border-dark p-2 absolute top-4 
              right-4 md:p-1 md:top-2 md:right-2 md:border md:rounded-md dark:bg-dark dark:border-light'>
              <svg fill="None" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-4 lg:h-4 md:w-2 md:h-2">
                <path d="M22 42H6V26" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
                <path d="M26 6H42V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
              </svg>
            </button>
          </div>
          {hoveredIndex === 2 && (
            <div className='p-4 text-center'>
              <h2 className='text-primaryColor font-bold pb-2'>{title3}</h2>
              <TextFormat text={desc3} />
            </div>
          )}
        </div>
      </div>
      {/* Expanded image overlay */}
      {expandedImg && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center"
          onClick={handleCloseButtonClick} // Collapse the expanded image when overlay is clicked
        >
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <Image
              src={expandedImg}
              className="max-w-full max-h-full"
              layout="responsive"
            />
          </div>
        </div>
      )}
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