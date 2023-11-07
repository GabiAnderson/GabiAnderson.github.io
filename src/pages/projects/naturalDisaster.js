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
import StatsGrid from '@/components/Projects/StatsGrid';
import VideoHeaderStats from '@/components/Projects/VideoHeaderStats';

// imports for animations
import { rotateInVariant, scaleInVariant, springInVariant, fadeAndSlideInVariant, bounceInVariant } from '@/animations/ScrollAnimationVariants';

// imports for media
import { GithubIcon, TwitterIcon } from '@/components/Common/Icons';
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
import PitchDocument from "@/images/projects/naturalDisaster/OG_PitchDocument.png";
import EarlyWheelConcept from "@/images/projects/naturalDisaster/ND_EarlyWheelConcept.gif";
import ScrapbookAnimation from "@/images/projects/naturalDisaster/ND_ScrapbookAnimation.gif";
import ScrapbookConcept from "@/images/projects/naturalDisaster/ND_ScrapbookConcept.gif"; 

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
          <VideoHeaderStats
            projectName="Natural Disaster: A Butterfly's Guide to Mass Destruction"
            about="Steam Game"
            desc={`
                  Explore my journey through the EAE Capstone course at the University of Utah, a year-long endeavor that led to the creation of 
                  <em>Natural Disaster: A Butterfly’s Guide to Mass Destruction</em>, a whimsical puzzle game now available on Steam.
                  This course brought together a team of 30 developers from various disciplines, 
                  challenging us to collaborate and innovate while acting as a functioning video game studio. 
                  <br><br>
                  The team, Burning Reel Studios, utilized
                  Unreal Engine 5, Perforce, Wwise, HackNPlan, Blendr, Adobe Creative Suite, and more to develop <em>Natural Disaster</em>. I took on
                  the role of Lead Engineer while also picking up a few additional roles during development. Learn more below.
                  `}
            link="https://store.steampowered.com/app/2311140/Natural_Disaster_A_Butterflys_Guide_to_Mass_Destruction/"
            linkText="Play on Steam"
            videoUrl="https://youtu.be/vX6pijRv8NM?si=2-YN4zEJvOxlGpnL"
            pairs={[
              ['Role(s)', ['Lead Engineer', 'Machinima Producer', 'Machinima Engineer', 'Lighting Engineer', 'Artist']],
              ['Skills', ['UE Blueprints', 'Source Control', 'SDL', 'Time Management', 'Task Management',]],
              ['Tools', ['Unreal Engine 5', 'HackNPlan', 'Perforce', 'Adobe Photoshop']],
              ['Development Time', ['8 months']],
            ]}
            secondLink={false}
          />

          <div>
            <SectionTitle
              sectionTitle="Natural Disaster"
              sectionDescription="A Butterfly's Guide to Mass Destruction"
            />
            <div className='mx-16 text-center mb-16'>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div variants={bounceInVariant}>
                  {<div>
                    <div className="flex items-center mt-4">
                      <div>
                        <TextFormat className="text-md text-secondaryDark dark:text-secondaryLight mb-6 mr-8"
                          text={`<em>Natural Disaster</em> was originally pitched as a 'silly, morbid game'. The pitched emphasized the desire to have 7 locations tied together through
                          potential player actions view through a View Master. In fact, up until halfway through development, the razor pitch for all presentations and documentation was
                          <br></br>
                          "<em>Natural Disaster</em> is a point-and-click inspired adventure game set in a View Master. In which the player explores different scenes, insighting different 
                          disasters by virtue of the butterfly effect."
                          <br></br>
                          Burning Reel Studios had no desire to drastically change or alter the premise of <em>Natural Disaster</em>. However, through the standard course of development
                          it was clear the game was developing into something much bigger than a 'silly, morbid game'. This is how <em>Natural Disaster</em> is presented on Steam.
                          <br></br>
                          “Does the flap of a butterfly’s wings in Brazil set off a tornado in Texas?” –Edward Lorenz, “The Butterfly Effect”
                          <br></br>
                          Natural Disaster: A Butterfly’s Guide to Mass Destruction is a slapstick puzzle game with inspiration from point-and-click classics of how one very evil butterfly can bring down an empire. Explore a world through a stereoscope, test your limits as a teeny butterfly in a human’s world, and start chains of cause-and-effect that ripple across the seven scenes to disastrous results.
                          <br></br>
                          <strong>A SMALL WORLD OF SMALL PUZZLES</strong>
                          Investigate the environment to discover items you can carry, objects you can activate, and places you can land to find how to lead these people to their worst nightmares.
                          <br></br>
                          <strong>PLAY THROUGH A STEREOSCOPE VIEWER</strong>
                          Explore seven rich 3D locations through the lens of a stereoscope. Follow the characters through paths with multiple endings as your actions in one scene continue in another.
                          <br></br>
                          <strong>TIME LOOP TRIALS</strong>
                          Upon your death, you find yourself back at the beginning, and all of the humans’ peaceful lives restored. It’s a time loop trap…or an opportunity for new methods.
                          <br></br>
                          <strong>A BUTTERFLY NEVER FORGETS</strong>
                          Your shenanigans are logged the Scrapbook. It journals everything you’ve learned about your targets across multiple trials and is a guide for what the butterfly might be curious to try next.
                          <br></br>
                          <strong>HOLD ON…A WIZARD?</strong>
                          In all your exploits, no one seems to notice that it is a butterfly causing their misfortune. But what happens when somebody does?  
                          `} />
                      </div>
                      <Image src={PitchDocument} className={`border-4 border-solid border-secondaryColor bg-primaryColorShade3 mb-4`}
                        width={"500"} // Use provided width or default to "100%"
                        height={"600"} // Use provided height or default to "500px"
                      />
                    </div>
                  </div>}
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div>
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

              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div variants={rotateInVariant}>
                  {<div>
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
                  </div>}
                </motion.div>
              </motion.div>

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

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={fadeAndSlideInVariant}>
              {<div>
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
              </div>}
            </motion.div>
          </motion.div>

          <HoverTripleColumn
            img1={PlayableMenu_Concept}
            img2={CarryObject_Concept}
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

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={scaleInVariant}>
              {<div>
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
              </div>}
            </motion.div>
          </motion.div>

          <HoverTripleColumn
            img1={CarryableVFX_Concept}
            img2={CarryableHook_Concept}
            img3={WizardVFXConcept}
            title1="Carryable VFX Concept"
            title2="Carryable Fishing Hook Concept"
            title3="Character VFX Concept"
            desc1="After utilizing the carryable-object code I had written, the design team started to come up with path ideas that required the player to pick up VFX elements.
              <br></br>
              I altered the carryable-object code I had written to work with VFX elements instead of objects. The change required spawning and de-spawning VFX elements at the proper 
              points in the code to make it look realistic."
            desc2="Another concept that needed prototyping was the ability to carry a fishhook. It utilized the same carryable-object code I had written but required I attach the 
              object to something that looks and acts like a string when being held and when static. This concept can be seen in game by completing Chimmy's path ;)"
            desc3="Near the end of development we wanted to wrap the game up with wizard interactions. This was the plan from very early in development. I had an artist mockup a 
              wizard character. I then utilized and altered pre-existing VFX elements the team had made to showcase what the wizard could look like."
          />

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={bounceInVariant}>
              {<div>
                <HoverTripleColumn
                  img1={PathCompleteUI_Concept}
                  img2={Scanner_Concept}
                  img3={SettingsMenu_UI}
                  title1="Path Complete UI Concept"
                  title2="Object Scanner Concept"
                  title3="Settings Menu UI"
                  desc1="An example for the design team about what a completed path UI element could look like. The idea was to create a proof of concept that showcased how a path
                  complete UI could influence player experience. A more refined version of this path complete screen was eventually made as the team felt it was a positive impact to players."
                  desc2="Early in development we were received feedback that finding interactable objects was difficult. Originally, the design team had great ideas on how to utilize
                  the environment and art assets to help nudge players into what objects are interactable. If you have played <em>Natural Disaster</em>, Akash's path is an example
                  of the design team doing this.
                  <br></br>
                  Unfortunatly, due to time issues, the art team did not have the bandwidth to create all the required assets for this design idea. I was tasked with creating a proof
                  of concept that allowed the interactable objects to show themselves in the scenes when the player presses a button. This original concept can be seen here. The scanner concept
                  was a hit to players and the teaching staff so we iterated on it to have both sound and a visual cue of what was interactable in the scene."
                  desc3="I worked heavily with the UI artist and another engineer to create all UI components. As a strike team, we focused heavily on the scrapbook, main menu, and
                  the settings menu. We worked to create layerable UI assets for the menus, you can see the final version of the settings menu here."
                />
              </div>}
            </motion.div>
          </motion.div>

          <HoverTripleColumn
            img1={ScrapbookConcept}
            img2={ScrapbookAnimation}
            img3={EarlyWheelConcept}
            title1="Scrapbook Concept - Mission/Story Tracker"
            title2="UI Scrapbook Animation"
            title3="Moving Objects Concept"
            desc1="With so many different characters and stories to ruin, the design team thought of a scrapbook that could act as a mission tracker. I worked with the UI artist
            to get some base UI elements mocked up and a quick functioning prototype of what the scrapbook could look like. This concept was enough for the entire team to determine
            a scrapbook was how characters and stories should be tracked."
            desc2="After further development of the scrapbook, playtesting confirmed players were not interacting with it as much as desired. To draw attention to the scrapbook, and 
            thus attention to how to progress through the game, I made an animation mockup. This animation would play everytime the player made progress in a character's story. Eventually,
            this was further iterated on to the point when a character's story is progressed the scrapbook animates, emits a sound, and the character's photograph animates and holds a '!' 
            for future reference."
            desc3="Early in development, when large disasters were still on designers minds, we wanted to ensure we could get larger objects to move within scenes. With the help of an artist,
            we created a ferris wheel object that could rotate forward, backward, and forward quickly via player interaction. This was a very early mock-up of what would be <em>Natural Disaster's
            </em> largest narritive event which I will highlight in the next section."
          />
        </div>

        {/* Machinima Section */}
        <div>
          <SectionTitle
            sectionTitle="Machinima Producer and Engineer"
            sectionDescription="A large element of <em>Natural Disaster</em> was the dynamic narrative events. Utilizing Unreal Engine's Level Sequencer, I worked as 
              both the Machinima Producer and an engineer/artist to help create these events."
          />
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={springInVariant}>
              {<div>
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
              </div>}
            </motion.div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={scaleInVariant}>
              {<div>
                <LeftHandImage
                  img={FerrisWheelRoll}
                  title="Largest Dynamic Narrative Event"
                  desc="This sequence showcases the largest machinima element created by the machinima team, it had the most moving characters, it was the longest in terms of time,
                  it utilized the largest objects, and it was the the dynamic narrative event the team had been dreaming about for months. I was fortunate enough to get to work on this event.
                  <br></br>
                  Getting the ferris wheel to even move was a challenge, to ensure it moved at a realistic speed and in the correct directions I had to create two of it's own level sequences.
                  From there I needed to time the sub-level sequences and the clown's to make the climbing and the overall sequence look at least somewhat realistic. It took over 2 hours just
                  to get the ferris wheel to spin and roll properly before I could even think about getting the clowns and the environement to react to it."
                />
              </div>}
            </motion.div>
          </motion.div>

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

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={springInVariant}>
              {<div>
                <MiddleImage
                  img={LightingPerformanceTest}
                  title1="Lighting Overhaul"
                  desc1="I took all 7 scenes and worked with lighting elements to increase player immersion. I would rotate and change the hue of the 'sun' within sublevels, add in additional lighting 
                  (bulb, spotlight, etc), created light-emitting materials to put on objects, and work in level sequences to make lights change based on player actions. I utilized all these
                  options within each scene to customize each scene to have disctinct and realistic lighting."
                  title2="Performance Check"
                  desc2="Working in Unreal Engine 5 I had the opportunity to poke around with static, old-school dynamic, and Lumen dynamic lighting. Because each scene was in a different sub-level, 
                  each scene's lighting was in a different sub-level, and the 'sun' was in it's own sublevel I had to ensure I was thorougly testing the performance of additional lighting and 
                  lighting changes. It was important to the team that the game was still functional on developer's machines but also was able to run consistently at 30 FPS for release. I frequently
                  ran performance testing for lighting and other areas of the game."
                />

                <div className='text-center py-8 mb-16'>
                  <TextFormat className="text-4xl text-secondaryDark dark:text-secondaryLight mx-16"
                    text={`Below I have put before and after images of each scene to showcase the lighting change.`}
                  />
                </div>
              </div>}
            </motion.div>
          </motion.div>

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
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={rotateInVariant}>
            {<div>
              <SectionTitle
                sectionTitle="Artist"
                sectionDescription="Small art peices that allowed the main artists of the team to focus on the bigger art elements."
              />
              <div className='mb-24'>
                <ScrollableColumn
                  content={[
                    {
                      image: LoadingGifFinal,
                      title: 'Loading Icon',
                      description: 'Due to some of the lighting changes I made, the time it took to navigate from the main menu to the world took a few seconds. I drew up a very basic loading icon matching the theme of the game to ensure the user was looking at something instead of a black screen.',
                    },
                    {
                      image: BannerArt1,
                      title: 'Free Sample Banner Art',
                      description: 'Very simple banner art to go in the park scene.',
                    },
                    {
                      image: BannerArt2,
                      title: 'Free Sample Banner Art',
                      description: 'Very simple banner art to go in the park scene.',
                    },
                    {
                      image: BannerGif,
                      title: 'Banner Unfold Animation',
                      description: 'Utilizing the previous banner art shown and a banner 3D model, I created a fold/unfold animation that would allow us to utilize the banners during gameplay.',
                    },
                    {
                      image: LoadingGif,
                      title: 'Loading Icon - First Draft',
                      description: 'My first attempt at the loading icon that was originally supposed to be used as a concept for the art team to base the final loading icon after. Time constrains resulted in me completing the final loading icon.',
                    },
                  ]}
                />
              </div>
            </div>}
          </motion.div>
        </motion.div>

      </main>
    </>
  )
}

export default naturalDisaster