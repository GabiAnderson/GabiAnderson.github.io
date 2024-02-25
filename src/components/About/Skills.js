import React from 'react'
import {motion} from 'framer-motion'

    const Skill = ({name, x, y}) => {
        // Define your preferred colors
        const preferredColors = ["#1AC5B0","#e455ae"];
        // Other colors that will be mixed with preferred colors
        const otherColors = ["#37ebf3", "#710000"];
        // Function to get a random color from an array
        const getRandomColor = (colorArray) => colorArray[Math.floor(Math.random() * colorArray.length)];
        // Function to get a random color with higher probability for preferred colors
        const getRandomMixedColor = () => {
        // Set the probability of choosing a preferred color (e.g., 70%)
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
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            whileInView={{ x:x, y:y, transition: {duration:1.5} }}
            // unsure if this really matters
            viewport={{ once: true }}
            >
                {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
        <h2 className='font-bold text-8xl mt-8 w-full text-center text-secondaryColor sm:!text-3xl md:!text-5xl lg:!text-7xl pb-16 md:pb-6'>Skills</h2>
        <div className='w-full h-[70vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[60vh] md:h-[40vh] sm:h-[40vh] xs:h-[20vh] 
        lg:bg-circularLightLarge lg:dark:bg-circularDarkLarge
        md:bg-circularLightMedium md:dark:bg-circularDarkMedium
        sm:bg-circularLightSmall sm:dark:bg-circularDarkSmall'>

            <motion.div className='flex items-end justify-center rounded-full 
            font-semibold bg-primaryColor text-light 
            p-8 shadow-dark cursor-pointer
            lg:p-6 md:p-4 sm:p-2 xs:text-xs'
            whileHover={{scale:1.05}}>
                Video Game Development
            </motion.div>

            <Skill name="Perforce" x="-34vw" y="2vw" />
            <Skill name="Unity" x="-5vw" y="-10vw" />
            <Skill name="Unreal Engine" x="24vw" y="10vw" />
            <Skill name="C#" x="0vw" y="12vw" />
            <Skill name="Agile Development" x="-24vw" y="-15vw" />
            <Skill name="HacknPlan" x="15vw" y="-12vw" />
            <Skill name="C++" x="32vw" y="-5vw" />
            <Skill name="Git" x="0vw" y="-18vw" />
            <Skill name="UI/UX" x="-25vw" y="18vw" />
            <Skill name="Python" x="12vw" y="16vw" />

        </div>
        </>
    )
}

export default Skills