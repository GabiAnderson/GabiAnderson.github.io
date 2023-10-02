// See Bottom of code for different ways to call this

import React from 'react';
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

const DoubleColumn = ({ img1, img2, title1, title2, desc1, desc2, width1, height1, width2, height2 }) => {
  const borderColorClass1 = getRandomColorClass();
  const borderColorClass2 = getRandomColorClass();

  return (
    <div className='col-span-8 text-center pb-4'>
      <div className='grid w-full grid-cols-8 gap-8 px-8 my-16'>
        <div className='col-span-4 flex flex-col items-start justify-center'>
          <Image
            src={img1}
            className={`border-4 border-solid ${borderColorClass1} p-2 min-max-image`}
            width={width1 || "900"} // Use provided width or default to "100%"
            height={height1 || "300"} // Use provided height or default to "500px"
          />
          <h2 className='text-primary font-bold mx-auto py-8'>{title1}</h2>
          <p className='dark:text-light mx-auto'>{desc1}</p>
        </div>

        <div className='col-span-4 flex flex-col items-start justify-center'>
          <Image
            src={img2}
            className={`w-full h-auto border-4 border-solid ${borderColorClass2} p-2 min-max-image`}
            width={width2 || "900"} // Use provided width or default to "100%"
            height={height2 || "300"} // Use provided height or default to "500px"
          />
          <h2 className='text-primary font-bold mx-auto py-8'>{title2}</h2>
          <p className='dark:text-light mx-auto'>{desc2}</p>
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