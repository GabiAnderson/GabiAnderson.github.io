import Head from 'next/head'
import React from 'react'

import DoubleColumn from "@/components/Projects/DoubleColumn";
import HoverTripleColumn from "@/components/Projects/HoverTripleColumn";
import ImageHeader from "@/components/Projects/ImageHeader";
import LeftHandImage from "@/components/Projects/LeftHandImage";
import LeftHandVideo from "@/components/Projects/LeftHandVideo";
import MiddleImage from "@/components/Projects/MiddleImage";
import MiddleVideo from "@/components/Projects/MiddleVideo";
import RightHandImage from "@/components/Projects/RightHandImage";
import RightHandVideo from "@/components/Projects/RightHandVideo";
import ScrollableColumn from "@/components/Projects/ScrollableColumn";
import ScrollableColumnVideo from "@/components/Projects/ScrollableColumnVideo";
import SectionTitle from "@/components/Projects/SectionTitle";
import TripleColumn from "@/components/Projects/TripleColumn";
import VerticalStackedImage from "@/components/Projects/VerticalStackedImage";
import VerticalStackedVideo from "@/components/Projects/VerticalStackedVideo";
import VideoHeader from "@/components/Projects/VideoHeader";

import testImg from "@/images/comingSoon.png"
import LeftHandImageBox from '@/components/Projects/LeftHandImageBox';

const projectComponentTest =() => {
    return (
    <>
        <Head>
            <title>Gabi Anderson | Acid Knockout</title>
            <meta name="description" content="any thing here" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <div className='w-full bg-gray-800' >
                <VideoHeader
                    projectName="VideoHeader"
                    role="role"
                    desc={"desc"}
                    link="\"
                    videoUrl={"https://www.youtube.com/watch?v=Ts15B_PoA80"}
                />
            </div>

            <VerticalStackedVideo
                videoUrl={"https://www.youtube.com/watch?v=Ts15B_PoA80"}
                title="LeftHandImage"
                desc="Desc"
                height="500px"
                width="700px"
            />

            <VerticalStackedImage
                img={testImg}
                title="VerticalStackedImage"
                desc="Desc"
                height="500"
                width="700"
            />

            <TripleColumn 
                img1={testImg}
                img2={testImg}
                img3={testImg}
                title1="TripleColumn"
                title2="TripleColumn"
                title3="TripleColumn"
                desc1="Desc 1"
                desc2="Desc 2"
                desc3="Desc 3"
            />

            <SectionTitle
                sectionTitle="Section Title"
                sectionDescription="Description"
            />

            <ScrollableColumnVideo
                content={[
                    {
                        videoUrl: "https://www.youtube.com/watch?v=Ts15B_PoA80",
                        title: 'ScrollableColumnVideo',
                        description: 'Description for section 1',
                    },
                    {
                        videoUrl: "https://www.youtube.com/watch?v=Ts15B_PoA80",
                        title: 'ScrollableColumnVideo2',
                        description: 'Description for section 2',
                    },
                    // Add more sections as needed
                ]}
            />

            <ScrollableColumn
                content={[
                    {
                    image: testImg, // Replace with your image path
                    title: 'ScrollableColumn',
                    description: 'Description for section 1',
                    },
                    {
                    image: testImg, // Replace with your image path
                    title: 'ScrollableColumn2',
                    description: 'Description for section 2',
                    },
                    // Add more sections as needed
                ]}
            />

            <RightHandVideo
                videoUrl={"https://www.youtube.com/watch?v=Ts15B_PoA80"}
                title="RightHandVideo"
                desc="Desc"
                height="500px"
                width="700px"
            />
        
            <RightHandImage
                img={testImg}
                title="RightHandImage"
                desc="Desc"
            />

            <MiddleVideo
                videoUrl={"https://www.youtube.com/watch?v=Ts15B_PoA80"}
                title1="Middle Video"
                title2="Middle Video"
                desc1="desc 1"
                desc2="desc2"
                height="500px"
                width="700px"
            />

            <MiddleImage
                img={testImg}
                title1="Middle Image"
                title2="Middle Image"
                desc1="desc 1"
                desc2="desc2"
            />

            <LeftHandVideo
                videoUrl={"https://www.youtube.com/watch?v=Ts15B_PoA80"}
                title="LeftHandVideo"
                desc="Desc"
                height="500px"
                width="700px"
            />

            <LeftHandImageBox
                sections={[
                    {
                    image: testImg, // Replace with your image path
                    title: 'LeftHandImageBox',
                    description: 'Description for section 1',
                    },
                    {
                    image: testImg, // Replace with your image path
                    title: 'LeftHandImageBox',
                    description: 'Description for section 2',
                    },
                    // Add more sections as needed
                ]}
            />

            <LeftHandImage
                img={testImg}
                title="LeftHandImage"
                desc="Desc"
            />

            <ImageHeader
                projectName="ImageHeader"
                role="role"
                desc={"desc"}
                link="\"
                img={testImg}
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

            <DoubleColumn
                img1={testImg}
                img2={testImg}
                title1="Double Column"
                title2="Double Column"
                desc1="Desc 1"
                desc2="Desc 2"
            />
        </main>
    </>
    )
}

export default projectComponentTest