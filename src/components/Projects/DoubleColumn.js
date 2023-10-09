// See Bottom of code for different ways to call this

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

const DoubleColumn = ({ img1, img2, title1, title2, desc1, desc2, width1, height1, width2, height2, shadeName = 'Shade1' }) => {
  const borderColorClass1 = getRandomColorClass(shadeName);
  let borderColorClass2 = getRandomColorClass(shadeName);
  // Ensure borderColorClass2 is different from borderColorClass1
  while (borderColorClass2 === borderColorClass1) {
    borderColorClass2 = getRandomColorClass(shadeName);
  }

  return (
    <div className='col-span-8 text-center pb-2'>
      <div className='grid w-full grid-cols-8 gap-4 px-8 my-2'>
        <div className='col-span-4 flex flex-col items-start justify-center'>
          <Image
            src={img1}
            className={`border-4 border-solid ${borderColorClass1} p-2 min-max-image`}
            width={width1 || "900"} // Use provided width or default to "100%"
            height={height1 || "300"} // Use provided height or default to "500px"
          />
          <h2 className='text-primaryColor font-bold mx-auto py-8'>{title1}</h2>
          <TextFormat className='dark:text-light mx-auto' text={desc1} />
        </div>

        <div className='col-span-4 flex flex-col items-start justify-center'>
          <Image
            src={img2}
            className={`w-full h-auto border-4 border-solid ${borderColorClass2} p-2 min-max-image`}
            width={width2 || "900"} // Use provided width or default to "100%"
            height={height2 || "300"} // Use provided height or default to "500px"
          />
          <h2 className='text-primaryColor font-bold mx-auto py-8'>{title2}</h2>
          <TextFormat className='dark:text-light mx-auto' text={desc2} />
        </div>
      </div>
    </div>
  );
};


export default DoubleColumn;


/* Without Specifying Width and Height (Default Behavior):
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