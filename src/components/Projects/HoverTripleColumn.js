import React, { useState, useEffect } from 'react';
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
  const [isSmartDevice, setIsSmartDevice] = useState(false);

  useEffect(() => {
    // Function to check if device is a smart device
    const checkSmartDevice = () => {
      const userAgent = navigator.userAgent;
      setIsSmartDevice(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    };

    // Check on mount
    checkSmartDevice();

    // Add event listener to check on resize
    window.addEventListener('resize', checkSmartDevice);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener('resize', checkSmartDevice);
    };
  }, []);

  const handleMouseOver = (index) => {
    if (!isSmartDevice) {
      setHoveredIndex(index);
    }
  };

  const handleMouseOut = () => {
    if (!isSmartDevice) {
      setHoveredIndex(null);
    }
  };

  const [expandedImg, setExpandedImg] = useState(null); // State to track which image is expanded

  const handleImageClick = (imgSrc) => {
    if (isSmartDevice) {
      setExpandedImg(imgSrc);
    }
  };

  const handleCloseButtonClick = () => {
    setExpandedImg(null);
  };

  const borderColorClass1 = getRandomColorClass(shadeName);
  const borderColorClass2 = getRandomColorClass(shadeName);
  const borderColorClass3 = getRandomColorClass(shadeName);

  return (
    <div className='grid w-full grid-cols-9 gap-8 my-4 sm:gap-1'>
      <div className='col-span-3 flex-col items-center justify-center'>
        <div
          onMouseOver={() => handleMouseOver(0)}
          onMouseOut={handleMouseOut}
          onClick={() => handleImageClick(img1)}
          className={`relative transition-transform ${hoveredIndex === 0 || isSmartDevice ? 'hover:text-dark dark:hover:text-light' : ''}`}
        >
          <div className={`border-4 border-solid ${borderColorClass1} p-2 rounded-lg sm:border-1 sm:p-0 sm:rounded-sm`}>
            <Image
              src={img1}
              className='rounded-lg'
              width={width1 || "900"}
              height={height1 || "300"}
              // Conditionally set the width and height based on the device and screen size
              {...(isSmartDevice && { width: "600", height: "200" })}
            />
            <button className='rounded-lg bg-light border-2 border-dark p-2 absolute top-4 right-4 md:p-1 md:top-2 md:right-2 md:border md:rounded-md dark:bg-dark dark:border-light'>
              <svg fill="None" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-4 lg:h-4 md:w-2 md:h-2">
                <path d="M22 42H6V26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                <path d="M26 6H42V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </svg>
            </button>
          </div>
          {(hoveredIndex === 0 || isSmartDevice) && (
            <div className='p-4 text-center sm:p-0'>
              <h2 className='text-primaryColor font-bold pb-2 sm:text-sm'>{title1}</h2>
              <TextFormat className='sm:text-xs' text={desc1} />
            </div>
          )}
        </div>
      </div>

      <div className='col-span-3 flex-col items-center justify-center'>
        <div
          onMouseOver={() => handleMouseOver(1)}
          onMouseOut={handleMouseOut}
          onClick={() => handleImageClick(img2)}
          className={`relative transition-transform ${hoveredIndex === 1 || isSmartDevice ? 'hover:text-dark dark:hover:text-light' : ''}`}
        >
          <div className={`border-4 border-solid ${borderColorClass2} p-2 rounded-lg sm:border-1 sm:p-0 sm:rounded-sm`}>
            <Image
              src={img2}
              className='rounded-lg'
              width={width1 || "900"}
              height={height1 || "300"}
              // Conditionally set the width and height based on the device and screen size
              {...(isSmartDevice && { width: "600", height: "200" })}
            />
            <button className='rounded-lg bg-light border-2 border-dark p-2 absolute top-4 right-4 md:p-1 md:top-2 md:right-2 md:border md:rounded-md dark:bg-dark dark:border-light'>
              <svg fill="None" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-4 lg:h-4 md:w-2 md:h-2">
                <path d="M22 42H6V26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                <path d="M26 6H42V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </svg>
            </button>
          </div>
          {(hoveredIndex === 1 || isSmartDevice) && (
            <div className='p-4 text-center sm:p-0'>
              <h2 className='text-primaryColor font-bold pb-2 sm:text-sm'>{title2}</h2>
              <TextFormat className='sm:text-xs' text={desc2} />
            </div>
          )}
        </div>
      </div>

      <div className='col-span-3 flex-col items-center justify-center'>
        <div
          onMouseOver={() => handleMouseOver(2)}
          onMouseOut={handleMouseOut}
          onClick={() => handleImageClick(img3)}
          className={`relative transition-transform ${hoveredIndex === 2 || isSmartDevice ? 'hover:text-dark dark:hover:text-light' : ''}`}
        >
          <div className={`border-4 border-solid ${borderColorClass3} p-2 rounded-lg sm:border-1 sm:p-0 sm:rounded-sm`}>
            <Image
              src={img3}
              className='rounded-lg'
              width={width1 || "900"}
              height={height1 || "300"}
              // Conditionally set the width and height based on the device and screen size
              {...(isSmartDevice && { width: "600", height: "200" })}
            />
            <button className='rounded-lg bg-light border-2 border-dark p-2 absolute top-4 right-4 md:p-1 md:top-2 md:right-2 md:border md:rounded-md dark:bg-dark dark:border-light'>
              <svg fill="None" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-4 lg:h-4 md:w-2 md:h-2">
                <path d="M22 42H6V26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                <path d="M26 6H42V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </svg>
            </button>
          </div>
          {(hoveredIndex === 2 || isSmartDevice) && (
            <div className='p-4 text-center sm:p-0'>
              <h2 className='text-primaryColor font-bold pb-2 sm:text-sm'>{title3}</h2>
              <TextFormat className='sm:text-xs' text={desc3} />
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
