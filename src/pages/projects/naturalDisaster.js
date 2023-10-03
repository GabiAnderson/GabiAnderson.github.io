// imports for standard usage
import React from 'react'
import { motion } from 'framer-motion';
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

// imports for animations
import { rotateInVariant, scaleInVariant } from '@/animations/ScrollAnimationVariants';

// imports for media
import HeaderImg from "@/images/projects/naturalDisaster/ND_header.png";
import MachinimaPipeline from "@/images/projects/naturalDisaster/ND_MachinimaPipeline.png";
import ScannerCode from "@/images/projects/naturalDisaster/ND_ScannerConcept_Code_1_14.png";
import ArcadeLight from "@/images/projects/naturalDisaster/ND_ArcadeLighting_4_4.png";
import testGif from "@/images/projects/naturalDisaster/ND_LoadingIconFinal.gif"

const naturalDisaster = () => {
    return (
    <>
        <Head>
            <title>Gabi Anderson | Natural Disaster</title>
            <meta name="description" content="any thing here" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
 
          <VideoHeader
            projectName="Natural Disaster" 
            role="Lead Engineer"
            desc={`
                Explore my journey in the Final Capstone course at the University of Utah, a year-long endeavor that led to the creation of 
                <em>Natural Disaster: A Butterfly’s Guide to Mass Destruction</em>, a whimsical puzzle game now available on Steam.
                <br><br>
                This course brought together a team of 30 developers from various disciplines, 
                challenging us to collaborate and innovate while acting as a functioning video game studio.
                `}
            link="/"
            videoUrl="https://youtu.be/vX6pijRv8NM?si=2-YN4zEJvOxlGpnL" 
          />

          <SectionTitle
            sectionTitle="About My Capstone Experience"
            sectionDescription="The University of Utah Entertainment Arts and Engineering's Final Class"
          />

          <div className='mx-16 text-center'>
            <TextFormat className="text-2xl text-secondaryDark dark:text-secondaryLight mb-6" 
              text={`The purpose of a capstone course is to provide students with a venue to test and explore the skills they have learned throughout their academic 
              careers and to provide them with guidance in abstracting their experience. In the EAE capstone course, students were tasked with making a videogame 
              from the ground up. They followed an industry model and worked in teams to accomplish this goal. Professors contributed to the process by acting as 
              technical and creative producers on the project, while students filled all engineering, creative, and administrative duties on the teams.
              <br><br>
              Within this context, working in smaller teams and adhering to shorter development timelines meant that students had to wear multiple hats. 
              This multifaceted experience allowed me to take on various roles within the framework of <em>Natural Disaster</em>. In addition to my primary role as a 
              lead engineer, I also contributed as a lighting engineer, UI/UX engineer, machinima producer, machinima engineer, and more. This dynamic and 
              collaborative environment challenged me to adapt and excel in various domains, enhancing my skills and knowledge in the process.
              <br><br>
              The games created in the capstone course were similar in scope and design to those found on platforms like Steam or Itch.io. This challenge 
              not only provided us with outstanding additions to our portfolios but also pushed us intellectually and personally.
              <br><br>
              By the end of the course, students had the opportunity to experience the full spectrum of the game development process. We thrived in an 
              interdisciplinary environment, interacting not only with students and faculty from across campus but also collaborating with various professionals 
              in the field. This rich tapestry of experiences enriched our educational journey and prepared us for the diverse and ever-evolving world of game development.`}
            />
          </div>

          <SectionTitle
            sectionTitle="Lead Engineer"
            sectionDescription=""
          />

        </main>
    </>
    )
}

export default naturalDisaster