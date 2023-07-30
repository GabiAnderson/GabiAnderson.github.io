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
            py-3 px-6 shadow-dark cursor-pointer absolute'
            style={{ background: randomColor }}
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            animate={{x:x, y:y}}
            transition={{duration:1.5}}>
                {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

            <motion.div className='flex items-end justify-center rounded-full 
            font-semibold bg-dark text-light 
            p-8 shadow-dark cursor-pointer'
            whileHover={{scale:1.05}}>
                Video Game Development
            </motion.div>

            <Skill name="Unreal Engine" x="-20vw" y="2vw" />
            <Skill name="Unity" x="-5vw" y="-10vw" />
            <Skill name="C++" x="20vw" y="6vw" />
            <Skill name="C#" x="0vw" y="12vw" />
            <Skill name="Agile Development" x="-20vw" y="-15vw" />
            <Skill name="HacknPlan" x="15vw" y="-12vw" />
            <Skill name="Perforce" x="32vw" y="-5vw" />
            <Skill name="Git" x="0vw" y="-20vw" />
            <Skill name="UI/UX" x="-25vw" y="18vw" />

        </div>
        </>
    )
}

export default Skills