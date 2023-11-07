import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import TextFormat from '../Common/TextFormat';

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoHeader = ({ projectName, role, desc, link, videoUrl, linkText, secondLink, link2, link2Text }) => {
  const linkContent = linkText ? linkText : 'Visit the Project';
  const link2Content = link2Text ? link2Text : "Documentation";

  return (
    <div className='grid w-full grid-cols-8 gap-16 px-8 my-8'>
      <div className='col-span-6 relative h-max rounded-2xl border-2 border-solid border-secondaryColor bg-light p-8 dark:bg-dark'>
        <ReactPlayer
          url={videoUrl}
          config={{ youtube: { playerVars: { showinfo: 1 } } }}
          controls={true}
          playing={true}
          volume={0.2}
          width="100%"
          height="800px"
        />
      </div>
      <div className={`col-span-2 flex flex-col items-${secondLink ? 'start' : 'center'} justify-center`}>
        <h1 className="text-3xl font-bold text-primaryColor mb-2">{projectName}</h1>
        <h2 className="text-xl mb-4 dark:text-light">{role}</h2>
        <TextFormat className="text-sm text-secondaryDark dark:text-secondaryLight mb-6" text={desc}/>
        <div className="flex flex-column">
          <Link href={link} className='rounded-lg bg-tertiaryColor text-light p-2 px-6 text-lg font-semibold hover:bg-secondaryTertiaryColor mr-4'>
            {linkContent}
          </Link>
          {secondLink &&
            <Link href={link2} className='rounded-lg bg-tertiaryColor text-light p-2 px-6 text-lg font-semibold hover:bg-secondaryTertiaryColor'>
              {link2Text}
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default VideoHeader;
