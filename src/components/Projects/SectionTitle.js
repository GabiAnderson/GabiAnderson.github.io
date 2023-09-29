import React from 'react';
import AnimatedText from '../../animations/AnimatedText';

const SectionTitle = ({sectionTitle, sectionDescription}) => {
  return (
    <div className='col-span-9 text-center pb-4'>
      <AnimatedText text={sectionTitle} className='text-primary'/>
      <p className='text-accentpink font-bold text-lg'>{sectionDescription}</p>
      </div>
  );
};

export default SectionTitle;
