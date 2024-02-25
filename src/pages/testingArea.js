import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '@/components/Common/Layout'
import DoubleColumn from '@/components/Projects/DoubleColumn'

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
                    <DoubleColumn
                    img1={testImg}
                    img2={testImg}
                    title1="testing legit double"
                    title2="testing legit double"
                    desc1="we are attempting to test a legit double column so we want actual text here"
                    desc2="we are attempting to test a legit double column so we want actual text here"
                    />
                </Layout>
            </main>
        </>
    )
}

export default TestingArea
