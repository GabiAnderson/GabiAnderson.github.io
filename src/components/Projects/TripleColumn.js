import React from 'react';
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

const TripleColumn = ({img1, img2, img3, title1, title2, title3, desc1, desc2, desc3, height1, width1, height2, width2, height3, width3, shadeName = 'Shade1' }) => {
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
    <div className='col-span-9 text-center pb-4'>
      <div className='grid w-full grid-cols-9 gap-8 px-8 my-8'>

        <div className='col-span-3 flex flex-col items-start justify-center'>
            <Image src={img1} className={`border-4 border-solid ${borderColorClass1} p-2`}
            width={width1 || "900"} // Use provided width or default to "100%"
            height={height1 || "300"} // Use provided height or default to "500px"
            />
            <h2 className='text-primaryColor font-bold mx-auto py-8'>{title1}</h2>
            <p className='dark:text-light mx-auto'>{desc1}</p>
        </div>

        <div className='col-span-3 flex flex-col items-start justify-center'>
            <Image src={img2} className={`border-4 border-solid ${borderColorClass2} p-2`} 
            width={width2 || "900"} // Use provided width or default to "100%"
            height={height2 || "300"} // Use provided height or default to "500px"
            />
            <h2 className='text-primaryColor font-bold mx-auto py-8'>{title2}</h2>
            <p className='dark:text-light mx-auto'>{desc2}</p>
        </div>

        <div className='col-span-3 flex flex-col items-start justify-center'>
            <Image src={img3} className={`border-4 border-solid ${borderColorClass3} p-2`} 
            width={width3 || "900"} // Use provided width or default to "100%"
            height={height3 || "300"} // Use provided height or default to "500px"
            />
            <h2 className='text-primaryColor font-bold mx-auto py-8'>{title3}</h2>
            <p className='dark:text-light mx-auto'>{desc3}</p>
        </div>
      </div>
    </div>
  );
};

export default TripleColumn;
