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

const DoubleColumn = ({img1, img2,  title1, title2, desc1, desc2 }) => {
  const borderColorClass1 = getRandomColorClass();
  const borderColorClass2 = getRandomColorClass();

  return (
    <div className='col-span-8 text-center pb-4'>
      <div className='grid w-full grid-cols-8 gap-8 px-8 my-16'>
        <div className='col-span-4 flex flex-col items-start justify-center'>
            <Image src={img1} className={`border-4 border-solid ${borderColorClass1} p-2`} />
            <h2 className='text-primary font-bold mx-auto py-8'>{title1}</h2>
            <p className='dark:text-light mx-auto'>{desc1}</p>
        </div>

        <div className='col-span-4 flex flex-col items-start justify-center'>
            <Image src={img2} className={`border-4 border-solid ${borderColorClass2} p-2`} />
            <h2 className='text-primary font-bold mx-auto py-8'>{title2}</h2>
            <p className='dark:text-light mx-auto'>{desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default DoubleColumn;
