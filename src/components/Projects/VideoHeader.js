import React from 'react';
import Link from 'next/link';
import Layout from '../Common/Layout';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoHeader = ({ projectName, role, shortDesc, link, videoUrl }) => {
  return (
      <div className='grid w-full grid-cols-8 gap-16 px-8 my-16'>
        <div className='col-span-6 relative h-max rounded-2xl border-2 border-solid border-primary bg-light p-8 dark:bg-dark'>
          <ReactPlayer
            url={videoUrl}
            config={{ youtube: { playerVars: { showinfo: 1 } } }}
            controls={true}
            playing={true}
            volume={0.2}
            width="100%"
            height="500px"
          />
        </div>
        <div className='col-span-2 flex flex-col items-start justify-center'>
          <h1 className="text-3xl font-bold text-primary mb-2">{projectName}</h1>
          <h2 className="text-xl text-secondary mb-4">{role}</h2>
          <p className="text-sm text-gray-700 mb-6">{shortDesc}</p>
          <Link href={link} className="text-primary text-lg font-semibold hover:underline hover:text-secondary">
            Visit the project
          </Link>
        </div>
      </div>
  );
};

export default VideoHeader;
