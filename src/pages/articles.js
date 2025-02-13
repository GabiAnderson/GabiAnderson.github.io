import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import {motion, useMotionValue} from 'framer-motion';
import Layout from '@/components/Common/Layout'
import AnimatedText from '@/animations/AnimatedText'
import comingSoon from "../../public/images/comingSoon.png";

const FramerImage = motion(Image);

const FeaturedArticle = ({img, title, time, summary, link}) => {

    return (
        <li className=' relative col-span-1 w-full p-4 bg-light border border-solid border-primaryColor rounded-2xl dark:bg-dark'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-primaryColor rounded-br-3xl'/>

            <Link href={link} className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}} 
                    priority
                    sizes="(max-width: 768px) 100vs, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <Link href={link}>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline dark:text-light'>{title}</h2>

                <p className='text-sm mb-2 text-secondaryDark dark:text-secondaryLight'>{summary}</p>

                <span className='text-tertiaryColor font-semibold'>{time}</span>
            </Link>
        </li>
    )
}

const MovingImage = ({title, img, link}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouseEnter(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link}
            onMouseMove={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitilize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage 
                style={{ x:x, y:y }} 
                initial={{opacity:0}}
                whileInView={{opacity:1, transition:{duration:0.2}}} 
                ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg' />
        </Link>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li 
            initial={{y:200}}
            whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
            viewport={{once:true}}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
            justify-between bg-light text-primaryColor first:mt-0 border border-solid border-primaryColor
            border-r-4 border-b-4 dark:bg-dark'
        >
            <MovingImage title={title} img={img} link={link} />

            <span className='text-secondaryTertiaryColor font-semibold pl-4'>{date}</span>
        </motion.li>
    )
}

const articles =() => {
    return (
    <>
        <Head>
            <title>Gabi Anderson | Articles</title>
            <meta name="description" content="any thing here" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText text="Player to Creator!" className='mb-16 text-secondaryColor'/>

                <ul className='grid grid-cols-2 gap-16'>

                    <FeaturedArticle
                        img={comingSoon}
                        title="Coming Soon"
                        time="2 min read"
                        summary="Short summary coming soon"
                        link="/"
                    />

                </ul>

                <h2 className='font-bold text-6xl w-full text-center my-8 py-8 dark:text-light'>All Articles</h2>

                <ul>

                    <Article
                        title="Coming Soon"
                        img={comingSoon}
                        date="Aug 4, 2023"
                        link="/"
                    />
                    <Article
                        title="Coming Soon"
                        img={comingSoon}
                        date="Aug 4, 2023"
                        link="/"
                    />
                    <Article
                        title="Coming Soon"
                        img={comingSoon}
                        date="Aug 4, 2023"
                        link="/"
                    />

                </ul>
            </Layout>
        </main>
    </>
    )
}

export default articles