import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/ProfileIcon.jpg";
import Image from 'next/image'
import { useSpring, useMotionValue, useInView, motionValue } from 'framer-motion';

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref);

    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value ){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}>

    </span>
}

const AnimatedList = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
        if (currentIndex < text.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, delay);
      
          return () => clearTimeout(timeout);
        }
      }, [currentIndex, delay, text]);
  
    return <span>{currentText}</span>;
};

const about =() => {
    return (
    <>
        <Head>
            <title>Gabi Anderson | About</title>
            <meta name="description" content="any thing here" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Player to Creator!" className='mb-16 text-primary' />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-accentmaroon/75'>Biography</h2>
                        <p className='font-medium'>
                            Hello there! I recently graduated in 2023 from the University of Utah with an Honors Bachelor of 
                            Science degree in Computer Science, with an emphasis in Entertainment Arts and Engineering, 
                            and a minor in Mathematics. Throughout my academic journey, I acquired a solid foundation in various 
                            aspects of computer science, including software development, computer architecture, algorithms, and 
                            user interfaces but also had the opportunity to take classes focused on video game development such as 
                            asset pipeline, traditional game development, and Game Design.
                        </p>
                        <p className='my-4 font-medium'>
                            My love for video games traces back to my early years, when my dad and uncle let me watch them play 
                            Halo. My first gaming adventures were on the Original Xbox, playing titles like Halo, Ty the Tasmanian 
                            Tiger, and Mad Dash. As I progressed through college, my academic journey seamlessly intertwined with 
                            my gaming passion. I not only had the opportunity to play a diverse range of games for coursework but 
                            also actively engaged in the process of creating them. This hands-on experience as both a player and a 
                            game developer allowed me to explore various genres and styles, enriching my understanding of the 
                            intricate art and technology behind the gaming industry.
                        </p>
                        <p className='font-medium'>
                            Now, as an Associate Firmware Test Engineer at Cricut, I bring the enthusiasm and creativity cultivated through 
                            my love for video games to my work. At Cricut I am tasked with automating firmware qualification processes, 
                            developing test cases for new and released products, and act as the lead firmware tester for upcoming machines, 
                            running them through test cases and writing bugs for the firmware team. Furthermore, I've embarked on 
                            exciting personal projects, including website development and a collaborative effort with fellow developers on 
                            the game 'Winged Remnants,' where I contribute as the UI/UX programmer. With a profound appreciation for the art 
                            and technology behind gaming, I eagerly look forward to the adventures that lie ahead in this dynamic industry.
                        </p>
                    </div>

                    <div className='grid place-items-center col-span-3 relative h-screen rounded-2xl border-2 border-solid border-primary bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-primary' />
                        <Image src={profilePic} alt="GabiAnderson" className='w-full h-auto rounded-2xl' />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl text-accentgreen font-bold'>
                                <AnimatedNumbers value={30}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Coursework and Certifications</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl text-accentpink font-bold'>
                                <AnimatedNumbers value={7}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Game Projects</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-5xl text-accentblue font-bold'>
                                <AnimatedList text="Unity, Unreal," delay={100} />
                            </span>
                            <span className='inline-block text-5xl text-accentblue font-bold'>
                                <AnimatedList text="C#, C++" delay={200} />
                            </span>
                            <span className='inline-block text-5xl text-accentblue font-bold'>
                                <AnimatedList text="& more" delay={300} />
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Tools and Technologies</h2>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    </>
    )
}

export default about