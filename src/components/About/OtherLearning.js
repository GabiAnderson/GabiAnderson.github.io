import React, {useRef} from 'react'
import { motion, useScroll } from 'framer-motion'
import LineIcon from '@/components/About/LineIcon'

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
            <span className='capitalize font-medium text-secondaryDark dark:text-secondaryLight'>
                {dateTaken} | <span style={{ color: placeColor }}>{placeTaken}</span>
            </span>
            <p className='font-medium w-full mb-4 text-tertiayrDark dark:text-tertiaryLight'>{info}</p>
        </motion.div>
      </li>
    );
};
  
const OtherLearning = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-8'>
            <h2 className='font-bold text-8xl mb-16 w-full text-center text-primary'>
                Other Learning
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light'
                style={{scaleY: scrollYProgress}}/>

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
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

export default OtherLearning