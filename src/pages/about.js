import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import AnimatedText from '@/animations/AnimatedText'
import Layout from '@/components/Common/Layout'
import profilePic from "../../public/images/profile/ProfileIcon.png";
import Image from 'next/image'
import { useSpring, useMotionValue, useInView, motionValue } from 'framer-motion';
import Skills from '@/components/About/Skills'
import Experience from '@/components/About/Experience'
import Education from '@/components/About/Education'
import OtherLearning from '@/components/About/OtherLearning'

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
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-8'>
                <AnimatedText text="Player to Creator!" className='mb-8 text-secondaryColor' />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-4 flex flex-col items-start justify-center'>
                        <span className='mb-4 text-lg font-bold uppercase text-primaryColor'>
                                <AnimatedList text="Biography" delay={100} />
                        </span>

                        <p className='text-sm font-medium'>
                            Hello there! I recently graduated in 2023 from the University of Utah with an Honors Bachelor of 
                            Science degree in Computer Science, with an emphasis in Entertainment Arts and Engineering, 
                            and a minor in Mathematics. Throughout my academic journey, I acquired a solid foundation in various 
                            aspects of computer science, including software development, computer architecture, algorithms, and 
                            user interfaces but also had the opportunity to take classes focused on video game development such as 
                            asset pipeline, traditional game development, and Game Design.
                        </p>
                        <p className='my-4 text-sm font-medium'>
                            My love for video games traces back to my early years, when my dad and uncle let me watch them play 
                            Halo. My first gaming adventures were on the Original Xbox, playing titles like Halo, Ty the Tasmanian 
                            Tiger, and Mad Dash. As I progressed through college, my academic journey seamlessly intertwined with 
                            my gaming passion. I not only had the opportunity to play a diverse range of games for coursework but 
                            also actively engaged in the process of creating them. This hands-on experience as both a player and a 
                            game developer allowed me to explore various genres and styles, enriching my understanding of the 
                            intricate art and technology behind the gaming industry.
                        </p>
                        <p className='text-sm font-medium'>
                            Now, as an Associate Firmware Test Engineer at Cricut, I am tasked with automating firmware qualification processes, 
                            developing test cases for new and released products, and act as the lead firmware tester for upcoming machines, 
                            running them through test cases and writing bugs for the firmware team. Furthermore, I&apos;ve embarked on 
                            exciting personal projects, including website development and a collaborative effort with fellow developers on 
                            the game &apos;Winged Remnants&apos;, where I contribute as the UI/UX programmer. With a profound appreciation for the art 
                            and technology behind gaming, I eagerly look forward to the adventures that lie ahead in this dynamic industry.
                        </p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-secondaryColor bg-light p-8 my-24 dark:bg-dark'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-secondaryColor' />
                        <Image src={profilePic} alt="GabiAnderson" className='w-full h-auto rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vs, (max-width: 1200px) 50vw, 33vw" />
                    </div>

                    <div className='col-span-1 flex flex-col items-end justify-center'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl text-primaryColor font-bold'>
                                <AnimatedNumbers value={30}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-center text-dark/75 dark:text-light/75'>Courses</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center py-8'>
                            <span className='inline-block text-7xl text-tertiaryColor font-bold'>
                                <AnimatedNumbers value={7}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-center text-dark/75 max-h-16 dark:text-light/75'>Game Projects</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl text-secondaryTertiaryColor font-bold'>
                                <AnimatedNumbers value={10}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-center text-dark/75 dark:text-light/75'>Certifications</h2>
                        </div>
                    </div>
                </div>

                <Skills />

                <Experience />

                <Education />

                <OtherLearning />
            </Layout>
        </main>
    </>
    )
}

export default about