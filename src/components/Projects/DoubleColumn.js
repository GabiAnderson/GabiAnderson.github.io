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

const DoubleColumn = ({ img1, img2, title1, title2, desc1, desc2, width1, height1, width2, height2, shadeName = 'Shade1' }) => {
  const [expandedImg, setExpandedImg] = useState(null); // State to track which image is expanded

  const handleImageClick = (imgSrc) => {
    setExpandedImg(imgSrc);
  };

  const handleCloseButtonClick = () => {
    setExpandedImg(null);
  };

  const borderColorClass1 = getRandomColorClass(shadeName);
  let borderColorClass2 = getRandomColorClass(shadeName);
  // Ensure borderColorClass2 is different from borderColorClass1
  while (borderColorClass2 === borderColorClass1) {
    borderColorClass2 = getRandomColorClass(shadeName);
  }

  return (
    <div className='col-span-8 text-center pb-2'>
      <div className='grid w-full grid-cols-8 gap-4 my-2'>
        <div className='col-span-4 flex flex-col items-start justify-center relative'>
          <Image
            src={img1}
            className={`border-4 border-solid ${borderColorClass1} p-2 min-max-image cursor-pointer`}
            width={width1 || "900"}
            height={height1 || "300"}
            onClick={() => handleImageClick(img1)} // Expand the image on click
          />
          <button className='rounded-lg bg-light border-2 border-dark p-2 absolute top-4 
              right-4 md:p-1 md:top-2 md:right-2 md:border md:rounded-md dark:bg-dark dark:border-light'>
            <svg fill="None" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-4 lg:h-4 md:w-2 md:h-2">
              <path d="M22 42H6V26" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
              <path d="M26 6H42V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
            </svg>
          </button>

          <h2 className='text-primaryColor font-bold mx-auto py-8 lg:py-6 sm:py-4 xs:py-2 xs:text-sm'>{title1}</h2>
          <TextFormat className='dark:text-light mx-auto md:text-sm xs:text-xs' text={desc1} />
        </div>

        <div className='col-span-4 flex flex-col items-start justify-center relative'>
          <Image
            src={img2}
            className={`w-full h-auto border-4 border-solid ${borderColorClass2} p-2 min-max-image cursor-pointer`}
            width={width2 || "900"}
            height={height2 || "300"}
            onClick={() => handleImageClick(img2)} // Expand the image on click
          />
          <button className='rounded-lg bg-light border-2 border-dark p-2 absolute top-4 
              right-4 md:p-1 md:top-2 md:right-2 md:border md:rounded-md dark:bg-dark dark:border-light'>
            <svg fill="None" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-4 lg:h-4 md:w-2 md:h-2">
              <path d="M22 42H6V26" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
              <path d="M26 6H42V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
            </svg>
          </button>

          <h2 className='text-primaryColor font-bold mx-auto py-8 lg:py-6 sm:py-4 xs:py-2 xs:text-sm'>{title2}</h2>
          <TextFormat className='dark:text-light mx-auto md:text-sm xs:text-xs' text={desc2} />
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

export default DoubleColumn;
