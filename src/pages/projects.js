import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {motion} from 'framer-motion';
import Layout from '@/components/Common/Layout'
import AnimatedText from '@/components/Common/AnimatedText'
import { GithubIcon } from '@/components/Common/Icons'
import NDHeader from "../../public/images/projects/naturalDisaster/ND_header.png";
import AKHeader from "../../public/images/projects/acidKnockout/AK_header.png";
import FFTHeader from "../../public/images/projects/foodForThought/FFT_header.png";
import CRRHeader from "../../public/images/projects/classRegistrationRedesign/CRR_header.png";
import LSHeader from "../../public/images/projects/lifeStyleApp/LS_header.png";
import RGHeader from "../../public/images/projects/relocationGame/RG_header.png";
import TTMHeader from "../../public/images/projects/toppleTheMonarchy/TTM_header.png";
import WRHeader from "../../public/images/projects/wingedRemnants/WR_header.png";

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, githubLink, documentationLink, publicLink}) => {
    // Split the "type" prop into three parts based on spaces
    const typeParts = type.split('**');
    const firstPart = typeParts[0];
    const secondPart = typeParts[1];
    const thirdPart = typeParts.slice(2).join('**');

    return (
        <article className='w-full flex items-center justify-between first-letter rounded-3xl border border-solid 
        border-primary bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-primary rounded-br-3xl'/>

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
                    <span className='text-primary'>{firstPart}</span>{' '}
                    <span className='text-dark dark:text-light'>{secondPart}</span>{' '}
                    <span className='text-accentpink'>{thirdPart}</span>
                </span>

                <Link href={link} className='hover:underline underline-offset-2 dark:text-light'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>

                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>

                <div className='mt-2 flex items-center'>
                    <Link href={link} className='rounded-lg bg-accentgreen text-light p-2 px-6 text-lg font-semibold'>Learn More</Link>

                    {githubLink && (
                        <Link href={githubLink} target="_blank" className='ml-4 w-10'>
                        <GithubIcon className='dark:fill-light' />
                        </Link>
                    )}

                    {documentationLink && (
                        <Link href={documentationLink} target="_blank" className='ml-4 rounded-lg bg-accentgreen text-light p-2 px-6 text-lg font-semibold'>
                        Documentation
                        </Link>
                    )}

                    {publicLink && (
                        <Link href={publicLink} target="_blank" className='ml-4 rounded-lg bg-accentgreen text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
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
      border border-solid border-primary bg-light p-6 relative rounded-br-2xl dark:bg-dark'>

        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-primary rounded-br-3xl'/>

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
            <span className='text-primary'>{firstPart}</span>{' '}
            <span className='text-dark dark:text-light'>{secondPart}</span>{' '}
            <span className='text-accentpink'>{thirdPart}</span>
          </span>
  
          <Link href={link} className='hover:underline underline-offset-2 dark:text-light'>
            <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>{title}</h2>
          </Link>
  
          <p className='my-2 font-normal text-dark dark:text-light'>{summary}</p>
  
          <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} className='rounded-lg bg-accentgreen text-light p-2 px-6 text-lg font-semibold'>Learn</Link>
  
            {githubLink && (
                <Link href={githubLink} target="_blank" className='ml-4 w-10'>
                <GithubIcon className='dark:fill-light' />
                </Link>
            )}

            {documentationLink && (
                <Link href={documentationLink} target="_blank" className='ml-4 rounded-lg bg-accentgreen text-light p-2 px-6 text-lg font-semibold'>
                Documentation
                </Link>
            )}
  
            {publicLink && (
                <Link href={publicLink} target="_blank" className='ml-4 rounded-lg bg-accentgreen text-light p-2 px-6 text-lg font-semibold'>Visit</Link>
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
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Player to Creator!" className='mb-16 text-primary'/>

                <div className='w-full mb-16 flex flex-col items-center justify-center'>
                    {/* Apply the custom CSS classes to each part of the "type" prop */}
                    <span className='font-bold text-3xl'>
                        <span className='text-dark dark:text-light'>Coming Soon:</span>{' '}
                        <span className='text-accentblue'>Winged Remnants!</span>
                    </span>
                </div>

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Natural Disaster: A Butterfly's Guide to Mass Destruction"
                            summary="Point-and-click-inspired adventure game set in a View-Master. Explore a world in scenes and sow the seeds of disaster by virtue of the butterfly effect!"
                            link="/projects/naturalDisaster"
                            type="Steam PC Game**|**Lead Engineer & Machinima Producer"
                            img={NDHeader}
                            publicLink="https://store.steampowered.com/app/2311140/Natural_Disaster_A_Butterflys_Guide_to_Mass_Destruction/"
                        />
                    </div>

                    <div className='col-span-6 my-8'>
                        <Project 
                            title="Acid Knockout"
                            summary="A cute-horror King of the Hill style game with retro-inspired art, blending elements from Super Smash Bros. Ultimate and Brawlhalla, featuring static levels with fast-paced enemy waves and pickups."
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
                            summary="An educational game for college students to learn cooking, budgeting, and healthy eating by making choices throughout the day and receiving updates on calorie intake, meal enjoyment, and expenses, encouraging meal planning in an enjoyable way."
                            link="/projects/foodForThought"
                            type="Tabletop Simulator Game**|**Lead Engineer & Artist"
                            img={FFTHeader}
                            publicLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2567944407"
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project 
                            title="Topple the Monarchy"
                            summary="A cute-horror King of the Hill style game with retro-inspired art, blending elements from Super Smash Bros. Ultimate and Brawlhalla, featuring static levels with fast-paced enemy waves and pickups."
                            link="/projects/toppleTheMonarchy"
                            type="Board Game**|**Designer & Developer"
                            img={TTMHeader}
                            publicLink="https://docs.google.com/document/d/1IY0Id8ovoLf4SJwEQcItqtVXUfln9af1LqTiZzHyV4U/edit?usp=sharing"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                            title="Relocation"
                            summary="An educational game for college students to learn cooking, budgeting, and healthy eating by making choices throughout the day and receiving updates on calorie intake, meal enjoyment, and expenses, encouraging meal planning in an enjoyable way."
                            link="/projects/relocationGame"
                            type="Game Pitch**|**Concept Creator"
                            img={RGHeader}
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project 
                            title="Class Planning, Registration and Payment Redesign"
                            summary="Redesigned of the University of Utah's course planning, registration, and payment process, which previously involved using 3+ separate websites, by integrating all functionalities into one cohesive platform based on feedback from current students and usability testing with new students to ensure a more streamlined and user-friendly experience."
                            link="/projects/classRegistrationRedesign"
                            type="UI/UX Redesign**|**Lead Designer & Developer"
                            img={CRRHeader}
                            publicLink="https://xd.adobe.com/view/07355284-4ae7-4ef7-8050-77f1925779d9-5266/screen/ac3fbf1c-dfd2-41a1-8541-c081f95f47ed?fullscreen"
                        />
                    </div>
                    <div className='col-span-6 my-8'>
                        <Project 
                            title="LifeStyle"
                            summary="An Android mobile application, featuring user login with data storage, local weather information, nearby hike suggestions, and calculations for BMR, BMI, calorie count, and weight loss goals, designed in Figma or Adobe XD and developed for Android devices."
                            link="/projects/lifeStyleApp"
                            type="Mobile Application**|**Lead Designer & Developer"
                            img={LSHeader}
                            publicLink="https://xd.adobe.com/view/652b2627-9a8b-4ecb-ae86-87b1dfe92eed-3078/?fullscreen"
                            githubLink="https://github.com/GabiAnderson/CS4530---Mobile-Applications"
                        />
                    </div>
                    
                </div>
            </Layout>
        </main>
    </>
    )
}

export default projects