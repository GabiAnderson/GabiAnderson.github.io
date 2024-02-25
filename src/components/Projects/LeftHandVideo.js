import React, { useRef, useEffect, useState } from 'react';
import AnimatedTextTypeInView from '../../animations/AnimatedTextTypeInView';
import dynamic from 'next/dynamic';
import TextFormat from '../Common/TextFormat';

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const colorShades = {
  Shade1: ["border-primaryColorShade1", "border-secondaryColorShade1", "border-tertiaryColorShade1", "border-secondaryTertiaryColorShade1"],
  Shade2: ["border-primaryColorShade2", "border-secondaryColorShade2", "border-tertiaryColorShade2", "border-secondaryTertiaryColorShade2"],
  Shade3: ["border-primaryColorShade3", "border-secondaryColorShade3", "border-tertiaryColorShade3", "border-secondaryTertiaryColorShade3"],
  Shade4: ["border-primaryColorShade4", "border-secondaryColorShade4", "border-tertiaryColorShade4", "border-secondaryTertiaryColorShade4"],
};

function getRandomColorClass(shadeName) {
  const shades = colorShades[shadeName];
  if (!shades) return ""; // Return an empty string if shadeName is not valid
  const randomIndex = Math.floor(Math.random() * shades.length);
  return shades[randomIndex];
}

function LeftHandVideo({ videoUrl, title, desc, shadeName = 'Shade1' }) {
  const [playerWidth, setPlayerWidth] = useState(null);
  const [playerHeight, setPlayerHeight] = useState(null);
  const playerRef = useRef(null);
  const borderColorClass = getRandomColorClass(shadeName);

  useEffect(() => {
    const handleResize = () => {
      if (playerRef.current) {
        const width = playerRef.current.offsetWidth;
        const aspectRatio = 16 / 9; // Assuming 16:9 aspect ratio
        const adjustedWidth = width*0.97;
        setPlayerWidth(adjustedWidth);
        setPlayerHeight(width / aspectRatio);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Call handleResize once initially to set the initial player width and height
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='col-span-8 text-center pb-4'>
      <div className='grid w-full grid-cols-8 gap-8 my-8 lg:my-4'>
        <div ref={playerRef} className={`col-span-6 flex flex-col items-center justify-center border-8 border-solid ${borderColorClass} p-2 sm:p-0 lg:border-4 
        sm:border-2 sm:col-span-4`}>
          <div style={{ width: playerWidth, height: playerHeight}}>
            <ReactPlayer
              url={videoUrl}
              config={{ youtube: { playerVars: { showinfo: 1 } } }}
              controls={true}
              playing={false}
              volume={0.0}
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div className='col-span-2 flex flex-col items-start justify-center sm:col-span-4'>
          <div className='text-primaryColor font-bold mx-auto py-8 lg:py-4 sm:py-0 sm:mx-0'>
            <AnimatedTextTypeInView text={title} delay={100} className='text-3xl xl:text-xl lg:text-lg sm:text-sm' />
          </div>
          <TextFormat className='dark:text-light mx-auto text-xl xl:text-mmd lg:text-sm sm:text-xxs sm:mx-0' text={desc} />
        </div>
      </div>
    </div>
  );
}

export default LeftHandVideo;
