import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '@/components/Common/Layout'
import AnimatedText from '@/components/Common/AnimatedText'
import { GithubIcon } from '@/components/Common/Icons'
import NDHeader from "../../public/images/projects/naturalDisaster/ND_header.png";
import AKHeader from "../../public/images/projects/acidKnockout/AK_header.png";
import FFTHeader from "../../public/images/projects/foodForThought/FFT_header.png";

const FeaturedProject = ({type, title, summary, img, link, githubLink, documentationLink, publicLink}) => {
    // Split the "type" prop into three parts based on spaces
    const typeParts = type.split('**');
    const firstPart = typeParts[0];
    const secondPart = typeParts[1];
    const thirdPart = typeParts.slice(2).join('**');

    return (
        <article className='w-full flex items-center justify-between first-letter rounded-3xl border border-solid 
        border-primary bg-light shadow-2xl p-12 relative rounded-br-2xl'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-primary rounded-br-3xl'/>

            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
                {/* Apply the custom CSS classes to each part of the "type" prop */}
                <span className='font-medium text-xl'>
                    <span className='text-primary'>{firstPart}</span>{' '}
                    <span className='text-dark'>{secondPart}</span>{' '}
                    <span className='text-accentpink'>{thirdPart}</span>
                </span>

                <Link href={link} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>

                <p className='my-2 font-medium text-dark'>{summary}</p>

                <div className='mt-2 flex items-center'>
                    <Link href={link} className='ml-4 rounded-lg bg-accentgreen text-light p-2 px-6 text-lg font-semibold'>Learn More</Link>

                    {githubLink && (
                        <Link href={githubLink} target="_blank" className='ml-4 w-10'>
                        <GithubIcon />
                        </Link>
                    )}

                    {documentationLink && (
                        <Link href={documentationLink} target="_blank" className='ml-4 rounded-lg bg-accentgreen text-light p-2 px-6 text-lg font-semibold'>
                        Documentation
                        </Link>
                    )}

                    <Link href={publicLink} target="_blank" className='ml-4 rounded-lg bg-accentgreen text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
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
      border border-solid border-primary bg-light p-6 relative rounded-br-2xl'>

        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-primary rounded-br-3xl'/>

        <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
  
        <div className='w-full flex flex-col items-start justify-between mt-4'>
          {/* Apply the custom CSS classes to each part of the "type" prop */}
          <span className='font-medium text-xl'>
            <span className='text-primary'>{firstPart}</span>{' '}
            <span className='text-dark'>{secondPart}</span>{' '}
            <span className='text-accentpink'>{thirdPart}</span>
          </span>
  
          <Link href={link} className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
          </Link>
  
          <p className='my-2 font-normal text-dark'>{summary}</p>
  
          <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} className='rounded-lg bg-accentgreen text-light p-2 px-6 text-lg font-semibold'>Learn</Link>
  
            {githubLink && (
                <Link href={githubLink} target="_blank" className='ml-4 w-10'>
                <GithubIcon />
                </Link>
            )}

            {documentationLink && (
                <Link href={documentationLink} target="_blank" className='ml-4 rounded-lg bg-accentgreen text-light p-2 px-6 text-lg font-semibold'>
                Documentation
                </Link>
            )}
  
            <Link href={publicLink} target="_blank" className='ml-4 rounded-lg bg-accentgreen text-light p-2 px-6 text-lg font-semibold'>Visit</Link>
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
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            
            <h1 className='capitalize font-bold text-2xl mt-8'>This website is a personal project in progress (Expected finish 8/10/2023)</h1>
            <p1 className='mx-80 my-8'>
                To view my video game development work click the button below. My old website does not showcase all of my work but it 
                does showcase my most recent and most proud of projects. The remainder of my work will be published on this site shortly.
                Thank you for your patience.
            </p1>
            <Link href="https://gabi84095.wixsite.com/portfolio/portfolio" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 my-8
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-primary'
            >View my old website</Link>


            <Layout className='pt-16'>
                <AnimatedText text="Player to Creator!" className='mb-16 text-primary'/>

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Natural Disaster: A Butterfly's Guide to Mass Destruction"
                            summary="Point-and-click-inspired adventure game set in a View-Master. Explore a world in scenes and sow the seeds of disaster by virtue of the butterfly effect!"
                            link="/projects/naturalDisaster"
                            type="Steam PC Game**|**Lead Engineer & Machinima Producer"
                            img={NDHeader}
                            publicLink="/"
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project 
                            title="Acid Knockout"
                            summary="Point-and-click-inspired adventure game set in a View-Master. Explore a world in scenes and sow the seeds of disaster by virtue of the butterfly effect!"
                            link="/projects/acidKnockout"
                            type="Itch.io PC Game**|**Engineer"
                            img={AKHeader}
                            documentationLink="https://drive.google.com/drive/folders/10ZkyKRft48uq245jMRkt3JNGfs66vCVE"
                            publicLink="https://gabi-ander.itch.io/acid-knockout"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                            title="Food For Thought"
                            summary="Point-and-click-inspired adventure game set in a View-Master. Explore a world in scenes and sow the seeds of disaster by virtue of the butterfly effect!"
                            link="/projects/foodForThought"
                            type="Tabletop Simulator Game**|**Lead Engineer & Artist"
                            img={FFTHeader}
                            publicLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2567944407"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
    )
}

export default projects