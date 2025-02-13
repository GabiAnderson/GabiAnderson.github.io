import React from 'react';
import TextFormat from '../Common/TextFormat';

const MiddleText = ({ title, desc }) => {
  return (
    <div className='col-span-9 text-center pb-4'>
      <div className='grid w-full grid-cols-9 gap-4 my-6'>
        <div className='col-span-1 flex flex-col items-start justify-center'></div>

        <div className='col-span-7 flex flex-col items-start justify-center'>
          {title && <h2 className='text-primaryColor font-bold mx-auto py-8'>{title}</h2>}
          {desc && <TextFormat className='dark:text-light mx-auto' text={desc} />}
        </div>

        <div className='col-span-1 flex flex-col items-start justify-center'></div>
      </div>
    </div>
  );
};

export default MiddleText;
