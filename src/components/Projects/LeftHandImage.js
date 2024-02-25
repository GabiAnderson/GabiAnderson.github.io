import React from 'react';
import Image from 'next/image';
import AnimatedTextTypeInView from '../../animations/AnimatedTextTypeInView';
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

function LeftHandImage({ img, title, desc, width, height, shadeName = 'Shade1' }) {
  const borderColorClass = getRandomColorClass(shadeName);

  return (
    <div className='col-span-8 text-center'>
      <div className='grid w-full grid-cols-8 gap-2 my-8 lg:my-4'>
        <div className='col-span-5 flex flex-col items-start justify-center lg:col-span-4'>
          <Image src={img} className={`border-4 border-solid ${borderColorClass} p-2`} 
          width={width || "900"} // Use provided width or default to "100%"
          height={height || "300"} // Use provided height or default to "500px"
          />
        </div>

        <div className='col-span-3 flex flex-col items-start justify-center lg:col-span-4'>
          <div className='text-primaryColor font-bold mx-auto py-8 lg:py-4 sm:py-2'>
            <AnimatedTextTypeInView text={title} delay={100} className='text-3xl xl:text-xl lg:text-lg sm:text-sm' />
          </div>
          <TextFormat className='dark:text-light mx-auto text-xl xl:text-mmd lg:text-sm sm:text-xxs' text={desc} />
        </div>
      </div>
    </div>
  );
}

export default LeftHandImage;
