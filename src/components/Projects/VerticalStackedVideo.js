import React from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

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

const VerticalStackedVideo = ({ videoUrl, title, desc }) => {
  const borderColorClass = getRandomColorClass();

  return (
    <div className='col-span-9 text-center pb-4'>
      <div className='grid w-full grid-cols-9 gap-4 px-8 my-8'>
        <div className={`col-span-9 flex flex-col items-center justify-center border-4 border-solid ${borderColorClass} p-2`}>
          <ReactPlayer
            url={videoUrl}
            config={{ youtube: { playerVars: { showinfo: 1 } } }}
            controls={true}
            playing={false}
            volume={0.0}
            width="1200px"
            height="500px"
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

export default VerticalStackedVideo;
