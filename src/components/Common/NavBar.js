import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, DiscordIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from "framer-motion";
import useThemeSwitcher from '../Hooks/useThemeSwitcher'


const CustomLink = ({href, title, className='', underlineColor = 'black'}) => {
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
        <header
        className='w-fulle px-32 py-8 font-medium flex items-center justify-between dark:text-light'
        >
            <nav>
                <CustomLink href="/" title="Home" className='mr-4' underlineColor='bg-primary'></CustomLink>
                <CustomLink href="/about" title="About" className='mx-4' underlineColor='bg-primary'></CustomLink>
                <CustomLink href="/projects" title="Projects" className='mx-4' underlineColor='bg-primary'></CustomLink>
                <CustomLink href="/articles" title="Articles" className='ml-4' underlineColor='bg-primary'></CustomLink>
            </nav>
            <nav className='flex items-center justify-center flex-wrap'>
                {/* <motion.a href="https://twitter.com" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mr-3'
                >
                    <TwitterIcon />
                </motion.a> */}
                <motion.a href="https://discord.com/users/488372834016690186" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mx-3'
                >
                    <DiscordIcon className='dark:fill-light'/>
                </motion.a>
                <motion.a href="https://github.com/GabiAnderson" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mx-3'
                >
                    <GithubIcon className='dark:fill-light' />
                </motion.a>
                <motion.a href="https://linkedin.com/in/gabriela-anderson" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mx-3'
                >
                    <LinkedInIcon className='dark:fill-light' />
                </motion.a>
                {/* <motion.a href="https://pinterest.com" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mx-3'
                >
                    <PinterestIcon />
                </motion.a>
                <motion.a href="https://dribbble.com" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 ml-3'
                >
                    <DribbbleIcon />
                </motion.a> */}

                <button
                onClick={ () => setMode(mode === "light" ? "dark" : "light") }
                    className={`ml-3 flex items-center justify-center rounded-full p-1 
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}
                >
                    {
                        mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                    }
                </button>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar