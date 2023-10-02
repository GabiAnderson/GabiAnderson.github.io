import React from 'react'
import {motion, useScroll} from 'framer-motion'


const LineIcon = ({reference}) => {
    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

    return (
        <figure className='absolute left-0 stroke-secondaryDark dark:stroke-secondaryLight'>
            <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className='stroke-primaryColor stroke-1 fill-none dark:stroke-primaryColor'/>
                <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-secondaryLight dark:fill-secondaryDark'
                style={{
                    pathLength: scrollYProgress
                }}/>
                <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-primaryColor'/>
            </svg>
        </figure>
    )
}

export default LineIcon