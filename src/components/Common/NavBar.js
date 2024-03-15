import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, GithubIcon, LinkedInIcon, DiscordIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from "framer-motion";
import useThemeSwitcher from '../Hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = '', underlineColor = 'black' }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ${underlineColor} ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </Link>
    );
};

const CustomLinkMobile = ({ href, title, className = '', underlineColor = 'black', toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-dark 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ${underlineColor} ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </button>
    );
};

const WorkInProgressDialog = ({ hideDialog }) => {
    return (
        <div className="fixed top-0 left-0 w-full bg-yellow-500 text-black p-4 text-center">
            <p>This website is a personal project and is currently being enhanced for better mobile usability. For optimal viewing experience, please use a desktop or laptop. Thank you for your patience!</p>
            <button onClick={hideDialog} className="bg-black text-white py-2 px-4 mt-2 rounded-md">Hide</button>
        </div>
    );
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(true);

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen)
    }

    const hideDialog = () => {
        setDialogVisible(false);
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex flex-col items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:p-8 '>

            {/* First Row */}
            <nav className='flex items-center justify-between w-full mb-4'>

                {/* Hamburger menu button for smaller screens */}
                <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleHamburgerClick}>
                    <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>

                {/* Hamburger menu for smaller screens */}
                {
                    isOpen ?

                    <motion.div
                    initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                    animate={{scale:1, opacity:1}}
                    className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/5
                bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32'>
                        <div className='flex items-center flex-col justify-center'>
                            <CustomLinkMobile href="/" title="Home" className='' underlineColor='bg-primaryColor' toggle={handleHamburgerClick} ></CustomLinkMobile>
                            <CustomLinkMobile href="/about" title="About" className='' underlineColor='bg-primaryColor' toggle={handleHamburgerClick} ></CustomLinkMobile>
                            <CustomLinkMobile href="/projects" title="Projects" className='' underlineColor='bg-primaryColor' toggle={handleHamburgerClick} ></CustomLinkMobile>
                            {/* <CustomLinkMobile href="/articles" title="Articles" className='' underlineColor='bg-primaryColor' toggle={handleHamburgerClick} ></CustomLinkMobile> */}
                            <CustomLinkMobile href="/gdc" title="GDC" className='' underlineColor='bg-primaryColor' toggle={handleHamburgerClick} ></CustomLinkMobile>
                        </div>

                        <div className='flex items-center justify-center flex-wrap-2'>
                            <motion.a href="https://discord.com/users/488372834016690186" target={'_blank'}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mr-3 sm:mx-1'
                            >
                                <DiscordIcon className='fill-light dark:fill-dark hover:fill-primaryColor dark:hover:fill-primaryColor' />
                            </motion.a>
                            <motion.a href="https://github.com/GabiAnderson" target={'_blank'}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mx-3 sm:mx-1'
                            >
                                <GithubIcon className='fill-light dark:fill-dark hover:fill-primaryColor dark:hover:fill-primaryColor' />
                            </motion.a>
                            <motion.a href="https://linkedin.com/in/gabriela-anderson" target={'_blank'}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mx-3 sm:mx-1'
                            >
                                <LinkedInIcon className='fill-light dark:fill-dark hover:fill-primaryColor dark:hover:fill-primaryColor' />
                            </motion.a>
                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`flex items-center justify-center rounded-full p-1 
                                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                                `}
                            >
                                {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
                            </button>
                        </div>
                    </motion.div>

                    : null
                }

                {/* Standard menu bar for regular screens */}
                <div className='w-full flex justify-between items-center lg:hidden'>
                    <div>
                        <CustomLink href="/" title="Home" className='mr-4' underlineColor='bg-primaryColor'></CustomLink>
                        <CustomLink href="/about" title="About" className='mx-4' underlineColor='bg-primaryColor'></CustomLink>
                        <CustomLink href="/projects" title="Projects" className='mx-4' underlineColor='bg-primaryColor'></CustomLink>
                        {/* <CustomLink href="/articles" title="Articles" className='ml-4' underlineColor='bg-primaryColor'></CustomLink> */}
                        <CustomLink href="/gdc" title="GDC" className='ml-4' underlineColor='bg-primaryColor'></CustomLink>
                    </div>

                    <div className='flex items-center'>
                        <motion.a href="https://discord.com/users/488372834016690186" target={'_blank'}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-6 mr-3'
                        >
                            <DiscordIcon className='dark:fill-light hover:fill-primaryColor dark:hover:fill-primaryColor' />
                        </motion.a>
                        <motion.a href="https://github.com/GabiAnderson" target={'_blank'}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-6 mx-3'
                        >
                            <GithubIcon className='dark:fill-light hover:fill-primaryColor dark:hover:fill-primaryColor' />
                        </motion.a>
                        <motion.a href="https://linkedin.com/in/gabriela-anderson" target={'_blank'}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-6 mx-3'
                        >
                            <LinkedInIcon className='dark:fill-light hover:fill-primaryColor dark:hover:fill-primaryColor' />
                        </motion.a>
                        <button
                            onClick={() => setMode(mode === "light" ? "dark" : "light")}
                            className={`ml-3 flex items-center justify-center rounded-full p-1 
                            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                            `}
                        >
                            {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
                        </button>
                    </div>
                </div>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

            <nav className='w-full items-center justify-center py-2 hidden lg:flex'>
            {dialogVisible && <WorkInProgressDialog hideDialog={hideDialog} />}
            </nav>

            {/* Second Row */}
            {/* TODO - to remove just add hidden to the end of the nav classname and remove flex from the start or to show add flex to start and add hidden to end*/}
            <nav className='w-full items-center justify-center py-2 hidden'>
                <div className='bg-yellow-500 text-center items-center p-4 rounded-lg' style={{ maxWidth: '1000px' }}>
                    <span className='text-6xl text-black font-extrabold'>!</span>
                    <h1 className='capitalize font-bold text-2xl mt-2'>Status Update</h1>
                    <p className='my-4'>
                        Welcome to my portfolio! Please note that my current website is a personal project where 
                        I am learning ReactJS, NextJS, and CSS and is thus a work in progress. To view my old portfolio 
                        site, click the button below.
                    </p>
                    <p className='my-4'>
                        My previous website showcases my most recent and proudest projects, 
                        but this new site will soon include even more exciting content. Thank you for your patience as I 
                        continue to improve and update this portfolio.
                    </p>

                    <p className='my-4 pb-4'>
                        Last Updated 2/19/24
                    </p>
                    <Link href="https://gabi84095.wixsite.com/portfolio/portfolio" target={"_blank"}
                        className='bg-dark text-light p-2.5 px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                        border-2 border-solid border-transparent hover:border-dark'
                    >View my old website</Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
