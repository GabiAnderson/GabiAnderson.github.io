import React, {useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import LineIcon from '@/components/About/LineIcon'

const CertificationDetails = ({ courseName, dateTaken, placeTaken, info, placeColor }) => {
    const ref = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const formatParagraph = (paragraph) => {
        // Use a regular expression to detect portions of the text wrapped with double asterisks.
        // Replace the double asterisks with <strong> tags to make the text bold.
        return paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    };

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%] md:my-4'>
            <LineIcon reference={ref} />

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl mb-2 md:text-lg'>{courseName}</h3>
                <span className='capitalize font-medium text-secondaryDark dark:text-secondaryLight md:text-sm'>
                    {dateTaken} |{" "}
                    <span style={{ color: placeColor }}>{placeTaken}</span>
                </span>
                <br /> {/* New line */}
                {isExpanded ? (
                    <>
                        <p className='font-medium w-full text-tertiaryDark dark:text:tertiaryLight md:text-sm mt-2'>
                            {info}
                        </p>
                        <button className="text-primaryColor underline md:text-sm mt-2" onClick={toggleExpand}>Hide Description</button>
                    </>
                ) : (
                    <button className="text-primaryColor underline md:text-sm mt-2" onClick={toggleExpand}>Show Description</button>
                )}
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
            <h2 className='font-bold text-8xl mb-16 w-full text-center text-secondaryColor sm:!text-3xl md:!text-5xl lg:!text-7xl'>
                Other Learning
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                style={{scaleY: scrollYProgress}}/>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <CertificationDetails
                        courseName='Certification Prep: Unity Certified Associate Game Developer Audio and Effects'
                        dateTaken='April 2023'
                        placeTaken='LinkedIn Learning'
                        info='Learn how to import audio and trigger playback of 2D and 3D sound, control volume and add audio effects like pitch adjustments
                        with mixers. Review particle systems, tools for generating effects like rain, fog, explosions, fire, and more. Learn how to use the built
                        -in particle effects package and generate systems from scratch, as well as configure particle collisions.'
                        placeColor='#0072b1' // Replace with your desired color value
                    />
                    <CertificationDetails
                        courseName='C++ Essential Training'
                        dateTaken='April 2023'
                        placeTaken='LinkedIn Learning'
                        info='Learn the history and toolchain of C++ before diving into basic syntax, statements and expressions, identifiers, variables, pointers,
                        and references. Cover control flow conditionals, loops, and functions. Dive deeper into data types, operators, and functions before walking
                        through classes and objects. Learn to use templates including the Standard Template Library. Whether a beginner programmer or an advanced one, level up your
                        C++ skills.'
                        placeColor='#0072b1' // Replace with your desired color value
                    />
                    <CertificationDetails
                        courseName='UX Design for Developers'
                        dateTaken='April 2023'
                        placeTaken='LinkedIn Learning'
                        info='Gain an entry point to the principle and process of UX design for typical business apps. Learn what well-designed applications look like, how to
                        leverage cognitive design principles, how to declutter screens, to understand user needs, how to record and analyze user observations, the storyboard
                        creation process and other helpful techniques for the design process.'
                        placeColor='#0072b1' // Replace with your desired color value
                    />
                    <CertificationDetails
                        courseName='User Experience for Web Design'
                        dateTaken='April 2023'
                        placeTaken='LinkedIn Learning'
                        info='Learn how to apply simple interaction design principles to websites to make them behave in the way that users expect and enjoy to help ensure
                        users stay on the site. Covering key things people want from websites, how they search for information, how they read online, and how to structure 
                        content to take advantage of this. Learn how to use graphics to help rather than hinder, how to ingegrate media, and when to consider interactive
                        rather than static content.'
                        placeColor='#0072b1' // Replace with your desired color value
                    />
                    <CertificationDetails
                        courseName='Test Automation Foundations'
                        dateTaken='February 2023'
                        placeTaken='LinkedIn Learning'
                        info='Cover the foundations of test automation, as well as different strategies for implentation. Learn about the testing pyramind, the different and
                        importance of unit, integration, and UI tests, how to create automation strategies, how to select test tools, how to decide what to automate, identify
                        risks and cost of automation, how to impelment test automation, and how to use continous integration.'
                        placeColor='#0072b1' // Replace with your desired color value
                    />
                    <CertificationDetails
                        courseName='Learning Python'
                        dateTaken='February 2023'
                        placeTaken='LinkedIn Learning'
                        info='Learn the basics of Python from syntax to basic programming features like variables, expressions, conditional structures, functions,
                        classes, loops and more. Additionally, get hands-on experience working with reading and writing to files, working with date and time, and internet
                        data formats like JSON, HTML, and XML.'
                        placeColor='#0072b1' // Replace with your desired color value
                    />

                </ul>
            </div>
        </div>
    )
}

export default OtherLearning