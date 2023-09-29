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

const VerticalStackedImage = ({ img, title, desc }) => {
  const borderColorClass = getRandomColorClass();

  return (
    <div className='col-span-9 text-center pb-4'>
      <div className='grid w-full grid-cols-9 gap-4 px-8 my-8'>
        {/* Image */}
        <div className='col-span-9 flex flex-col items-center justify-center'>
          <Image
            src={img}
            className={`border-4 border-solid ${borderColorClass} p-2`}
            width={900} // Adjust the width as needed
            height={300} // Adjust the height as needed
          />
        </div>

        {/* Title */}
        <div className='col-span-9 flex flex-col items-center justify-center'>
          <h2 className='text-primary font-bold mx-auto pb-2'>{title}</h2>
        </div>

        {/* Description */}
        <div className='col-span-9 flex flex-col items-center justify-center'>
          <p className='dark:text-light mx-auto'>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default VerticalStackedImage;
