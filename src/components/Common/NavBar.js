import Link from 'next/link'
import React from 'react'
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
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className='w-fulle px-32 py-8 font-medium flex flex-col items-center justify-between dark:text-light'>
            {/* First Row */}
            <nav className='flex items-center justify-between w-full mb-4'>
                <div>
                    <CustomLink href="/" title="Home" className='mr-4' underlineColor='bg-primaryColor'></CustomLink>
                    <CustomLink href="/about" title="About" className='mx-4' underlineColor='bg-primaryColor'></CustomLink>
                    <CustomLink href="/projects" title="Projects" className='mx-4' underlineColor='bg-primaryColor'></CustomLink>
                    <CustomLink href="/articles" title="Articles" className='ml-4' underlineColor='bg-primaryColor'></CustomLink>
                </div>

                <div className='flex items-center'>
                    <motion.a href="https://discord.com/users/488372834016690186" target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3'
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
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

            {/* Second Row */}
            {/* TODO - just remove this nav when website is complete */}
            <nav className='w-full flex items-center justify-center py-2'>
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
                        Last Updated 1/20/24
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
