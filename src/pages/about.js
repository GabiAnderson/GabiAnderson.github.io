import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import AnimatedText from '@/animations/AnimatedText'
import Layout from '@/components/Common/Layout'
import profilePic from "../../public/images/profile/ProfilePic.jpeg";
import Image from 'next/image'
import { useSpring, useMotionValue, useInView, motionValue } from 'framer-motion';
import Skills from '@/components/About/Skills'
import Experience from '@/components/About/Experience'
import Education from '@/components/About/Education'
import OtherLearning from '@/components/About/OtherLearning'
import TextFormat from '@/components/Common/TextFormat';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
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

const about = () => {
    return (
        <>
            <Head>
                <title>Gabi Anderson | About</title>
                <meta name="description" content="any thing here" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-8 2xl:pt-8 xl:pt-8 lg:pt-6 md:pt-6 sm:pt-6'>
                    <AnimatedText text="Player to Creator!" className='mb-4 text-secondaryColor sm:!text-3xl md:!text-5xl lg:!text-7xl' />
                    {/* About Section and Stats for larger screens */}
                    <div className='grid w-full grid-cols-8 gap-16 lg:gap-8 md:grid-cols-4'>
                        {/* About me description */}
                        <div className='col-span-4 flex flex-col items-start justify-center lg:col-span-6 md:col-span-4 md:items-center'>

                            <span className='mb-4 text-lg font-bold uppercase text-primaryColor'>
                                <AnimatedList text="Biography" delay={100} />
                            </span>
                            {/* About me long text (lg-2xl) */}
                            <TextFormat className='text-sm font-medium md:hidden'
                                text="Hello there! I recently graduated in 2023 from the University of Utah with an Honors Bachelor of 
                            Science degree in Computer Science, with an emphasis in Entertainment Arts and Engineering, 
                            and a minor in Mathematics. Throughout my academic journey, I acquired a solid foundation in various 
                            aspects of computer science, including software development, computer architecture, algorithms, and 
                            user interfaces but also had the opportunity to take classes focused on video game development such as 
                            asset pipeline, traditional game development, and game design.
                            <br></br>
                            My love for video games traces back to my early years, when my dad and uncle let me watch them play 
                            Halo. My first gaming adventures were on the Original Xbox, playing titles like <i>Halo: Combat Evolved</i>, <i>Ty the Tasmanian 
                            Tiger</i>, and <i>Mad Dash</i>. As I progressed through college, my academic journey seamlessly intertwined with 
                            my gaming passion. I not only had the opportunity to play a diverse range of games for coursework but 
                            also actively engaged in the process of creating them. This hands-on experience as both a player and a 
                            game developer allowed me to explore various genres and styles, enriching my understanding of the 
                            intricate art and technology behind the gaming industry. I have showcased some of my game projects and other development projects
                            on this site under the Projects tab.
                            <br><br>
                            Now, as an Associate Firmware Test Engineer at Cricut, I am tasked with automating firmware qualification processes, 
                            developing test cases for new and released products, and act as the lead firmware tester for upcoming machines, 
                            running them through test cases and writing bugs for the firmware team. Furthermore, alongside my professional role, 
                            I pursue personal projects in website development, Arduino programming, and beyond. I am frequently completing LinkedIn Learning 
                            courses and similar video/book courses to further expand my knowledge and skillset. With a deep appreciation for both the 
                            artistry and technology that drive the gaming industry, I'm excited for the future adventures that await in this ever-evolving field."
                            />
                            {/* About me short text (xs-md) */}
                            <TextFormat className='text-xs font-medium text-center hidden md:flex'
                                text="Hello there! I'm a 2023 University of Utah graduate with an Honors BS in Computer Science, focusing on Entertainment Arts and Engineering, 
                            and a minor in Mathematics. My academic journey provided a solid foundation in computer science, including software development and game 
                            design, perfectly blending with my passion for video games ignited by early experiences with titles like <i>Halo: Combat Evolved</i> and <i>Ty the Tasmanian 
                            Tiger</i>. This passion led me to not only play but create games, with several projects now showcased on this site.
                            <br><br>
                            Currently, as an Associate Firmware Test Engineer at Cricut, I automate firmware testing and lead testing for new products, while also 
                            diving into personal projects in website development and Arduino programming. Always eager to learn, I frequently engage in further education 
                            through LinkedIn Learning. With a profound appreciation for the gaming industry's art and technology, I'm excited about the future possibilities 
                            in this dynamic field."
                            />
                        </div>

                        {/* Image for 2xl screens */}
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-secondaryColor bg-light p-8 my-24 dark:bg-dark lg:hidden xl:hidden'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-secondaryColor' />
                            <Image src={profilePic} alt="GabiAnderson" className='w-full h-auto rounded-2xl'
                                priority
                                sizes="(max-width: 768px) 100vs, (max-width: 1200px) 50vw, 33vw" />
                        </div>

                        {/* Stats and Image for lg-2xl*/}
                        <div className='col-span-1 flex flex-col items-end justify-center lg:col-span-2 md:hidden xl:col-span-4'>
                            {/* Image for xl screens*/}
                            <div className='relative h-max rounded-2xl border-2 border-solid border-secondaryColor bg-light p-8 my-24 dark:bg-dark hidden xl:flex lg:hidden'>
                                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-secondaryColor' />
                                <Image src={profilePic} alt="GabiAnderson" className='w-full h-auto rounded-2xl'
                                    priority
                                    sizes="(max-width: 500px) 100vs, (max-width: 800px) 50vw, 33vw" />
                            </div>
                            {/* Stats for xl screen */}
                            <div className='w-full grid-cols-3 gap-8 hidden xl:grid lg:hidden'>
                                <div className='col-span-1 flex flex-col items-center'>
                                    <span className='text-4xl text-primaryColor font-bold'>
                                        <AnimatedNumbers value={30} />+
                                    </span>
                                    <h2 className='text-lg font-medium capitalize text-center text-dark/75 dark:text-light/75'>Courses</h2>
                                </div>
                                <div className='col-span-1 flex flex-col items-center'>
                                    <span className='text-4xl text-tertiaryColor font-bold'>
                                        <AnimatedNumbers value={7} />+
                                    </span>
                                    <h2 className='text-lg font-medium capitalize text-center text-dark/75 max-h-16 dark:text-light/75'>Game Projects</h2>
                                </div>
                                <div className='col-span-1 flex flex-col items-center'>
                                    <span className='text-4xl text-secondaryTertiaryColor font-bold'>
                                        <AnimatedNumbers value={10} />+
                                    </span>
                                    <h2 className='text-lg font-medium capitalize text-center text-dark/75 dark:text-light/75'>Certifications</h2>
                                </div>
                            </div>

                            {/* Stats for 2xl and lg */}
                            <div className='flex flex-col items-end justify-center xl:hidden lg:flex'>
                                <span className='inline-block text-7xl text-primaryColor font-bold'>
                                    <AnimatedNumbers value={30} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-center text-dark/75 dark:text-light/75'>Courses</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center py-8 xl:hidden lg:flex'>
                                <span className='inline-block text-7xl text-tertiaryColor font-bold'>
                                    <AnimatedNumbers value={7} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-center text-dark/75 max-h-16 dark:text-light/75'>Game Projects</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:hidden lg:flex'>
                                <span className='inline-block text-7xl text-secondaryTertiaryColor font-bold'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-center text-dark/75 dark:text-light/75'>Certifications</h2>
                            </div>
                        </div>
                    </div>

                    {/* Stats for md-xs screen */}
                    <div className='w-full grid-cols-3 gap-8 pt-4 hidden md:grid'>
                        <div className='col-span-1 flex flex-col items-center'>
                            <span className='text-4xl text-primaryColor font-bold'>
                                <AnimatedNumbers value={30} />+
                            </span>
                            <h2 className='text-lg font-medium capitalize text-center text-dark/75 dark:text-light/75'>Courses</h2>
                        </div>
                        <div className='col-span-1 flex flex-col items-center'>
                            <span className='text-4xl text-tertiaryColor font-bold'>
                                <AnimatedNumbers value={7} />+
                            </span>
                            <h2 className='text-lg font-medium capitalize text-center text-dark/75 max-h-16 dark:text-light/75'>Game Projects</h2>
                        </div>
                        <div className='col-span-1 flex flex-col items-center'>
                            <span className='text-4xl text-secondaryTertiaryColor font-bold'>
                                <AnimatedNumbers value={10} />+
                            </span>
                            <h2 className='text-lg font-medium capitalize text-center text-dark/75 dark:text-light/75'>Certifications</h2>
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