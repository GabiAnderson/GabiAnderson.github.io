// See bottom of code for 2 ways to call

import React from 'react';
import Image from 'next/image';
import AnimatedTextTypeInView from '../../animations/AnimatedTextTypeInView';

const LeftHandImageBox = ({ sections, height, width }) => {
  return (
    <div className='col-span-9 text-center pb-4'>
      {sections.map((section, index) => (
        <section
          className="section-container"
          key={index}
          style={{
            display: 'flex',
            margin: '20px',
            border: '1px solid #e0e0e0',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div
            className="section-content"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}
          >
            <div
              className="left-column"
              style={{
                flex: 1,
                textAlign: 'center',
                backgroundColor: '#f7f7f7',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div className="section-image">
                <Image src={section.image}
                width={width || "900"} // Use provided width or default to "100%"
                height={height || "300"} // Use provided height or default to "500px"
                />
              </div>
            </div>
            <div
              className="right-column"
              style={{
                flex: 2,
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <div className="section-header" style={{ padding: '10px' }}>
                <span className='mb-4 text-lg font-bold uppercase text-tertiaryColor'>
                  <AnimatedTextTypeInView text={section.title} delay={100} />
                </span>
              </div>
              <div className="section-content">
                <p className='text-center dark:text-light'>{section.description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default LeftHandImageBox;

/* 
In Line
<LeftHandImageBox
  sections={[
    {
      image: '/path/to/your/image1.jpg', // Replace with your image path
      title: 'Section 1 Title',
      description: 'Description for section 1',
    },
    {
      image: '/path/to/your/image2.jpg', // Replace with your image path
      title: 'Section 2 Title',
      description: 'Description for section 2',
    },
    // Add more sections as needed
  ]}
/>

Variable 
const sectionsData = [
  {
    image: '/path/to/your/image1.jpg', // Replace with your image path
    title: 'Section 1 Title',
    description: 'Description for section 1',
  },
  {
    image: '/path/to/your/image2.jpg', // Replace with your image path
    title: 'Section 2 Title',
    description: 'Description for section 2',
  },
  // Add more sections as needed
];

const YourComponent = () => {
  return (
    <div>
      Call the LeftHandImageBox component and pass the sections prop 
      <LeftHandImageBox sections={sectionsData} />
    </div>
  );
}; */

