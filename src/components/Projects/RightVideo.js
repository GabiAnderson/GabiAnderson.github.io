import React from 'react';
import AnimatedText from '../Common/AnimatedText';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const styles = {
  rightVideoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
  },
  rightVideo: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end', // Adjust this property to control the video's horizontal alignment
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

const RightVideo = ({ sectionTitle, videoUrl, title, description, videoWidth, videoHeight }) => {
  return (
    <div className='col-span-9 text-center pb-4'>
      <AnimatedText text={sectionTitle} className='text-primary' />
      <div style={styles.rightVideoContainer}>
        <div style={styles.leftContent}>
          <h2 style={{ ...styles.h2, ...(styles.h2Hover ? styles.h2Hover : {}) }}>{title}</h2>
          <p style={{ ...styles.p, ...(styles.pHover ? styles.pHover : {}) }}>{description}</p>
        </div>
        <div style={styles.rightVideo}>
          <ReactPlayer
            url={videoUrl}
            width="1000px"
            height="500px"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
};

export default RightVideo;
