import React from 'react';
import Link from 'next/link';
import Layout from '../Common/Layout';
import Image from 'next/image';

const TripleColumn = ({img1, img2, img3, title1, title2, title3, desc1, desc2, desc3}) => {
  return (
      <div className='grid w-full grid-cols-9 gap-8 px-8 my-16'>

        <div className='col-span-3 flex flex-col items-start justify-center'>
            <Image src={img1} className='border-4 border-solid border-accentblue p-2' />
            <h2 className='text-primary font-bold mx-auto py-8'>{title1}</h2>
            <p className='dark:text-light mx-auto'>{desc1}</p>
        </div>

        <div className='col-span-3 flex flex-col items-start justify-center'>
            <Image src={img2} className='border-4 border-solid border-accentblue p-2' />
            <h2 className='text-primary font-bold mx-auto py-8'>{title2}</h2>
            <p className='dark:text-light mx-auto'>{desc2}</p>
        </div>

        <div className='col-span-3 flex flex-col items-start justify-center'>
            <Image src={img3} className='border-4 border-solid border-accentblue p-2' />
            <h2 className='text-primary font-bold mx-auto py-8'>{title3}</h2>
            <p className='dark:text-light mx-auto'>{desc3}</p>
        </div>
      </div>
  );
};

export default TripleColumn;
