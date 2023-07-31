import React, {useRef} from 'react'
import { motion, useScroll } from 'framer-motion'
import LineIcon from '@/components/About/LineIcon'

const Details = ({ type, time, place, info, placeColor }) => {
    const ref = useRef(null);

    const formatParagraph = (paragraph) => {
        // Use a regular expression to detect portions of the text wrapped with double asterisks.
        // Replace the double asterisks with <strong> tags to make the text bold.
        return paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      };
  
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between'>
          <LineIcon reference={ref} />
    
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-dark/75'>
              {time} |{" "}
              <span style={{ color: placeColor }}>{place}</span>
            </span>
            {info.map((paragraph, index) => (
                <p
                key={index}
                className='font-medium w-full mb-4'
                dangerouslySetInnerHTML={{ __html: formatParagraph(paragraph) }}
                />
            ))}
          </motion.div>
        </li>
    );
};

const CertificationDetails = ({ course, dateTaken, placeTaken, info, placeColor }) => {
    const ref = useRef(null);
  
    return (
      <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto'>
        <LineIcon reference={ref} />
  
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
            <h3 style={{ fontSize: '1.25rem' }} className='capitalize font-bold'>
                {course}
            </h3>
            <span className='capitalize font-medium text-dark/75'>
                {dateTaken} | <span style={{ color: placeColor }}>{placeTaken}</span>
            </span>
            <p className='font-medium w-full mb-4'>{info}</p>
        </motion.div>
      </li>
    );
};
  
const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center text-primary'>
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top'
                style={{scaleY: scrollYProgress}}/>

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        type="Honors BS in Computer Science with an Entertainment Arts & Engineering Emphasis & Mathematical Minor"
                        time="Sep 2018 - May 2023"
                        place="University of Utah"
                        info={["**Computer Science:** Foundations of CS, Introduction Scientific Computation, Object-Oriented Programming, Discrete Structures, Algorithims & Data Structures, Computer Graphics, Algorithms, Advanced Algorithms, Computer Systems, Artifical Intelligence, Computer Organization, Mobile App Programming, Human-Computer Interaction",
                                "**Entertainment Arts and Engineering:** Introduction to Design Thinking, Digital Content Creation, Asset Pipeline, Introduction to Game Design, Alternative Game Development, Traditional Game Development, Capstone 1 & 2",
                                "**Mathematics:** Linear Algebra, Calculus 1-3, Applied Statistics, Foundations of Analysis, Introduction to Number Theory, Engineering Probability & Statistics,  "]}
                        placeColor="#CC0000"
                    />
                    <CertificationDetails
                        course='Certification Prep: Unity Certified Associate Game Developer Audio and Effects'
                        dateTaken='April 2023'
                        placeTaken='LinkedIn Learning'
                        info='This is some information about the certification course.'
                        placeColor='#0072b1' // Replace with your desired color value
                    />
                    <CertificationDetails
                        course='C++ Programming: Essential Techniques and Best Practices'
                        dateTaken='April 2023'
                        placeTaken='LinkedIn Learning'
                        info='This is some information about the certification course.'
                        placeColor='#0072b1' // Replace with your desired color value
                    />
                    <CertificationDetails
                        course='UX Design for Developers'
                        dateTaken='April 2023'
                        placeTaken='LinkedIn Learning'
                        info='This is some information about the certification course.'
                        placeColor='#0072b1' // Replace with your desired color value
                    />
                    <CertificationDetails
                        course='User Experience for Design'
                        dateTaken='April 2023'
                        placeTaken='LinkedIn Learning'
                        info='This is some information about the certification course.'
                        placeColor='#0072b1' // Replace with your desired color value
                    />
                    <CertificationDetails
                        course='Test Automation Foundations'
                        dateTaken='February 2023'
                        placeTaken='LinkedIn Learning'
                        info='This is some information about the certification course.'
                        placeColor='#0072b1' // Replace with your desired color value
                    />
                    <CertificationDetails
                        course='Learning Python'
                        dateTaken='February 2023'
                        placeTaken='LinkedIn Learning'
                        info='This is some information about the certification course.'
                        placeColor='#0072b1' // Replace with your desired color value
                    />

                </ul>
            </div>
        </div>
    )
}

export default Education