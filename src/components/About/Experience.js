import React, {useRef, useState} from 'react'
import { motion, useScroll } from 'framer-motion'
import LineIcon from '@/components/About/LineIcon'
import TextFormat from '../Common/TextFormat';

const Details = ({ position, company, companyLink, time, address, work, bullets, brandColor }) => {
    const [showDetails, setShowDetails] = useState(false);
    const ref = useRef(null);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%] md:my-4'>

            <LineIcon reference={ref} />

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl dark:text-primaryLight md:text-lg mb-2'>
                    {position}&nbsp;
                    <a href={companyLink}
                        target='_blank'
                        style={{ color: brandColor }}
                        className='capitalize'>
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-secondaryDark dark:text-secondaryLight md:text-sm'>
                    {time} | {address}
                </span>
                <TextFormat className='font-medium w-full text-tertiaryDark dark:text:tertiaryLight md:text-sm mt-2' text={work} />

                <div style={{ display: showDetails ? 'block' : 'none' }}>
                    <TextFormat className='font-medium w-full text-tertiaryDark dark:text:tertiaryLight md:text-sm mt-2' text={bullets} />
                </div>

                <button 
                    onClick={toggleDetails} 
                    style={{ color: brandColor, textDecoration: 'underline', cursor: 'pointer' }}
                    className={`mt-${showDetails ? '2' : '0'}`}>
                    {showDetails ? 'Hide Details' : 'See Details'}
                </button>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-14'>
            <h2 className='font-bold text-8xl mb-16 w-full text-center text-tertiaryColor sm:!text-3xl md:!text-5xl lg:!text-7xl'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                style={{scaleY: scrollYProgress}}/>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details 
                        position="Software Test Engineer"
                        company="Cricut"
                        companyLink="https://cricut.com/en-us/"
                        time="Apr 2024 - Present"
                        address="South Jordan, UT"
                        work="Tested software releases and new features before transitioning to engineering software releases, including bug fixes and UI updates. Helped developed 'test flags,' a system that ensures our smart cutting machines successfully complete all production stations by verifying each station's pass before moving to the next."
                        bullets="TODO"
                        brandColor="#00c08b"
                    />
                    
                    <Details 
                        position="Associate Firmware Test Engineer"
                        company="Cricut"
                        companyLink="https://cricut.com/en-us/"
                        time="Mar 2023 - Apr 2024"
                        address="South Jordan, UT"
                        work="Streamline firmware testing processes by creating automation software, resulting in a 75% reduction in 
                        testing time. Design and implement Bluetooth and USB event loggers for Windows and Mac platforms, leading to 
                        a 30% improvement in system monitoring and troubleshooting capabilities. Create test plans for a wide range 
                        of machines, ensuring thorough and efficient testing methodologies, while collaborating cross-functionally 
                        to troubleshoot and resolve firmware issues, enhancing product quality and customer satisfaction."
                        bullets="TODO"
                        brandColor="#00c08b"
                    />

                    <Details 
                        position="Software QA Tester"
                        company="Cricut"
                        companyLink="https://cricut.com/en-us/"
                        time="Aug 2022 - Mar 2023"
                        address="South Jordan, UT"
                        work="Conducted thorough testing of software and firmware to identify defects and performance issues. Developed and executed test plans and scripts to validate functionality and performed regression testing to ensure stability after code changes."
                        bullets="TODO"
                        brandColor="#00c08b"
                    />

                    <Details 
                        position="Lead Engineer | Machinima Lead"
                        company="Burning Reel Studios"
companyLink="https://store.steampowered.com/app/2311140/Natural_Disaster_A_Butterflys_Guide_to_Mass_Destruction/"
                        time="Aug 2022 - Apr 2023"
                        address="Remote"
                        work="Led a team of 7 engineers while working collaboratively with other departments to develop Natural Disaster, published on Steam, managing daily operations and ensuring seamless integration of game systems and assets. Conceptualized and refined 10+ innovative features, enhancing gameplay. Designed a Machinima pipeline and led a specialized strike team, contributing directly to project success."
                        bullets="TODO"
                        brandColor="#000082"
                    />

                    <Details 
                        position="Volunteer Video Game Venture Scout"
                        company="Anthos Capital"
                        companyLink="https://anthoscapital.com/"
                        time="Dec 2021 - Present"
                        address="Remote"
                        work="Provide detailed bug reports and feedback on game design during pre-release stages while also 
                        evaluating game quality and determining the viability of development for potential investment. 
                        Engage in trend and concept discussions, share projects, and share learning opportunities 
                        with like-minded video game enthusiasts."
                        bullets="TODO"
                        brandColor="#710000"
                    />

                    <Details 
                        position="Web Content Specialist"
                        company="UtahSkis"
                        companyLink="https://utahskis.com/"
                        time="Dec 2018 - July 2022"
                        address="West Valley City, UT"
                        work="Utilized 3rd party brand software to extract matching images and product descriptions for items sold by 
                        UtahSkis. Imported the gathered images and descriptions onto the website while ensuring they align with the 
                        standard by resizing or rewording details if necessary. Managed product visibility by publishing new items 
                        and unpublishing old or sold-out products as needed to maintain an up-to-date and appealing product catalog."
                        bullets="TODO"
                        brandColor="#3cdfff"
                    />  
                </ul>
            </div>
        </div>
    )
}

export default Experience