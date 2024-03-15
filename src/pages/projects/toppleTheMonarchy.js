import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/Common/Layout'
import ComingSoonSection from '@/components/Common/ComingSoonSection'

const toppleTheMonarchy =() => {
    return (
    <>
        <Head>
            <title>Gabi Anderson | Topple The Monarchy</title>
            <meta name="description" content="any thing here" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center my-16'>
            <Layout>
            <ComingSoonSection />
            </Layout>
        </main>
    </>
    )
}

export default toppleTheMonarchy