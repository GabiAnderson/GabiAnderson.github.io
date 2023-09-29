import React from 'react';
import Image from 'next/image';
import AnimatedTextTypeInView from '../../animations/AnimatedTextTypeInView';

const LeftHandImageBox = ({ sections }) => {
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
                <Image src={section.image} cover style={{ maxWidth: '100%' }} />
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
                <span className='mb-4 text-lg font-bold uppercase text-accentgreen/75'>
                  <AnimatedTextTypeInView text={section.title} delay={100} />
                </span>
              </div>
              <div className="section-content">
                <p className='text-justify'>{section.description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default LeftHandImageBox;
