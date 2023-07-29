import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, DiscordIcon } from './Icons'
import { motion } from "framer-motion";

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
    return (
        <header
        className='w-fulle px-32 py-8 font-medium flex items-center justify-between'
        >
            <nav>
                <CustomLink href="/" title="Home" className='mr-4' underlineColor='bg-accentpink'></CustomLink>
                <CustomLink href="/about" title="About" className='mx-4' underlineColor='bg-accentblue'></CustomLink>
                <CustomLink href="/projects" title="Projects" className='mx-4' underlineColor='bg-accentpurple'></CustomLink>
                <CustomLink href="/articles" title="Articles" className='ml-4' underlineColor='bg-accentyellow'></CustomLink>
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
                    <DiscordIcon />
                </motion.a>
                <motion.a href="https://github.com/GabiAnderson" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mx-3'
                >
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://linkedin.com/in/gabriela-anderson" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mx-3'
                >
                    <LinkedInIcon />
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
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar