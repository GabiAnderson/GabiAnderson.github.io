import React from 'react';
import dynamic from 'next/dynamic';

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

const VerticalStackedVideo = ({ videoUrl, title, desc, width, height, shadeName = 'Shade1' }) => {
  const borderColorClass = getRandomColorClass(shadeName);

  return (
    <div className='col-span-9 text-center pb-4'>
      <div className='grid w-full grid-cols-9 gap-4 my-8'>
        <div className={`col-span-9 flex flex-col items-center justify-center border-4 border-solid ${borderColorClass} p-2`}>
          <ReactPlayer
            url={videoUrl}
            config={{ youtube: { playerVars: { showinfo: 1 } } }}
            controls={true}
            playing={false}
            volume={0.0}
            width={width || "1200px"} // Use provided width or default to "100%"
            height={height || "500px"} // Use provided height or default to "500px"
          />
        </div>

        {/* Title */}
        <div className='col-span-9 flex flex-col items-center justify-center'>
          <h2 className='text-primaryColor font-bold mx-auto pb-2'>{title}</h2>
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
