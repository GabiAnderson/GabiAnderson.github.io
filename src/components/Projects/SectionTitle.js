import React from 'react';
import AnimatedText from '../../animations/AnimatedText';
import TextFormat from '../Common/TextFormat';

const SectionTitle = ({sectionTitle, sectionDescription}) => {
  return (
    <div className='col-span-9 text-center pb-8 mt-8'>
      <AnimatedText text={sectionTitle} className='text-secondaryColor dark:text-primaryColor'/>
      <TextFormat className='text-tertiaryColor font-bold text-lg' text={sectionDescription} />
    </div>
  );
};

export default SectionTitle;
