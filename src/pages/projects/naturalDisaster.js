import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const naturalDisaster =() => {
    return (
    <>
        <Head>
            <title>Gabi Anderson | Natural Disaster</title>
            <meta name="description" content="any thing here" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center my-16'>
            <h1 className='capitalize font-bold text-2xl'>This website is a personal project in progress (Expected finish 8/10/2023)</h1>
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
        </main>
    </>
    )
}

export default naturalDisaster