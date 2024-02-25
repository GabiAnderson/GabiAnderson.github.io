import React from 'react';
import Link from 'next/link';
import Layout from '../Common/Layout';
import Image from 'next/image';
import TextFormat from '../Common/TextFormat';

function Stats({ pairs }) {
  if (!pairs || !Array.isArray(pairs)) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-x-4 lg:grid-cols-2 lg:gap-x-2">
        {pairs.map((pair, index) => (
          <div
            key={index}
            className="mb-4 flex p-2 rounded bg-primaryColor/30 hover:bg-tertiaryColor/30 transition duration-300 ease-in-out md:flex-col md:mb-2"
          >
            <div className="font-bold text-primaryColor text-xl lg:pr-4 md:pr-0 sm:text-sm md:text-center lg:text-lg">{pair[0]}</div>
            <div className="ml-auto md:ml-0">
              {pair[1].map((item, itemIndex) => (
                <div key={itemIndex} className="text-right text-secondaryDark dark:text-secondaryLight text-lg lg:text-md sm:text-xs md:text-center">{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ImageHeaderStats = ({ projectName, about, desc, link, img, linkText, pairs }) => {
  // Conditionally set the link text based on the presence of linkText prop
  const linkContent = linkText ? linkText : 'Visit the Project';
  return (
    <div>
      <div className='grid w-full grid-cols-8 gap-16 my-8 lg:gap-8 md:gap-4 sm:my-2'>
        <div className='col-span-6 relative h-max justify-center rounded-2xl border-2 border-solid border-secondaryColor bg-light p-8 dark:bg-dark
          md:border-1 md:rounded-lg md:col-span-5 flex items-center'> {/* Updated this line */}
          <Image src={img} alt={projectName} className='w-full h-auto rounded-2xl' 
          priority
          sizes="(max-width: 768px) 100vs, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className='col-span-2 flex flex-col items-start justify-center md:col-span-3 sm:items-center'>
          <h1 className="text-3xl font-bold text-primaryColor mb-2 lg:text-xl md:text-md sm:text-sm">{projectName}</h1>
          <h2 className="text-xl mb-4 dark:text-light lg:text-md md:text-sm md:mb-1 sm:text-xs">{about}</h2>
          <p className="text-sm text-secondaryDark dark:text-secondaryLight mb-6 sm:text-xs md:mb-2 sm:hidden">{desc}</p>
          <Link href={link} className='rounded-lg bg-tertiaryColor text-center text-light p-2 px-6 text-lg font-semibold hover:bg-secondaryTertiaryColor lg:text-md md:text-xxs sm:px-1 sm:p-0.25 md:px-2 md:p-0.5'>
            {linkContent}
          </Link>
        </div>
      </div>
      <p className="hidden text-secondaryDark dark:text-secondaryLight text-xs sm:flex sm:mb-2">{desc}</p>
      <Stats className='flex justify-center' pairs={pairs} />
    </div>
  );
};

export default ImageHeaderStats;
