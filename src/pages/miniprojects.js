import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {motion} from 'framer-motion';
import Layout from '@/components/Common/Layout'
import AnimatedText from '@/animations/AnimatedText'
import { GithubIcon } from '@/components/Common/Icons'

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, githubLink, documentationLink, publicLink}) => {
    // Split the "type" prop into three parts based on spaces
    const typeParts = type.split('**');
    const firstPart = typeParts[0];
    const secondPart = typeParts[1];
    const thirdPart = typeParts.slice(2).join('**');

    return (
        <article className='w-full flex items-center justify-between first-letter rounded-3xl border border-solid 
        border-primaryColor bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-primaryColor rounded-br-3xl'/>

            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}} 
                    priority
                    sizes="(max-width: 768px) 100vs, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
                {/* Apply the custom CSS classes to each part of the "type" prop */}
                <span className='font-medium text-xl'>
                    <span className='text-primaryColor'>{firstPart}</span>{' '}
                    <span className='text-dark dark:text-light'>{secondPart}</span>{' '}
                    <span className='text-secondaryTertiaryColor'>{thirdPart}</span>
                </span>

                <Link href={link} className='hover:underline underline-offset-2 dark:text-light'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>

                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>

                <div className='mt-2 flex items-center'>
                    <Link href={link} className='rounded-lg bg-tertiaryColor text-light p-2 px-6 text-lg font-semibold'>Learn More</Link>

                    {githubLink && (
                        <Link href={githubLink} target="_blank" className='ml-4 w-10'>
                        <GithubIcon className='dark:fill-light' />
                        </Link>
                    )}

                    {documentationLink && (
                        <Link href={documentationLink} target="_blank" className='ml-4 rounded-lg bg-tertiaryColor text-light p-2 px-6 text-lg font-semibold'>
                        Documentation
                        </Link>
                    )}

                    {publicLink && (
                        <Link href={publicLink} target="_blank" className='ml-4 rounded-lg bg-tertiaryColor text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
                    )}
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, summary, img, link, githubLink, documentationLink, publicLink }) => {
    // Split the "type" prop into three parts based on spaces
    const typeParts = type.split('**');
    const firstPart = typeParts[0];
    const secondPart = typeParts[1];
    const thirdPart = typeParts.slice(2).join('**');
  
    return (
      <article className='w-full flex flex-col items-center justify-center rounded-2xl 
      border border-solid border-primaryColor bg-light p-6 relative rounded-br-2xl dark:bg-dark'>

        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-primaryColor rounded-br-3xl'/>

        <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}} 
                />
            </div>
        </Link>
  
        <div className='w-full flex flex-col items-start justify-between mt-4'>
          {/* Apply the custom CSS classes to each part of the "type" prop */}
          <span className='font-medium text-xl'>
            <span className='text-primaryColor'>{firstPart}</span>{' '}
            <span className='text-dark dark:text-light'>{secondPart}</span>{' '}
            <span className='text-secondaryTertiaryColor'>{thirdPart}</span>
          </span>
  
          <Link href={link} className='hover:underline underline-offset-2 dark:text-light'>
            <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>{title}</h2>
          </Link>
  
          <p className='my-2 font-normal text-dark dark:text-light'>{summary}</p>
  
          <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} className='rounded-lg bg-tertiaryColor text-light p-2 px-6 text-lg font-semibold'>Learn</Link>
  
            {githubLink && (
                <Link href={githubLink} target="_blank" className='ml-4 w-10'>
                <GithubIcon className='dark:fill-light' />
                </Link>
            )}

            {documentationLink && (
                <Link href={documentationLink} target="_blank" className='ml-4 rounded-lg bg-tertiaryColor text-light p-2 px-6 text-lg font-semibold'>
                Documentation
                </Link>
            )}
  
            {publicLink && (
                <Link href={publicLink} target="_blank" className='ml-4 rounded-lg bg-tertiaryColor text-light p-2 px-6 text-lg font-semibold'>Visit</Link>
            )}
          </div>
        </div>
      </article>
    )
}
  

const projects =() => {
    return (
    <>
        <Head>
            <title>Gabi Anderson | Projects</title>
            <meta name="description" content="any thing here" />
        </Head> 
        <main className='w-full mb-8 flex flex-col items-center justify-center'>
            <Layout className='pt-8'>
                <AnimatedText text="Player to Creator!" className='mb-8 text-secondaryColor'/>

                <div className='grid grid-cols-12 gap-24'>
                </div>
            </Layout>
        </main>
    </>
    )
}

export default projects