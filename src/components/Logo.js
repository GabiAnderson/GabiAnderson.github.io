import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/"
            className='w-16 h-16 bg-primary text-light flex items-center justify-center
            rounded-full text-2xl font-bold'
            whileHover={{
                backgroundColor:["#1AC5B0", "#37ebf3", "#9370db", "#1AC5B0", "#cb1dcd", "#149D8C", "#fdf500", "#710000", "#d1c5c0", "#e455ae", "#272932"],
                transition:{duration: 2.5, repeat: Infinity}
            }}
            >GA</MotionLink>
        </div>
    )
}

export default Logo