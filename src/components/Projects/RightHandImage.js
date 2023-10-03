import React from 'react';
import Image from 'next/image';
import AnimatedTextTypeInView from '../../animations/AnimatedTextTypeInView';

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

function RightHandImage({ img, title, desc, width, height, shadeName = 'Shade1' }) {
  const borderColorClass = getRandomColorClass(shadeName);

  return (
    <div className='col-span-8 text-center pb-4'>
      <div className='grid w-full grid-cols-8 gap-8 px-8 my-8'>
        <div className='col-span-2 flex flex-col items-start justify-center'>
          <div className='text-primaryColor font-bold mx-auto py-8'>
            <AnimatedTextTypeInView text={title} delay={100} />
          </div>
          <p className='dark:text-light mx-auto'>{desc}</p>
        </div>

        <div className='col-span-6 flex flex-col items-start justify-center'>
          <Image src={img} className={`border-4 border-solid ${borderColorClass} p-2`} 
          width={width || "900"} // Use provided width or default to "100%"
          height={height || "300"} // Use provided height or default to "500px"
          />
        </div>
      </div>
    </div>
  );
}

export default RightHandImage;
