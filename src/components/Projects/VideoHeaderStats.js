import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import TextFormat from '../Common/TextFormat';

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function Stats({ pairs }) {
  if (!pairs || !Array.isArray(pairs)) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex justify-center mt-8">
      <div className="grid grid-cols-2 gap-x-4 max-w-lg">
        {pairs.map((pair, index) => (
          <div
            key={index}
            className="mb-4 flex p-2 rounded bg-primaryColor/30 hover:bg-tertiaryColor/30 transition duration-300 ease-in-out"
          >
            <div className="font-bold pr-1 text-primaryColor mr-4">{pair[0]}</div>
            <div className="ml-auto">
              {pair[1].map((item, itemIndex) => (
                <div key={itemIndex} className="text-left text-secondaryDark dark:text-secondaryLight text-sm">{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const VideoHeaderStats = ({ projectName, about, desc, link, videoUrl, linkText, pairs }) => {
  // Conditionally set the link text based on the presence of linkText prop
  const linkContent = linkText ? linkText : 'Visit the Project';

  return (
    <div className='grid w-full grid-cols-8 gap-16 px-8 my-8'>
      <div className='col-span-5 relative h-max rounded-2xl border-2 border-solid border-secondaryColor bg-light p-8 dark:bg-dark'>
        <ReactPlayer
          url={videoUrl}
          config={{ youtube: { playerVars: { showinfo: 1 } } }}
          controls={true}
          playing={true}
          volume={0.2}
          width="100%"
          height="550px"
        />
      </div>
      <div className='col-span-3 flex flex-col'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className="text-3xl font-bold text-primaryColor mb-2">{projectName}</h1>
          <h2 className="text-xl mb-4 dark:text-light">{about}</h2>
          <TextFormat className="text-sm text-secondaryDark dark:text-secondaryLight" text={desc}/>
        </div>
        <div className='mt-auto flex flex-col items-center justify-center'>
          <Link href={link} className='rounded-lg bg-tertiaryColor text-light p-2 px-6 text-lg font-semibold hover:bg-secondaryTertiaryColor'>
            {linkContent}
          </Link>
          <Stats className='flex justify-center' pairs={pairs} />
        </div>
      </div>
    </div>
  );
};

export default VideoHeaderStats;
