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
import HackNPlan from "@/images/projects/naturalDisaster/ND_HackNPlan.png"; 

const naturalDisaster = () => {
    return (
    <>
        <Head>
            <title>Gabi Anderson | Natural Disaster</title>
            <meta name="description" content="any thing here" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
          {/* Header / About Section */}
          <div>
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
              <TextFormat className="text-xl text-secondaryDark dark:text-secondaryLight mb-6" 
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
                  <TextFormat className="text-xl text-secondaryDark dark:text-secondaryLight mb-6 mr-8" 
                      text={`<strong><em>Natural Disaster</em> gained immense popularity among the staff and stood out as a visually impressive game. Its impact was so 
                      profound that the EAE department chose a screenshot of the game as the header image for the Master's program, despite its origin as a project within 
                      the Bachelor's program. This recognition underscored the exceptional quality and creativity that our team brought to the project.</strong>`} />
                  </div>
                <Image src={MEAE_Hompage} className={`border-4 border-solid border-secondaryColor bg-primaryColorShade3 p-2`} 
                  width={"800"} // Use provided width or default to "100%"
                  height={"300"} // Use provided height or default to "500px"
                />
              </div>
            </div>

            <div className='text-center py-8 mb-16 bg-secondaryTertiaryColor/30'>
              <TextFormat className="text-2xl text-secondaryDark dark:text-secondaryLight mx-16" 
                text={`Short development periods, small team numbers, T-shaped development experience, and wanting to make the best game possible resulted in many members of Burning Release
                Studios (<em>Natural Disaster's</em> development studio name) wearing multiple hats...including me! Below I have sectioned out my experience working on <em>Natural Disaster</em> 
                by the roles I took on, I have started from my largest/most time-intensive roles and worked downwards.
                `} 
              />
            </div>
          </div>

          {/* Lead Engineer Section */}
          <div>
            <SectionTitle
              sectionTitle="Lead Engineer"
              sectionDescription="As the Lead Engineer I took on a variety of tasks in a variety of engineering-related areas.<br></br>Hover to Learn More"
            />

            <HoverTripleColumn 
              img1={MouseControl_Concept}
              img2={HackNPlan}
              img3={SceneChange_Concept}
              title1="Mouse Control Concept"
              title2="Manage Engineering HackNPlan"
              title3="Scene Change with Trigger Concept"
              desc1="Early in development the team wanted to look into the concept of controlling player movement with the mouse.
              I developed a proof of concept showcasing the ability to control the player in a more or less 3D space with a mouse."
              desc2="As the lead engineer I was in charge of managing the engineering department's HackNPlan. This included writing up tasks/bugs, assigning individuals, 
              and updating the status as needed."
              desc3="To ensure <em>Natural Disaster</em> felt like looking through a ViewMaster, the team wanted controller support and wanted to make the scene change via 
              trigger. I set up the code to add in controller support to our previous mouse+keyboard code to handle scene changing."
            />

            <HoverTripleColumn 
              img1={PlayableMenu_Concept}
              img2={CarryableHook_Concept}
              img3={TRexBreak_Concept}
              title1="Playable Menu"
              title2="Carry Objects"
              title3="Geographical Collection Destruction Conecpt"
              desc1="Another proof of concept revolving around the desire to have the player always feel as if they are in a ViewMaster. In this instance I made a playable 
              tutorial and main menu in the same ViewMaster-looking world as the game itself, making for a unique UX."
              desc2="Interacting with the world in multiple ways was a main feature for <em>Natural Disaster</em>. After completing interaction types like zone and buttons 
              I created a proof of concept that would allow the player to pick up and drop objects which introduced a whole new way to interact with the world."
              desc3="Our amazing VFX artist created a geographical collection T-Rex which was to be used as an ending to one of our main paths. We struggled getting the 
              collection to break at the proper time in the Machinima. I worked within level sequences to make the breakable T-Rex a possibility. This is just the original
              proof of concept and first iteration, you can see the final version by completing one of Lawrence's path ;)"
            />

            <HoverTripleColumn 
              img1={ScrapbookUI_Concept}
              img2={SemesterTimeline}
              img3={LiveCharacterView}
              title1="Scrapbook UI Concept"
              title2="Semester/Release Timeline"
              title3="Live Character Customization View Concept"
              desc1="Early in development the team wanted to look into the concept of controlling player movement with the mouse.
              I developed a proof of concept showcasing the ability to control the player in a more or less 3D space with a mouse."
              desc2="As the lead engineer I was in charge of managing the engineering department's HackNPlan. This included writing up tasks/bugs, assigning individuals, 
              and updating the status as needed."
              desc3="To ensure <em>Natural Disaster</em> felt like looking through a ViewMaster, the team wanted controller support and wanted to make the scene change via 
              trigger. I set up the code to add in controller support to our previous mouse+keyboard code to handle scene changing."
            />

          </div>

          {/* Machinima Section */}
          <div>
            <SectionTitle
              sectionTitle="Machinima Producer and Engineer"
              sectionDescription="A large element of <em>Natural Disaster</em> was the dynamic narrative events. Utilizing Unreal Engine's Level Sequencer, I worked as 
              both the Machinima Producer and an engineer/artist to help create these events."
            />

            <DoubleColumn
              img1={MachinimaPipeline}
              img2={MachinimaPipelineAssignment}
              title1="Pipeline Creation"
              title2="Pipeline Assignment"
              desc1="We wanted the pipeline utilized by the machinima team to be as efficient as possible. We all had other school responsibilities and other areas of <em>Natural 
              Disaster</em> that we were working on. I sat down to iron out the best way to split the machinima team and the best way
              to define the development pipeline to ensure we were able to both complete all the machinima events but also to ensure they were well done. <br></br> As shown in the image
              above, we ironed out a process that ensured each machinima event passed through the hands of at least 3 individuals, each of which with a different skillset and a different
              goal in mind. Our designers were apart of the base team, they set up basic block outs of our machinima elements, then they passed through myself or my other engineer 
              where we polished what was given to us and added engineering elements like blended animations, VFX, and attached assets (characters holding things properly). Finally, the machinima 
              events passed to our VFX and animation artists who either marked the events as complete or did the final polish on them."
              desc2="After determining the pipeline that would best work for the machinima team I worked with a producer to hand select which members of Burning Reel Studios would be apart
              of the machinima team. I assigned each member the sub-team they would be on and provided them with what they would be tasked with.<br></br>The final element of being a producer
              for the machinima team required I ran the stand-up's, assigned tasks, managed the team's HackNPlan, and ensured the sub-teams were completing their tasks and working together."
            />

            <LeftHandImage
              img={FerrisWheelRoll}
              title="Largest Dynamic Narrative Event"
              desc="This sequence showcases the largest machinima element created by the machinima team, it had the most movement characters, it was the longest in terms of time
              it utilized the largest objects, and it was the the dynamic narrative event the team had been dreaming about for months. I was fortunate enough to get to work on this event.
              <br></br>
              Getting the ferris wheel to even move was a challenge, to ensure it moved at a realistic speed and in the correct directions I had to create two of it's own level sequences.
              From there I needed to time the sub-level sequences and the clown's to make the climbing and the overall sequence look at least somewhat realistic. It took over 2 hours just
              to get the ferris wheel to spin and roll properly before I could even think about getting the clowns and the environement to react to it."
            />

            <RightHandVideo
              videoUrl={"https://www.youtube.com/watch?v=et3UN-cRVw4&t=34s"}
              title="EAE Launch - Ferris Wheel Roll"
              desc="I was able to speak with Associate Professor and Co-Founder of the EAE Department, Roger Altizer, about the Ferris Wheel Roll during EAE Launch. 
              <br></br>
              You can watch the full video where we talk about different development insights or you can skip to 13:20 to watch the portion where we talk about the Ferris Wheel Roll."
            />
          </div>

          {/* Lighting Engineer Section */}
          <div>
            <SectionTitle
              sectionTitle="Lighting Engineer"
              sectionDescription=""
            />

            <MiddleImage
              img={LightingPerformanceTest}
              title1="Lighting Overhaul"
              desc1="I took all 7 scenes and worked with lighting elements to increase player immersion. I would rotate and change the hue of the 'sun' within sublevels, add in additional lighting 
              (bulb, spotlight, etc), created light-emitting materials to put on objects, and work in level sequences to make lights change based on player actions. I utilized all these
              options within each scene to customize each scene to have disctinct and realistic lighting.
              "
              title2="Performance Check"
              desc2="Working in Unreal Engine 5 I had the opportunity to poke around with static, old-school dynamic, and Lumen dynamic lighting. Because each scene was in a different sub-level, 
              each scene's lighting was in a different sub-level, and the 'sun' was in it's own sublevel I had to ensure I was thorougly testing the performance of additional lighting and 
              lighting changes. It was important to the team that the game was still functional on developer's machines but also was able to run consistently at 30 FPS for release. I frequently
              ran performance testing for lighting and other areas of the game."
            />

            <div className='text-center py-8 mb-16'>
              <TextFormat className="text-4xl text-secondaryDark dark:text-secondaryLight mx-16" 
                text={`Below I have put before and after images of each scene to showcase the lighting change.
                `} 
              />
            </div>

            <DoubleColumn
              img1={ArcadeLightingOld}
              img2={ArcadeLightingNew}
              title1=""
              title2=""
              desc1=""
              desc2=""
            />

            <DoubleColumn
              img1={TrainLightingOld}
              img2={TrainLightingNew}
              title1=""
              title2=""
              desc1=""
              desc2=""
            />

            <DoubleColumn
              img1={TheaterLighting}
              img2={TheaterLightingNew}
              title1=""
              title2=""
              desc1=""
              desc2=""
            />

            <DoubleColumn
              img1={PierLightingOld}
              img2={PierLightingNew}
              title1=""
              title2=""
              desc1=""
              desc2=""
            />

            <DoubleColumn
              img1={ParkLightingOld}
              img2={ParkLightingNew}
              title1=""
              title2=""
              desc1=""
              desc2=""
            />

            <DoubleColumn
              img1={PrisonLightingOld}
              img2={PrisonLightingNew}
              title1=""
              title2=""
              desc1=""
              desc2=""
            />

            <DoubleColumn
              img1={MuseumLightingOld}
              img2={MuseumLightingNew}
              title1=""
              title2=""
              desc1=""
              desc2=""
            />

          </div>

          {/* Artist Section */}
          <div>

          </div>
          

        </main>
    </>
    )
}

export default naturalDisaster