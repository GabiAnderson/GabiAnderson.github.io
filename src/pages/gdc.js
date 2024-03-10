import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Common/Layout';
import AnimatedText from '@/animations/AnimatedText';
import Image from 'next/image';
import { useRouter } from 'next/router'
import Link from 'next/link'

import { DiscordIcon2, PhoneIcon, EmailIcon } from '@/components/Common/Icons'

import GDCLogo from "../../public/images/other/GDC2024.png";

const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    );
};

const Gdc = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => {
        setIsContactModalOpen(true);
    };

    const closeContactModal = () => {
        setIsContactModalOpen(false);
    };

    return (
        <>
            <Head>
                <title>Gabi Anderson | GDC</title>
                <meta name="description" content="any thing here" />
            </Head>
            <main className='flex items-center justify-center w-full min-h-screen/0.5 dark:text-light'>
                <Layout className='pt-0 md:pt-16 sm:pt-8 flex flex-col justify-center items-center'>
                    <AnimatedText text="We connected at" className="mb-8 text-tertiaryColor sm:!text-3xl md:!text-5xl lg:!text-7xl md:mt-6 sm:mb-4" />
                    <div style={{ maxWidth: "100%", height: "auto" }}>
                        <Image src={GDCLogo} className='w-full h-auto rounded-2xl' />
                    </div>
                    <div className="mt-16 grid grid-cols-3 gap-8 lg:gap-6 md:gap-4 sm:gap-2 lg:mt-12 md:mt-6 sm:mt-4">
                        <button className="bg-secondaryColor hover:bg-secondaryColorShade3 text-white font-bold text-2xl p-6 rounded-full lg:!text-lg lg:p-4 lg:rounded-4xl md:!text-md md:rounded-2xl sm:!text-sm sm:p-2 sm:rounded-xl">
                            <CustomLink href="/about" title="Get to Know Me!" className='' />
                        </button>
                        <button className="bg-primaryColor hover:bg-primaryColorShade3 text-white font-bold text-2xl p-6 rounded-full lg:!text-lg lg:p-4 lg:rounded-4xl md:!text-md md:rounded-2xl sm:!text-sm sm:p-2 sm:rounded-xl">
                            <CustomLink href="/projects" title="My Projects!" className='' />
                        </button>
                        <button onClick={openContactModal} className="bg-secondaryColor hover:bg-secondaryColorShade3 text-white font-bold text-2xl p-6 rounded-full lg:!text-lg lg:p-4 lg:rounded-4xl md:!text-md md:rounded-2xl sm:!text-sm sm:p-2 sm:rounded-xl">
                            Let's Talk!
                        </button>
                    </div>
                </Layout>
            </main>

            {/* Contact modal */}
            {isContactModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-75 dark:bg-white"></div>
                    <div className="bg-white p-8 rounded-lg z-10 dark:bg-dark">
                        <h2 className="text-8xl font-bold mb-4 dark:text-light xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl">Contact Information</h2>
                        <div className="flex items-center mb-2 font-bold text-3xl lg:text-xl md:text-lg sm:text-md">
                            <div className=''>
                                <PhoneIcon className='w-16 h-16 lg:w-12 lg:h-12 md:w-8 md:h-8 fill-secondaryColor' strokeColor="secondaryColor" />
                            </div>
                            <div className='w-8'></div>
                            <a className="dark:text-light" href="tel:+1234567890">+1 (801) 448-1889</a>
                        </div>
                        <div className="flex items-center mb-2 font-bold text-3xl lg:text-xl md:text-lg sm:text-md">
                            <div className=''>
                                <EmailIcon className='w-16 h-16 lg:w-12 lg:h-12 md:w-8 md:h-8 fill-secondaryColor' />
                            </div>
                            <div className='w-8'></div>
                            <a className="dark:text-light" href="mailto:example@example.com">gabi84095@gmail.com</a>
                        </div>
                        <div className="flex items-center font-bold text-3xl lg:text-xl md:text-lg sm:text-md">
                            <div className=''>
                                <DiscordIcon2 className='w-16 h-16 lg:w-12 lg:h-12 md:w-8 md:h-8 fill-secondaryColor' />
                            </div>
                            <div className='w-8'></div>
                            <span className="dark:text-light">gabi_ander</span>
                        </div>
                        <button onClick={closeContactModal} className="mt-4 bg-primaryColor hover:bg-primaryColorShade3 text-white font-bold py-2 px-4 rounded-full
                        text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm"
                        >Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gdc;
