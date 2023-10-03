import React from 'react';
import AnimatedText from '../../animations/AnimatedText';

const SectionTitle = ({sectionTitle, sectionDescription}) => {
  return (
    <div className='col-span-9 text-center pb-8 mt-8'>
      <AnimatedText text={sectionTitle} className='text-secondaryColor'/>
      <p className='text-tertiaryColor font-bold text-lg'>{sectionDescription}</p>
    </div>
  );
};

export default SectionTitle;
