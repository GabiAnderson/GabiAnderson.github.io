import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Common/Layout'
import AnimatedText from '@/animations/AnimatedText'

const gdc =() => {
    return (
    <>
        <Head>
            <title>Gabi Anderson | GDC</title>
            <meta name="description" content="any thing here" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText text="We met at GDC 2024!" className='mb-16 text-secondaryColor'/>
            </Layout>
        </main>
    </>
    )
}

export default gdc