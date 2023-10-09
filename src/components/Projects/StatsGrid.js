import React from 'react';
import { GithubIcon } from '../Common/Icons';

const StatsGrid = ({ pairs }) => {
  if (!pairs || !Array.isArray(pairs)) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-x-8">
        {pairs.map((pair, index) => (
          <div
            key={index}
            className="mb-4 flex p-4 rounded bg-primaryColor/30 hover:bg-tertiaryColor/30 transition duration-300 ease-in-out"
          >
            <div className="font-bold pr-2 text-primaryColor mr-8">{pair[0]}</div>
            <div className="ml-auto">
              {pair[1].map((item, itemIndex) => (
                <div key={itemIndex} className="text-right text-secondaryDark dark:text-secondaryLight">
                  <span className="mr-2">
                    {item.icon || <GithubIcon />} {/* Use the custom icon or a default icon */}
                  </span>
                  {item.text} {/* Display the text */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
