import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '@/components/Common/Layout'
import DoubleColumn from '@/components/Projects/DoubleColumn'
import HoverTripleColumn from "@/components/Projects/HoverTripleColumn";
import ImageHeader from "@/components/Projects/ImageHeader";
import ImageHeaderStats from '@/components/Projects/ImageHeaderStats';
import LeftHandImage from "@/components/Projects/LeftHandImage";
import LeftHandImageBox from '@/components/Projects/LeftHandImageBox';
import LeftHandVideo from "@/components/Projects/LeftHandVideo";
import MiddleImage from "@/components/Projects/MiddleImage";
import MiddleVideo from "@/components/Projects/MiddleVideo";
import RightHandImage from "@/components/Projects/RightHandImage";
import RightHandVideo from "@/components/Projects/RightHandVideo";
import ScrollableColumn from "@/components/Projects/ScrollableColumn";
import ScrollableColumnVideo from "@/components/Projects/ScrollableColumnVideo";
import SectionTitle from "@/components/Projects/SectionTitle";
import TripleColumn from "@/components/Projects/TripleColumn";
import VerticalStackedImage from "@/components/Projects/VerticalStackedImage";
import VerticalStackedVideo from "@/components/Projects/VerticalStackedVideo";
import VideoHeader from "@/components/Projects/VideoHeader";

import testImg from "@/images/comingSoon.png"

const TestingArea = () => {
    const [screenSize, setScreenSize] = useState('')

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth } = window
            if (innerWidth <= 479) {
                setScreenSize('xs')
            } else if (innerWidth <= 639) {
                setScreenSize('sm')
            } else if (innerWidth <= 767) {
                setScreenSize('md')
            } else if (innerWidth <= 1023) {
                setScreenSize('lg')
            } else if (innerWidth <= 1279) {
                setScreenSize('xl')
            } else {
                setScreenSize('2xl')
            }
        }

        // Initial call
        handleResize()

        // Event listener for window resize
        window.addEventListener('resize', handleResize)

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <Head>
                <title>Gabi Anderson | Testing Area</title>
                <meta name="description" content="any thing here" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-8 2xl:pt-8 xl:pt-8 lg:pt-6 md:pt-6 sm:pt-6'>
                    <p className='bg-blue-200'>Current Screen Size: {screenSize}</p>
                    <LeftHandVideo
                    videoUrl={"https://www.youtube.com/watch?v=Ts15B_PoA80"}
                    title="LeftHandVideo"
                    desc="Desc"
                />
                </Layout>
            </main>
        </>
    )
}

export default TestingArea
