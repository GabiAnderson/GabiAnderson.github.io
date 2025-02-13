import React from 'react'
import { CircularText } from '../Common/Icons'
import Link from 'next/link'

const ConnectWithMe = () => {
    return (
        <div className='fixed left-4 bottom-4
        flex items-center justify-center overflow-hidden
        md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute'
        >
            <div className='w-48 h-auto flex items-center justify-center relative md:w-24 sm:w-16'>
                <CircularText className={"fill-dark animate-spin-slow dark:fill-light"}/>

                <Link href="https://linkedin.com/in/gabriela-anderson" target={'_blank'} className='flex items-center justify-center 
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark 
                text-light shadow-md border border-solid border-dark
                w-32 h-32 rounded-full font-semibold hover:bg-light hover:text-primaryColor hover:border-primaryColor hover:border-b-5 text-center
                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-primaryColor
                md:w-12 md:h-12 md:text-[10px]
                sm:w-8 sm:h-8 sm:text-[6px]'>
                    Connect w/ Me
                </Link>
            </div>
        </div>
    )
}

export default ConnectWithMe