import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

// imports for components
import TripleColumn from '@/components/Projects/TripleColumn';
import HoverTripleColumn from '@/components/Projects/HoverTripleColumn';
import ScrollableColumn from '@/components/Projects/ScrollableColumn';
import LeftHandImageBox from '@/components/Projects/LeftHandImageBox';
import VideoHeader from '@/components/Projects/VideoHeader';
import SectionTitle from '@/components/Projects/SectionTitle';
import ImageHeader from '@/components/Projects/ImageHeader';
import DoubleColumn from '@/components/Projects/DoubleColumn';
import LeftHandImage from '@/components/Projects/LeftHandImage';
import RightHandImage from '@/components/Projects/RightHandImage';
import LeftHandVideo from '@/components/Projects/LeftHandVideo';
import RightHandVideo from '@/components/Projects/RightHandVideo';
import MiddleImage from '@/components/Projects/MiddleImage';
import MiddleVideo from '@/components/Projects/MiddleVideo';
import ScrollableColumnVideo from '@/components/Projects/ScrollableColumnVideo';
import VerticalStackedImage from '@/components/Projects/VerticalStackedImage';
import VerticalStackedVideo from '@/components/Projects/VerticalStackedVideo';
import TextFormat from '@/components/Common/TextFormat';
import StatsGrid from '@/components/Projects/StatsGrid';
import VideoHeaderStats from '@/components/Projects/VideoHeaderStats';
import MiddleText from '@/components/Projects/MiddleText';
import ImageHeaderStats from '@/components/Projects/ImageHeaderStats';

// imports for animations
import { rotateInVariant, scaleInVariant, springInVariant, fadeAndSlideInVariant, bounceInVariant } from '@/animations/ScrollAnimationVariants';

// imports for media
import Header from "@/images/projects/foodForThought/FFT_header.png";

const foodForThought =() => {
    return (
    <>
        <Head>
            <title>Gabi Anderson | Food For Thought</title>
            <meta name="description" content="any thing here" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
        {/* Header / About Section */}
        <ImageHeaderStats
            projectName="Food For Thought"
            about="Tabletop Simulator Game"
            desc={`
            <em>Food For Thought</em> is an educational strategy game reminiscent of 'The Oregon Trail.' Inspired by college life, the game teaches meal planning and 
            cooking basics while emphasizing the impact of choices on health, finances, and well-being. As a college freshman, navigate classes, socializing, 
            and meals, making choices that affect your character's day. Players learn the importance of meal prepping and balancing a busy schedule in this pixel 
            art-style game.
            <br><br>
            This game was created by 3 students at the University of Utah for Entertainment Arts and Engineering 3720: Alternative Game Development during the Summer 
            2021 semester.
            <br><br>
            Alternative Game Development is described as "examining contemporary and alternative development techniques and processes of video games, moving beyond 
            commercial gaming to map the realm of user and community created content such as mods, and web games, as well as alternative uses form video games that 
            include edutainment, military, health and political games. Students will explore the various industry roles in videogame development cycles, providing 
            students the opportunities to enact those roles in teams, creating video games together."
            `}
            link="https://steamcommunity.com/sharedfiles/filedetails/?id=2567944407"
            linkText="Download for TTS"
            img={Header}
            pairs={[
                ['Role(s)', ['Lead Engineer', 'Artist']],
                ['Skills', ['Lua', 'XML',]],
                ['Tools', ['Tabletop Sim.', 'Perforce', 'Adobe Photoshop']],
                ['Development Time', ['2 months']],
              ]}
        />

        </main>
    </>
    )
}

export default foodForThought