import React from 'react';
import Image from 'next/image';

const LeftImage = ({ image, title, description }) => {
  return (
    <div className="left-image-container">
      <div className="left-image">
        <Image src={image} alt={title} />
      </div>
      <div className="right-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <style jsx>{`
        .left-image-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
        }

        .left-image {
          flex: 1;
        }

        img {
          max-width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease-in-out; /* Add animation to the image */
        }

        .left-image:hover img {
          transform: scale(1.05); /* Scale up the image on hover */
        }

        .right-content {
          flex: 2;
          padding-left: 20px;
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; /* Add animations to text content */
        }

        .left-image-container:hover .right-content {
          opacity: 0.8; /* Reduce opacity on hover */
          transform: translateX(10px); /* Slide text content to the right on hover */
        }

        h2 {
          font-size: 24px;
          margin-bottom: 10px;
          transition: color 0.3s ease-in-out; /* Add color transition to title */
        }

        .left-image-container:hover h2 {
          color: #e455ae; /* Change text color on hover */
        }

        p {
          font-size: 16px;
          transition: color 0.3s ease-in-out; /* Add color transition to description */
        }

        .left-image-container:hover p {
          color: #666; /* Change text color on hover */
        }
      `}</style>
    </div>
  );
};

export default LeftImage;
