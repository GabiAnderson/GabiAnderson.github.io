import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import AnimatedText from "@/animations/AnimatedText";
import Layout from "@/components/Common/Layout";
import profilePic from "../../public/images/profile/ProfilePic.jpeg";
import Image from "next/image";
import {
    useSpring,
    useMotionValue,
    useInView,
    motionValue,
} from "framer-motion";
import Skills from "@/components/About/Skills";
import Experience from "@/components/About/Experience";
import Education from "@/components/About/Education";
import OtherLearning from "@/components/About/OtherLearning";
import TextFormat from "@/components/Common/TextFormat";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

const AnimatedList = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
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
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-8 2xl:pt-8 xl:pt-8 lg:pt-6 md:pt-6 sm:pt-6">
                    <AnimatedText
                        text="Player to Creator!"
                        className="mb-4 text-secondaryTertiaryColor sm:!text-3xl md:!text-5xl lg:!text-7xl"
                    />
                    {/* About Section and Stats for larger screens */}
                    <div className="grid w-full grid-cols-8 gap-16 lg:gap-8 md:grid-cols-4">
                        {/* About me description */}
                        <div className="col-span-4 flex flex-col items-start justify-center lg:col-span-6 md:col-span-4 md:items-center">
                            <span className="mb-4 text-lg font-bold uppercase text-primaryColor">
                                <AnimatedList text="Biography" delay={100} />
                            </span>
                            {/* About me long text (lg-2xl) */}
                            <TextFormat
                                className="text-sm font-medium md:hidden"
                                text="Hello there! <br></br>
                                I graduated in 2023 from the University of Utah with an Honors Bachelor of Science in Computer Science, with an emphasis in Entertainment Arts and Engineering, and a minor in Mathematics. My studies provided a strong foundation in software development, computer architecture, algorithms, and game design.
                                <br></br>
                                My passion for video games began early, inspired by watching my dad and uncle play Halo on the Original Xbox. Titles like <i>Halo: Combat Evolved</i> and <i>Ty the Tasmanian Tiger</i> shaped my love for gaming. In college, I combined this passion with my coursework, gaining hands-on experience in both playing and developing games, which I’ve showcased in the Projects tab of this site.
                                <br></br>
                                As a Software Test Engineer, I started by qualifying software releases for machine calibration, writing bugs, testing features, and automating processes. My role has expanded to include developing software releases, updating UI, and working on major projects like the Test Flags system and custom refurbishment software.
                                <br></br>
                                In addition to my professional work, I pursue personal projects in website development and Arduino programming and continually enhance my skills through LinkedIn Learning. With a deep appreciation for the artistry and technology behind gaming and software development, I’m excited about future opportunities in this dynamic field."
                            />
                            {/* About me short text (xs-md) */}
                            <TextFormat
                                className="text-xs font-medium text-center hidden md:flex"
                                text="Hello there! <br></br> 
                                I graduated in 2023 from the University of Utah with an Honors Bachelor of Science in Computer Science, emphasizing Entertainment Arts and Engineering. My studies provided a strong foundation in software development and game design.
                                <br></br>
                                My passion for video games started with titles like <i>Halo: Combat Evolved</i>. In college, I gained hands-on experience in game development, showcased in the Projects tab of this site.
                                <br></br>
                                As a Software Test Engineer, I initially focused on qualifying software releases for machine calibration. My role has since expanded to developing software, updating UI, and working on major projects like the Test Flags system.
                                <br></br>
                                I also engage in personal projects like website development and Arduino programming and continually enhance my skills through LinkedIn Learning. Excited about future opportunities in software development and gaming."
                            />
                        </div>

                        {/* Image for 2xl screens */}
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-secondaryColor bg-light p-8 my-24 dark:bg-dark lg:hidden xl:hidden">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-secondaryColor" />
                            <Image
                                src={profilePic}
                                alt="GabiAnderson"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 100vs, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        {/* Stats and Image for lg-2xl*/}
                        <div className="col-span-1 flex flex-col items-end justify-center lg:col-span-2 md:hidden xl:col-span-4">
                            {/* Image for xl screens*/}
                            <div className="relative h-max rounded-2xl border-2 border-solid border-secondaryColor bg-light p-8 my-24 dark:bg-dark hidden xl:flex lg:hidden">
                                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-secondaryColor" />
                                <Image
                                    src={profilePic}
                                    alt="GabiAnderson"
                                    className="w-full h-auto rounded-2xl"
                                    priority
                                    sizes="(max-width: 500px) 100vs, (max-width: 800px) 50vw, 33vw"
                                />
                            </div>
                            {/* Stats for xl screen */}
                            <div className="w-full grid-cols-3 gap-8 hidden xl:grid lg:hidden">
                                <div className="col-span-1 flex flex-col items-center">
                                    <span className="text-4xl text-primaryColor font-bold">
                                        <AnimatedNumbers value={30} />+
                                    </span>
                                    <h2 className="text-lg font-medium capitalize text-center text-dark/75 dark:text-light/75">
                                        Courses
                                    </h2>
                                </div>
                                <div className="col-span-1 flex flex-col items-center">
                                    <span className="text-4xl text-tertiaryColor font-bold">
                                        <AnimatedNumbers value={7} />+
                                    </span>
                                    <h2 className="text-lg font-medium capitalize text-center text-dark/75 max-h-16 dark:text-light/75">
                                        Game Projects
                                    </h2>
                                </div>
                                <div className="col-span-1 flex flex-col items-center">
                                    <span className="text-4xl text-secondaryTertiaryColor font-bold">
                                        <AnimatedNumbers value={10} />+
                                    </span>
                                    <h2 className="text-lg font-medium capitalize text-center text-dark/75 dark:text-light/75">
                                        Certifications
                                    </h2>
                                </div>
                            </div>

                            {/* Stats for 2xl and lg */}
                            <div className="flex flex-col items-end justify-center xl:hidden lg:flex">
                                <span className="inline-block text-7xl text-primaryColor font-bold">
                                    <AnimatedNumbers value={30} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-center text-dark/75 dark:text-light/75">
                                    Courses
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center py-8 xl:hidden lg:flex">
                                <span className="inline-block text-7xl text-tertiaryColor font-bold">
                                    <AnimatedNumbers value={7} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-center text-dark/75 max-h-16 dark:text-light/75">
                                    Game Projects
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:hidden lg:flex">
                                <span className="inline-block text-7xl text-secondaryTertiaryColor font-bold">
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-center text-dark/75 dark:text-light/75">
                                    Certifications
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Stats for md-xs screen */}
                    <div className="w-full grid-cols-3 gap-8 pt-4 hidden md:grid">
                        <div className="col-span-1 flex flex-col items-center">
                            <span className="text-4xl text-primaryColor font-bold">
                                <AnimatedNumbers value={30} />+
                            </span>
                            <h2 className="text-lg font-medium capitalize text-center text-dark/75 dark:text-light/75">
                                Courses
                            </h2>
                        </div>
                        <div className="col-span-1 flex flex-col items-center">
                            <span className="text-4xl text-tertiaryColor font-bold">
                                <AnimatedNumbers value={7} />+
                            </span>
                            <h2 className="text-lg font-medium capitalize text-center text-dark/75 max-h-16 dark:text-light/75">
                                Game Projects
                            </h2>
                        </div>
                        <div className="col-span-1 flex flex-col items-center">
                            <span className="text-4xl text-secondaryTertiaryColor font-bold">
                                <AnimatedNumbers value={10} />+
                            </span>
                            <h2 className="text-lg font-medium capitalize text-center text-dark/75 dark:text-light/75">
                                Certifications
                            </h2>
                        </div>
                    </div>

                    <Skills />

                    <Experience />

                    <Education />

                    <OtherLearning />
                </Layout>
            </main>
        </>
    );
};

export default about;
