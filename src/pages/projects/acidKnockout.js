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
import Credits from "@/images/projects/acidKnockout/AK_Credits.gif";
import Flamethrower from "@/images/projects/acidKnockout/AK_FlamethrowerPop.jpg";
import GameOver from "@/images/projects/acidKnockout/AK_GameOver.gif";
import HealthBar from "@/images/projects/acidKnockout/AK_HealthBar.png";
import Health from "@/images/projects/acidKnockout/AK_HealthPop.jpg";
import MainMenu from "@/images/projects/acidKnockout/AK_MainMenu.gif";
import PowerUp from "@/images/projects/acidKnockout/AK_PowerUp.gif";
import Score from "@/images/projects/acidKnockout/AK_Score.png";
import Settings from "@/images/projects/acidKnockout/AK_SettingsUI.png";
import Shotgun from "@/images/projects/acidKnockout/AK_ShotgunPop.jpg";
import Theme from "@/images/projects/acidKnockout/AK_ThemeSong.png";
import Title from "@/images/projects/acidKnockout/AK_TitleScreen.png";
import AcidDripSpriteSheet from "@/images/projects/acidKnockout/AK_AcidDripSpriteSheet.png";
import AcidDripGif from "@/images/projects/acidKnockout/AK_AcidDripGif.gif";
import BlankImage from "@/images/BlankImage.png";

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

                    <RightHandImage
                        img={MainMenu}
                        title="Menus and PopUps"
                        desc="As the lead UI/UX Engineer, my responsibilities included the design, development, and implementation of various UI/UX components, such as menu 
                        screens like the Main Menu screen shown here. The typical workflow involved identifying the need for a new UI/UX element, which could arise from my 
                        insights, playtesting, or input from other developers. Subsequently, I would create a preliminary mockup on paper, followed by collaborative discussions 
                        with the the UI artist to ensure the layout and functionality met our goals. Once approved, the UI artist would produce the necessary 
                        assets, which I would then integrate into Unreal Engine, adhering to the original sketch's structure. Finally, I would utilize Unreal Engine blueprints 
                        to add functionality to the element."
                        width={1100}
                    />

                    <VerticalStackedImage
                        img={PowerUp}
                        title="Pop Ups!"
                        desc="Because <em>Acid Knockout</em> was designed to be a fast-paced game, it was important to ensure the player could understand what was happening quickly
                        and easily without taking away from the playing experience. One big element of the king-of-the-hill-style games we enjoyed were the power-ups. We implemented our
                        own versions - flamethrower, shotgun, and health boost. It was clear after a few rounds of playtesting that players wanted to be told what exactly they were picking
                        up.
                        <br></br>
                        I implemented a very quick pop-up that would display to the player what they had unlocked. Above is a gif of how the element 'pops' into and out of view. In reality
                        it is less of a 'pop' and more of a 'fade' as the idea was to ensure it was clear enough to see and read but not to abrupt that it took away from gameplay.
                        <br></br>
                        <strong>Below are the 3 different versions for the 3 different power-ups.</strong>"
                    />

                    <TripleColumn
                        img1={Shotgun}
                        img2={Health}
                        img3={Flamethrower}
                        title1=""
                        title2=""
                        title3=""
                        desc1=""
                        desc2=""
                        desc3=""
                    />

                    <LeftHandImage
                        img={AcidDripGif}
                        title="Custom UI Asset"
                        desc="To liven up the menu's and other UI elements, I created an acid drip sprite sheet which I converted into an animation.
                        <br></br>
                        This asset can be found on the main menu and the player's health bar."
                        width={1100}
                    />

                    <div className='col-span-9 text-center pb-8 mt-8'>
                        <TextFormat className='text-tertiaryColor font-bold text-4xl' text="Hover to Learn More" />
                    </div>

                    <HoverTripleColumn
                        img1={Credits}
                        img2={Settings}
                        img3={GameOver}
                        title1="Rolling Credits"
                        title2="Functional Settings"
                        title3="Game Over"
                        desc1="Found on the main menu, if the Credits button is pressed a rolling credits screen is played before exiting back to the main menu."
                        desc2="Due to the short development time, the amount of settings was very minimal. But due to the fast-paced nature of the game, it was important
                        to us to ensure any and all distractions could be altered. Thus, both the background music and the sound effects volume can be custom set."
                        desc3="Whether it be falling through a crack or dying to a Gobby, Friggy, or Jummy, a Game Over screen will be shown with the ability to 
                        exit back to the main menu."
                    />

                    <HoverTripleColumn
                        img1={HealthBar}
                        img2={BlankImage}
                        img3={Score}
                        title1="Health Bar"
                        title2=""
                        title3="Score"
                        desc1="Tied into the player character and the 3 different enemy types, when damage is taken, the length of the health bar decreases based on how much
                        damage was taken and how much health was remaining."
                        desc2=""
                        desc3="Each of the 3 enemy types has a different score based on how many bullets it requires to kill them. This score increments up as the player kills more
                        enemies."
                        width2={100}
                        height2={5}
                        height3={100}
                        width3={300}
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