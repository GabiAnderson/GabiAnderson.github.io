import React from 'react';
import AnimatedTextType from '../../animations/AnimatedTextType';
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

function LeftHandVideo({ videoUrl, title, desc }) {
  const borderColorClass = getRandomColorClass();

  return (
    <div className='col-span-8 text-center pb-4'>
      <div className='grid w-full grid-cols-8 gap-8 px-8 my-16'>
        <div className={`col-span-6 flex flex-col items-start justify-center border-4 border-solid ${borderColorClass} p-2`}>
          <ReactPlayer
            url={videoUrl}
            config={{ youtube: { playerVars: { showinfo: 1 } } }}
            controls={true}
            playing={false}
            volume={0.0}
            width="100%"
            height="500px"
          />
        </div>

        <div className='col-span-2 flex flex-col items-start justify-center'>
          <div className='text-primary font-bold mx-auto py-8'>
            <AnimatedTextType text={title} delay={100} />
          </div>
          <p className='dark:text-light mx-auto'>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default LeftHandVideo;
