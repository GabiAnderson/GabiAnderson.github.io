import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/"
            className='w-16 h-16 bg-primaryColor text-light flex items-center justify-center
            rounded-full text-2xl font-bold'
            whileHover={{
                backgroundColor:[ "#222222", "#c4c4c4", "#3b3b3b", "#bababa", "#5b9a8b", "#445069", "#f7e987" ],
                transition:{duration: 2.5, repeat: Infinity}
            }}
            >GA</MotionLink>
        </div>
    )
}

export default Logo