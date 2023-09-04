import React from 'react';
import Image from 'next/image';
import AnimatedText from '../Common/AnimatedText';
import AnimatedTextType from '../Common/AnimatedTextType';

const LeftHandImageBox = ({ sectionTitle, sections }) => {
  return (
    <div className='col-span-9 text-center pb-4'>
      <AnimatedText text={sectionTitle} className='text-primary'/>

        {sections.map((section, index) => (
          <section className="section-container" key={index}>
            <div className="section-content">
              <div className="left-column">
                <div className="section-image">
                  <Image src={section.image} cover style={{ maxWidth: '100%' }} />
                </div>
              </div>
              <div className="right-column">
                <div className="section-header">
                  <span className='mb-4 text-lg font-bold uppercase text-accentgreen/75'>
                    <AnimatedTextType text={section.title} delay={100} />
                  </span>
                </div>
                <div className="section-content">
                  <p>{section.description}</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        <style jsx>{`
            .section-container {
            display: flex;
            margin: 20px; /* Adjust margin to control the overall size */
            border: 1px solid #e0e0e0;
            border-radius: 10px;
            padding: 20px; /* Adjust padding to control the inner size */
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            }

            .section-content {
            display: flex;
            flex-direction: row;
            align-items: flex-start; /* Align the content with the top of the image */
            }

            .left-column {
            flex: 1;
            text-align: center;
            background-color: #f7f7f7;
            position: relative;
            overflow: hidden;
            }

            .right-column {
            flex: 2; /* Adjust the flex value to control the size ratio */
            padding: 20px;
            text-align: center; /* Center the content horizontally */
            }

            .section-header {
            padding: 10px;
            }

            h3 {
            margin-top: 10px;
            }

            p {
            text-align: justify;
            }
        `}</style>
    </div>
  );
};

export default LeftHandImageBox;
