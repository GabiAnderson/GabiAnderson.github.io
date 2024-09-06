import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Common/Layout'
import AnimatedText from '@/animations/AnimatedText'
import profilePic from "../../public/images/profile/ProfilePic.jpeg";
import Link from 'next/link'
import { LinkArrow } from '@/components/Common/Icons'
import ConnectWithMe from '@/components/Home/ConnectWithMe'
import controller from "../../public/images/home/controller.png";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>

        <title>Gabi Anderson</title>

        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen/0.5 dark:text-light'>
        
        <Layout className='pt-0 md:pt-16 sm:pt-8 flex flex-col justify-center items-center'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-3/4'>

              <Image src={profilePic} alt="ProfilePhoto" className='w-[70%] h-auto mx-auto rounded-3xl lg:inline-block lg:w-full'
              priority
              sizes="(max-width: 768px) 100vs, (max-width: 1200px) 50vw, 50vw" />
            
            </div>
            
            <div className='w-1/2 flex flex-col self-center lg:w-full lg:text-center'>

              <h1 className="text-6xl text-left xl:text-5xl lg:text-center lg:text-6xl md:text-4xl sm:text-2xl">
                <span className="text-primaryColor">Gabi </span>Anderson
              </h1>

              <AnimatedText text="Concepts to Code: Building Practical Software Solutions." className='!text-3xl !text-left 
              xl:!text-2xl lg:!text-center lg:!text-3xl md:!text-2xl sm:!text-xl
              mt-4 text-secondaryDark dark:text-secondaryLight' />
              
              <p className='my-4 text-base font-medium text-tertiaryDark dark:tertiaryLight md:text-small sm:text-xs'>As a recent computer science graduate with a strong foundation in software development and a passion for innovative solutions, I&apos;m on a mission to build efficient, user-friendly, and impactful applications. Explore my projects that blend creativity, technology, and problem-solving to deliver exceptional results across various domains.
              </p>
              
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/GabrielaAnderson_Resume.pdf" target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-primaryColor
                  dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base sm:p-1.5 sm:px-2 sm:text-sm'
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                
                <Link href="mailto:gabi84095@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitilize text-dark border-b-2 border-b-primaryColor hover:border-b-tertiaryColor dark:text-light md:text-base sm:text-sm'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <ConnectWithMe />
      </main>
    </>
  )
}
