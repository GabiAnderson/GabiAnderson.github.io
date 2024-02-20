import React from 'react';
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

const MiddleImage = ({img, title1, title2, desc1, desc2, width, height, shadeName = 'Shade1'}) => {
  const borderColorClass = getRandomColorClass(shadeName);

  return (
    <div className='col-span-9 text-center pb-4'>
      <div className='grid w-full grid-cols-9 gap-4 my-8'>

        <div className='col-span-2 flex flex-col items-start justify-center'>
            <h2 className='text-primaryColor font-bold mx-auto py-8'>{title1}</h2>
            <TextFormat className='dark:text-light mx-auto' text={desc1} />
        </div>

        <div className='col-span-5 flex flex-col items-start justify-center'>
            <Image src={img} className={`border-4 border-solid ${borderColorClass} p-2`} 
            width={width || "100%"} // Use provided width or default to "100%"
            height={height || "600"} // Use provided height or default to "500px"
            />
        </div>

        <div className='col-span-2 flex flex-col items-start justify-center'>
            <h2 className='text-primaryColor font-bold mx-auto py-8'>{title2}</h2>
            <TextFormat className='dark:text-light mx-auto' text={desc2} />
        </div>
      </div>
    </div>
  );
};

export default MiddleImage;
