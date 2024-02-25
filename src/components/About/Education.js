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
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
          <LineIcon reference={ref} />
    
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-secondaryDark dark:text-secondaryLight xs:text-sm'>
              {time} |{" "}
              <span style={{ color: placeColor }}>{place}</span>
            </span>
            {info.map((paragraph, index) => (
                <p
                key={index}
                className='font-medium w-full mb-4 text-tertiaryDark dark:text:tertiaryLight md:text-sm'
                dangerouslySetInnerHTML={{ __html: formatParagraph(paragraph) }}
                />
            ))}
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
        <div className='my-8'>
            <h2 className='font-bold text-8xl mb-16 w-full text-center text-secondaryTertiaryColor sm:!text-3xl md:!text-5xl lg:!text-7xl'>
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                style={{scaleY: scrollYProgress}}/>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="Honors BS in Computer Science with an Entertainment Arts & Engineering Emphasis & Mathematical Minor"
                        time="Sep 2018 - May 2023"
                        place="University of Utah"
                        info={["**Computer Science:** Foundations of CS, Introduction Scientific Computation, Object-Oriented Programming, Discrete Structures, Algorithims & Data Structures, Computer Graphics, Algorithms, Advanced Algorithms, Computer Systems, Artifical Intelligence, Computer Organization, Mobile App Programming, Human-Computer Interaction",
                                "**Entertainment Arts and Engineering:** Introduction to Design Thinking, Digital Content Creation, Asset Pipeline, Introduction to Game Design, Alternative Game Development, Traditional Game Development, Capstone 1 & 2",
                                "**Mathematics:** Linear Algebra, Calculus 1-3, Applied Statistics, Foundations of Analysis, Introduction to Number Theory, Engineering Probability & Statistics,  "]}
                        placeColor="#CC0000"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education