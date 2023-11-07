import React from 'react';
import TextFormat from '../Common/TextFormat';

const MiddleText = ({title, desc}) => {
  return (
    <div className='col-span-9 text-center pb-4'>
      <div className='grid w-full grid-cols-9 gap-4 px-16 my-8'>

        <div className='col-span-2 flex flex-col items-start justify-center'>
        </div>

        <div className='col-span-5 flex flex-col items-start justify-center'>
            <h2 className='text-primaryColor font-bold mx-auto py-8'>{title}</h2>
            <TextFormat className='dark:text-light mx-auto' text={desc} />
        </div>

        <div className='col-span-2 flex flex-col items-start justify-center'>
        </div>
      </div>
    </div>
  );
};

export default MiddleText;
