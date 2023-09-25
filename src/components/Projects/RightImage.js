import React from 'react';
import Image from 'next/image';
import AnimatedText from '../Common/AnimatedText';

const styles = {
  rightImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
  },
  rightImage: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end', // Align image to the right
  },
  rightImageImg: {
    maxWidth: '180%', // Adjust image width as needed
    maxHeight: '100%', // Ensure image doesn't get cut off
    height: 'auto',
    display: 'block',
    transition: 'transform 0.3s ease-in-out',
  },
  rightImageHover: {
    transform: 'scale(1.05)',
  },
  leftContent: {
    flex: '2',
    paddingLeft: '20px',
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  },
  leftContentHover: {
    opacity: '0.8',
    transform: 'translateX(10px)',
  },
  h2: {
    fontSize: '24px',
    marginBottom: '10px',
    transition: 'color 0.3s ease-in-out',
  },
  h2Hover: {
    color: '#e455ae',
  },
  p: {
    fontSize: '16px',
    transition: 'color 0.3s ease-in-out',
  },
  pHover: {
    color: '#666',
  },
};

const RightImage = ({ sectionTitle, image, title, description }) => {
  return (
    <div className='col-span-9 text-center pb-4'>
      <AnimatedText text={sectionTitle} className='text-primary' />
      <p className='text-accentpink font-bold text-lg'>Learn more below</p>
      <div style={styles.rightImageContainer}>
        <div style={styles.leftContent}>
          <h2 style={{ ...styles.h2, ...(styles.h2Hover ? styles.h2Hover : {}) }}>{title}</h2>
          <p style={{ ...styles.p, ...(styles.pHover ? styles.pHover : {}) }}>{description}</p>
        </div>
        <div style={styles.rightImage}>
          <Image
            src={image}
            alt={title}
            style={{ ...styles.rightImageImg, ...(styles.rightImageHoverHover ? styles.rightImageHover : {}) }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightImage;
