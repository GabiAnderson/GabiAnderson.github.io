// imports for standard usage
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

// imports for animations
import { rotateInVariant, scaleInVariant, springInVariant, fadeAndSlideInVariant, bounceInVariant } from '@/animations/ScrollAnimationVariants';

// imports for media
import AKHeader from "@/images/projects/acidKnockout/AK_header.png";

const acidKnockout = () => {
    return (
        <>
            <Head>
                <title>Gabi Anderson | Acid Knockout</title>
                <meta name="description" content="any thing here" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                {/* Header / About Section */}
                <div>
                    <VideoHeaderStats
                        projectName="Acid Knockout"
                        about="Itch.io Game"
                        desc={`
                        <em>Acid Knockout</em> is a king of the hill style game with a cute-horror art style designed to encompasses the basic functionality of traditional games 
                        like Super Smash Bros. Ultimate (2018), and Brawlhallo (2014). The art style is retro cute-horror inspired by Mega Man Legacy Collection 2 (2015) and ACA 
                        Neo-Geo Metal Slug V (2013). The game is designed around a core gameplay loop that involves a static level with fast-paced waves of spawning enemies and 
                        pickups.
                        <br><br>
                        This game was created by 6 students at the University of Utah for Entertainment Arts and Engineering 3710: Traditional Game Development during the Spring 
                        2021 semester.
                        <br><br>
                        Traditional Game Development is describe as "exploring game development essentials through lectures, discussions, and hands-on activities. Students hone 
                        their skills in pitching original game ideas, using traditional game design techniques, and crafting games within agile teams. The course delves into 
                        game theory, fostering the ability to present and lead postmortems. The course combines theory with practice, with students gradually taking on more 
                        active roles."
                        `}
                        link="https://gabi-ander.itch.io/acid-knockout"
                        linkText="Play on Itch.io"
                        videoUrl="https://www.youtube.com/watch?v=0IJXUtnOKJU"
                        pairs={[
                            ['Role(s)', ['UI/UX Engineer', 'General Engineer', 'Composer', 'Producer']],
                            ['Skills', ['UE Blueprints', 'Source Control', 'SDL']],
                            ['Tools', ['Unreal Engine 4', 'Perforce', 'Bandlab']],
                            ['Development Time', ['2.5 months']],
                        ]}
                    />
                </div>

                {/* UI/UX Engineer */}
                <div>
                    <SectionTitle
                        sectionTitle="UI/UX Engineer"
                        sectionDescription=""
                    />
                </div>

                {/* General Engineer */}
                <div>
                    <SectionTitle
                        sectionTitle="General Engineer"
                        sectionDescription=""
                    />
                </div>

                {/* Composer */}
                <div>
                    <SectionTitle
                        sectionTitle="Composer"
                        sectionDescription=""
                    />
                </div>

                {/* Producer */}
                <div>
                    <SectionTitle
                        sectionTitle="Producer"
                        sectionDescription=""
                    />
                </div>
            </main>
        </>
    )
}

export default acidKnockout