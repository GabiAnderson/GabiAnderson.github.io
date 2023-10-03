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
import MEAE_Hompage from "@/images/projects/naturalDisaster/MEAE_HomepagePartial.png";
import ArcadeLightingNew from "@/images/projects/naturalDisaster/ND_ArcadeLighting_4_4.png";
import BannerArt1 from "@/images/projects/naturalDisaster/ND_BannerArt_1.png"
import BannerArt2 from "@/images/projects/naturalDisaster/ND_BannerArt_2.png"
// TODO image of banner art 3
import BannerGif from "@/images/projects/naturalDisaster/ND_BannerUnroll.gif"
import TRexBreak_Concept from "@/images/projects/naturalDisaster/ND_BreakableTRexMachinimaConcept_11_28.gif";
import CarryableHook_Concept from "@/images/projects/naturalDisaster/ND_CarryableFishhookLineConcept_1_29.gif";
import CarryableVFX_Concept from "@/images/projects/naturalDisaster/ND_CarryableVFXConcept_1_29.gif";
import CarryObject_Concept from "@/images/projects/naturalDisaster/ND_CarryConcept_10_22.gif";
import FerrisWheelRoll from "@/images/projects/naturalDisaster/ND_FerrisWheelRoll_4_4.gif";
import LightingPerformanceTest from "@/images/projects/naturalDisaster/ND_LightingPerformanceComparison_2_7.gif";
import LiveCharacterView from "@/images/projects/naturalDisaster/ND_LiveCharacterChangeView_Concept_3_23.png";
import LoadingGif from "@/images/projects/naturalDisaster/ND_LoadingIcon_4_4.gif";
import LoadingGifFinal from "@/images/projects/naturalDisaster/ND_LoadingIconFinal.gif";
import MachinimaPipelineAssignment from "@/images/projects/naturalDisaster/ND_MachinimaPipeline_3_22.png";
import MachinimaPipeline from "@/images/projects/naturalDisaster/ND_MachinimaPipeline.png";
import MouseControl_Concept from "@/images/projects/naturalDisaster/ND_MouseControlConcept_9_20.gif";
import MuseumLightingNew from "@/images/projects/naturalDisaster/ND_MuseumLighting_4_4.png";
import ParkLightingNew from "@/images/projects/naturalDisaster/ND_ParkLighting_4_4.png";
import PathCompleteUI_Concept from "@/images/projects/naturalDisaster/ND_PathCompleteUIConecpt_4_20.png";
import PierLightingNew from "@/images/projects/naturalDisaster/ND_PierLighting_4_4.png";
import PlayableMenu_Concept from "@/images/projects/naturalDisaster/ND_PlayableMainMenuConcept_1_19.gif";
import PrisonBigWizard_Concept from "@/images/projects/naturalDisaster/ND_PrisonBigWizardConcept_4_5.gif";
import PrisonLightingNew from "@/images/projects/naturalDisaster/ND_PrisonLighting_4_4.png";
import Scanner_ConceptCode from "@/images/projects/naturalDisaster/ND_ScannerConcept_Code_1_14.png";
import Scanner_Concept from "@/images/projects/naturalDisaster/ND_ScannerMachinimaVFXConcept_2_8.gif";
import ScrapbookUI_Concept from "@/images/projects/naturalDisaster/ND_ScrapbookPage_Lawrence_11_28.png";
import SemesterTimeline from "@/images/projects/naturalDisaster/ND_SecondSemesterTimeline.png";
import SettingsMenu_UI from "@/images/projects/naturalDisaster/ND_SettingsMenu_4_24.png";
import SteamHeader from "@/images/projects/naturalDisaster/ND_SteamHeader.png";
import TeamPhoto from "@/images/projects/naturalDisaster/ND_TeamPhoto_12_8.png";
import TheaterLightingNew from "@/images/projects/naturalDisaster/ND_TheaterLighting_4_4.png";
import TrainLightingNew from "@/images/projects/naturalDisaster/ND_TrainLighting_4_4.png";
import SceneChange_Concept from "@/images/projects/naturalDisaster/ND_TriggerSceneChangeConcept_10_7.gif";
import TutorialUIOld from "@/images/projects/naturalDisaster/ND_Tutorial_4_11.png";
import TutorialUI1 from "@/images/projects/naturalDisaster/ND_Tutorial_4_11.png";
import TutorialUI2 from "@/images/projects/naturalDisaster/ND_Tutorial_4_22_2.png";
import TutorialUI3 from "@/images/projects/naturalDisaster/ND_Tutorial_4_22_3.png";
import TutorialUI4 from "@/images/projects/naturalDisaster/ND_Tutorial_4_22_4.png";
import TutorialUI5 from "@/images/projects/naturalDisaster/ND_Tutorial_4_22_5.png";
import WizardVFXConcept from "@/images/projects/naturalDisaster/ND_WizardVFXConcept_4_16.gif";
import ArcadeLightingOld from "@/images/projects/naturalDisaster/ArcadeLightingOld.png";
import MuseumLightingOld from "@/images/projects/naturalDisaster/MuseumLightingOld.png";
import PierLightingOld from "@/images/projects/naturalDisaster/PierLightingOld.png";
import PrisonLightingOld from "@/images/projects/naturalDisaster/PrisonLightingOld.png";
import TheaterLighting from "@/images/projects/naturalDisaster/TheaterLightingOld.png";
import ParkLightingOld from "@/images/projects/naturalDisaster/ParkLightingOld.png";
import TrainLightingOld from "@/images/projects/naturalDisaster/TrainLightingOld.png";

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

          <HoverTripleColumn 
            img1={testImg}
            img2={testImg}
            img3={testImg}
            title1="HoverTripleColumn"
            title2="HoverTripleColumn"
            title3="HoverTripleColumn"
            desc1="Desc 1"
            desc2="Desc 2"
            desc3="Desc 3"
          />

        </main>
    </>
    )
}

export default naturalDisaster