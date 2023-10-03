// imports for standard usage
import React from 'react'
import { motion } from 'framer-motion';
import Head from 'next/head'
import Image from 'next/image';

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

          <div className='mx-16 text-center mb-16'>
            <TextFormat className="text-2xl text-secondaryDark dark:text-secondaryLight mb-6" 
              text={`The capstone course aimed to test and apply the skills acquired throughout our academic journey while providing guidance in abstracting our 
              experiences. In the EAE capstone course, our challenge was to create a video game from the ground up. Following an industry model, we worked collaboratively 
              in smaller teams, with students taking on engineering, creative, and administrative roles.
              <br><br>
              This context required us to wear multiple hats due to smaller teams and shorter development timelines. Within the framework of <em>Natural Disaster</em>, I took on 
              various roles, including lead engineer, lighting engineer, UI/UX engineer, machinima producer, and more. This dynamic environment fostered adaptation and skill 
              enhancement.
              <br><br>
              Our games resembled those on platforms like Steam or Itch.io, offering an excellent addition to our portfolios. This challenge pushed us intellectually and 
              personally. By course end, we'd experienced the full game development process and thrived in an interdisciplinary setting, collaborating with peers, faculty, 
              and industry professionals.
              `} 
            />
            <div className="flex items-center mt-16">
              <div>
                <TextFormat className="text-2xl text-secondaryDark dark:text-secondaryLight mb-6 mr-8" 
                    text={`<strong><em>Natural Disaster</em> gained immense popularity among the staff and stood out as a visually impressive game. Its impact was so 
                    profound that the EAE department chose a screenshot of the game as the header image for the Master's program, despite its origin as a project within 
                    the Bachelor's program. This recognition underscored the exceptional quality and creativity that our team brought to the project.</strong>`} />
                </div>
              <Image src={MEAE_Hompage} className={`border-4 border-solid border-secondaryColor bg-primaryColorShade3 p-2`} 
                width={"1000"} // Use provided width or default to "100%"
                height={"500"} // Use provided height or default to "500px"
              />
            </div>
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