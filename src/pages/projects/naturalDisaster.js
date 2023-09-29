import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '@/components/Projects/Header'
import TripleColumn from '../../components/Projects/TripleColumn';
import HoverTripleColumn from '../../components/Projects/HoverTripleColumn';
import AnimatedText from '@/components/Common/AnimatedText'
import ScrollableColumn from '@/components/Projects/ScrollableColumn';
import LeftHandImageBox from '@/components/Projects/LeftHandImageBox';
import VideoHeader from '@/components/Projects/VideoHeader';
import SectionTitle from '@/components/Projects/SectionTitle';
import ImageHeader from '@/components/Projects/ImageHeader';
import DoubleColumn from '@/components/Projects/DoubleColumn';
import LeftHandImage from '@/components/Projects/LeftHandImage';
import RightHandImage from '@/components/Projects/RightHandImage';

import HeaderImg from "../../../public/images/projects/naturalDisaster/ND_header.png";
import MachinimaPipeline from "../../../public/images/projects/naturalDisaster/ND_MachinimaPipeline.png";
import ScannerCode from "../../../public/images/projects/naturalDisaster/ND_ScannerConcept_Code_1_14.png";
import ArcadeLight from "../../../public/images/projects/naturalDisaster/ND_ArcadeLighting_4_4.png";
import testGif from "../../../public/images/projects/naturalDisaster/ND_LoadingIconFinal.gif"

const naturalDisaster =() => {
    const content = [
        {
          title: 'Title 1',
          image: testGif,
          description: 'Description 1',
        },
        {
          title: 'Title 2',
          image: ScannerCode,
          description: 'Description 2',
        },
        {
            title: 'Title 3',
            image: ArcadeLight,
            description: 'Description 3',
          },
        // Add more content items as needed
      ];
    
      const sectionsData = [
        {
          image: ScannerCode,
          title: 'Section 1 Title',
          description: 'Description for section 1...',
        },
        {
          image: ArcadeLight,
          title: 'Section 2 Title',
          description: 'Description for section 2...',
        },
        // Add more sections as needed
      ];

    return (
    <>
        <Head>
            <title>Gabi Anderson | Natural Disaster</title>
            <meta name="description" content="any thing here" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <ImageHeader
                projectName="Natural Disaster" 
                role="Lead Engineer"
                shortDesc="TODO - small desc"
                link="/"
                img={ArcadeLight} />

            <RightHandImage 
                img={ArcadeLight}
                title="Lighting Engineer"
                desc="Developed the machinima pipeline, led the team, assigned tasks, and contributed actively to team tasks while producing polished machinima."
            />

            <DoubleColumn 
                img1={ArcadeLight}
                img2={MachinimaPipeline}
                title1="Lighting Engineer"
                title2="Machinima Producer"
                desc1="Sole lighting designer/engineer for 7 custom scenes. Led the design, critique, and polishing of lighting while maintaining game performance."
                desc2="Developed the machinima pipeline, led the team, assigned tasks, and contributed actively to team tasks while producing polished machinima."
            />

            <LeftHandImageBox
              sectionTitle="Section Title"
              sections={sectionsData}
            />

            <ScrollableColumn content={content} sectionTitle={"Role Breakdown"}/>

            <HoverTripleColumn 
                sectionTitle="Role Breakdown"
                img1={ArcadeLight}
                img2={MachinimaPipeline}
                img3={ScannerCode}
                title1="Lighting Engineer"
                title2="Machinima Producer"
                title3="Engineer"
                desc1="Sole lighting designer/engineer for 7 custom scenes. Led the design, critique, and polishing of lighting while maintaining game performance."
                desc2="Developed the machinima pipeline, led the team, assigned tasks, and contributed actively to team tasks while producing polished machinima."
                desc3="Conceptualized features, developed systems, and provided general engineering support for game development."
            />

            <SectionTitle
              sectionTitle="Testing"
              sectionDescription="more testing" />
            <TripleColumn 
                img1={ArcadeLight}
                img2={MachinimaPipeline}
                img3={ScannerCode}
                title1="Lighting Engineer"
                title2="Machinima Producer"
                title3="Engineer"
                desc1="Sole lighting designer/engineer for 7 custom scenes. Led the design, critique, and polishing of lighting while maintaining game performance."
                desc2="Developed the machinima pipeline, led the team, assigned tasks, and contributed actively to team tasks while producing polished machinima."
                desc3="Conceptualized features, developed systems, and provided general engineering support for game development."
            />
        </main>
    </>
    )
}

export default naturalDisaster