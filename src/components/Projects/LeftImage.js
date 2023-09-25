import React from 'react';
import Image from 'next/image';
import AnimatedText from '../Common/AnimatedText';

const styles = {
  leftImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
  },
  leftImage: {
    flex: '1',
  },
  leftImageImg: {
    maxWidth: '180%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.3s ease-in-out',
  },
  leftImageHover: {
    transform: 'scale(1.05)',
  },
  rightContent: {
    flex: '2',
    paddingLeft: '20px',
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  },
  rightContentHover: {
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

const LeftImage = ({ sectionTitle, image, title, description }) => {
  return (
    <div className='col-span-9 text-center pb-4'>
      <AnimatedText text={sectionTitle} className='text-primary' />
      <p className='text-accentpink font-bold text-lg'>Learn more below</p>
      <div style={styles.leftImageContainer}>
        <div style={styles.leftImage}>
          <Image
            src={image}
            alt={title}
            style={{ ...styles.leftImageImg, ...(styles.leftImageHoverHover ? styles.leftImageHover : {}) }}
          />
        </div>
        <div style={styles.rightContent}>
          <h2 style={{ ...styles.h2, ...(styles.h2Hover ? styles.h2Hover : {}) }}>{title}</h2>
          <p style={{ ...styles.p, ...(styles.pHover ? styles.pHover : {}) }}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftImage;
