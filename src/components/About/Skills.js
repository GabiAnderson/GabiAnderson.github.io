import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
    // Define your preferred colors
    const preferredColors = ["#1AC5B0", "#e455ae"];
    // Other colors that will be mixed with preferred colors
    const otherColors = ["#37ebf3", "#710000"];
    // Function to get a random color from an array
    const getRandomColor = (colorArray) => colorArray[Math.floor(Math.random() * colorArray.length)];
    // Function to get a random color with higher probability for preferred colors
    const getRandomMixedColor = () => {
        // Set the probability of choosing a preferred color (e.g., 60%)
        const preferredColorProbability = 0.6;
        // Randomly choose between preferredColors and otherColors based on the probability
        return Math.random() < preferredColorProbability
            ? getRandomColor(preferredColors)
            : getRandomColor(otherColors);
    };

    const randomColor = getRandomMixedColor();

    return (
        <motion.div className='flex items-end justify-center rounded-full 
            font-semibold text-light 
            py-3 px-6 shadow-dark cursor-pointer absolute bg-dark dark:bg-light dark:text-dark
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
            xs:text-dark xs:dark:text-light xs:font-bold'
            //style={{ background: randomColor }}
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
};

// General Software Development Skills Component
const SoftwareDevelopmentSkills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-8 w-full text-center text-secondaryColor sm:!text-3xl md:!text-5xl lg:!text-7xl pb-16 md:pb-6'>
                Software Development Skills
            </h2>
            <div className='w-full h-[70vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
                lg:h-[60vh] md:h-[40vh] sm:h-[40vh] xs:h-[20vh] 
                lg:bg-circularLightLarge lg:dark:bg-circularDarkLarge
                md:bg-circularLightMedium md:dark:bg-circularDarkMedium
                sm:bg-circularLightSmall sm:dark:bg-circularDarkSmall'>
                <motion.div className='flex items-end justify-center rounded-full 
                    font-semibold bg-primaryColor text-light 
                    p-8 shadow-dark cursor-pointer
                    lg:p-6 md:p-4 sm:p-2 xs:text-xs'
                    whileHover={{ scale: 1.05 }}>
                    Software Development
                </motion.div>

                <Skill name="Test Automation" x="-34vw" y="5vw" />
                <Skill name="Release Management" x="-24vw" y="-11vw" />
                <Skill name="Version Control" x="36vw" y="5vw" />
                <Skill name="CI/CD" x="18vw" y="14vw" />
                <Skill name="Quality Assurance" x="-15vw" y="-5vw" />
                <Skill name="Debugging" x="28vw" y="-4vw" />
                <Skill name="Cross-Platform Development" x="25vw" y="-10vw" />
                <Skill name="DevOps" x="0vw" y="-12vw" />
                <Skill name="API Integration" x="-22vw" y="11vw" />
                <Skill name="UI/UX Design Principles" x="12vw" y="8vw" />
            </div>
        </>
    );
};

// General Work Skills Component
const WorkSkills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-8 w-full text-center text-tertiaryColor sm:!text-3xl md:!text-5xl lg:!text-7xl pb-16 md:pb-6'>
                General Work Skills
            </h2>
            <div className='w-full h-[70vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
                lg:h-[60vh] md:h-[40vh] sm:h-[40vh] xs:h-[20vh] 
                lg:bg-circularLightLarge lg:dark:bg-circularDarkLarge
                md:bg-circularLightMedium md:dark:bg-circularDarkMedium
                sm:bg-circularLightSmall sm:dark:bg-circularDarkSmall'>
                <motion.div className='flex items-end justify-center rounded-full 
                    font-semibold bg-secondaryTertiaryColor text-light 
                    p-8 shadow-dark cursor-pointer
                    lg:p-6 md:p-4 sm:p-2 xs:text-xs'
                    whileHover={{ scale: 1.05 }}>
                    General Work Skills
                </motion.div>

                <Skill name="Task Management" x="-30vw" y="5vw" />
                <Skill name="Agile Development" x="-20vw" y="-8vw" />
                <Skill name="Project Planning" x="22vw" y="4vw" />
                <Skill name="Team Leadership" x="0vw" y="10vw" />
                <Skill name="Communication" x="25vw" y="-12vw" />
                <Skill name="Problem Solving" x="32vw" y="-6vw" />
                <Skill name="Collaboration" x="-12vw" y="-16vw" />
                <Skill name="Attention to Detail" x="30vw" y="12vw" />
                <Skill name="Critical Thinking" x="11vw" y="-17vw" />
            </div>
        </>
    );
};

export { SoftwareDevelopmentSkills, WorkSkills };