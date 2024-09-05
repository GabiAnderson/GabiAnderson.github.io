import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import LineIcon from "@/components/About/LineIcon";
import TextFormat from "../Common/TextFormat";

const Details = ({
    position,
    company,
    companyLink,
    companyColor,
    time,
    address,
    description,
    bullets,
    skills,
}) => {
    const [showDetails, setShowDetails] = useState(false);
    const ref = useRef(null);
    const skillColors = ["#445069", "#ffa400", "#c83e4d"];

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%] md:my-4"
        >
            <LineIcon reference={ref} />

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl dark:text-primaryLight md:text-lg mb-2">
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        style={{ color: companyColor }}
                        className="capitalize"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-secondaryDark dark:text-secondaryLight md:text-sm">
                    {time} | {address}
                </span>
                <TextFormat
                    className="font-medium w-full text-tertiaryDark dark:text:tertiaryLight md:text-sm mt-2"
                    text={description}
                />

                {/* If not expanded, show the skills here */}
                {!showDetails && (
                    <div className="mt-2 mb-2">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                style={{
                                    color: skillColors[
                                        index % skillColors.length
                                    ],
                                }}
                                className="font-bold mr-4"
                            >
                                {skill}&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        ))}
                    </div>
                )}

                {/* Details section, only shown when expanded */}
                {showDetails && (
                    <div>
                        <TextFormat
                            className="font-medium w-full text-tertiaryDark dark:text:tertiaryLight pl-8 md:text-sm mt-2"
                            text={bullets}
                        />

                        {/* Skills section when expanded */}
                        <div className="mt-2 mb-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    style={{
                                        color: skillColors[
                                            index % skillColors.length
                                        ],
                                    }}
                                    className="font-bold mr-4"
                                >
                                    {skill}&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* See/Hide Details button */}
                <button
                    onClick={toggleDetails}
                    className={`details-button mt-${showDetails ? "2" : "0"} text-sm`}
                >
                    {showDetails ? "Hide Details" : "See Details"}
                </button>
            </motion.div>

            {/* Styling the button hover */}
            <style jsx>{`
                .details-button {
                    color: #0000ee;
                    text-decoration: underline;
                    cursor: pointer;
                    transition:
                        color 0.2s ease-in-out,
                        text-decoration 0.2s ease-in-out;
                }

                .details-button:hover {
                    color: #551a8b;
                }
            `}</style>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className="my-14">
            <h2 className="font-bold text-8xl mb-16 w-full text-center text-tertiaryColor sm:!text-3xl md:!text-5xl lg:!text-7xl">
                Experience
            </h2>

            <div
                ref={ref}
                className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
            >
                <motion.div
                    className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                    style={{ scaleY: scrollYProgress }}
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        position="Software Test Engineer"
                        company="Cricut"
                        companyLink="https://cricut.com/en-us/"
                        companyColor="#00c08b"
                        time="Apr 2024 - Present"
                        address="South Jordan, UT"
                        description="Focused on qualifying software releases for machine calibration and qualification on the production line, including testing, writing bugs, and creating automation scripts. Transitioned to developing software solutions, such as UI updates, bug fixes, and complex systems like Test Flags, which ensure machines pass each station. Additionally contributed to creating a custom refurbishment version of the software tailored to company needs."
                        bullets="<p>• Qualified and released software tools for calibrating and qualifying over 10 different machines on a production line with up to 17 stations.</p> 
                        <p>• Aided in development and implementation of the Test Flags system, ensuring machines successfully complete each station by validating memory checks.</p>
                        <p>• Led the creation of a custom refurbishment version of the software, allowing specific configurations and access for internal company use.</p>
                        <p>• Addressed and resolved bugs to enhance software performance and reliability..</p>
                        <p>• Contributed to system enhancements and development of new features.</p>"
                        skills={[
                            "C++, Kotlin, Java, C",
                            "GitHub, Android Studio, Gradle",
                            "Azure DevOps, Bug Writing, Bug Tracking"
                        ]}
                    />

                    <Details
                        position="Associate Firmware Test Engineer"
                        company="Cricut"
                        companyLink="https://cricut.com/en-us/"
                        companyColor="#00c08b"
                        time="Mar 2023 - Apr 2024"
                        address="South Jordan, UT"
                        description="Streamline firmware testing processes by creating automation software, resulting in a 75% reduction in 
                        testing time. Design and implement Bluetooth and USB event loggers for Windows and Mac platforms, leading to 
                        a 30% improvement in system monitoring and troubleshooting capabilities. Create test plans for a wide range 
                        of machines, ensuring thorough and efficient testing methodologies, while collaborating cross-functionally 
                        to troubleshoot and resolve firmware issues, enhancing product quality and customer satisfaction."
                        bullets="TODO"
                        skills={[
                            "JavaScript",
                            "React",
                            "Testing",
                            "Automation",
                        ]}
                    />

                    <Details
                        position="Software QA Tester"
                        company="Cricut"
                        companyLink="https://cricut.com/en-us/"
                        companyColor="#00c08b"
                        time="Aug 2022 - Mar 2023"
                        address="South Jordan, UT"
                        description="Conducted thorough testing of software and firmware to identify defects and performance issues. Developed and executed test plans and scripts to validate functionality and performed regression testing to ensure stability after code changes."
                        bullets="TODO"
                        skills={[
                            "JavaScript",
                            "React",
                            "Testing",
                            "Automation",
                        ]}
                    />

                    <Details
                        position="Lead Engineer | Machinima Lead"
                        company="Burning Reel Studios"
                        companyLink="https://store.steampowered.com/app/2311140/Natural_Disaster_A_Butterflys_Guide_to_Mass_Destruction/"
                        companyColor="#000082"
                        time="Aug 2022 - Apr 2023"
                        address="Remote"
                        description="Led a team of 7 engineers while working collaboratively with other departments to develop Natural Disaster, published on Steam, managing daily operations and ensuring seamless integration of game systems and assets. Conceptualized and refined 10+ innovative features, enhancing gameplay. Designed a Machinima pipeline and led a specialized strike team, contributing directly to project success."
                        bullets="TODO"
                        skills={[
                            "JavaScript",
                            "React",
                            "Testing",
                            "Automation",
                        ]}
                    />

                    <Details
                        position="Volunteer Video Game Venture Scout"
                        company="Anthos Capital"
                        companyLink="https://anthoscapital.com/"
                        companyColor="#710000"
                        time="Dec 2021 - Present"
                        address="Remote"
                        description="Provide detailed bug reports and feedback on game design during pre-release stages while also 
                        evaluating game quality and determining the viability of development for potential investment. 
                        Engage in trend and concept discussions, share projects, and share learning opportunities 
                        with like-minded video game enthusiasts."
                        bullets="TODO"
                        skills={[
                            "JavaScript",
                            "React",
                            "Testing",
                            "Automation",
                        ]}
                    />

                    <Details
                        position="Web Content Specialist"
                        company="UtahSkis"
                        companyLink="https://utahskis.com/"
                        companyColor="#3cdfff"
                        time="Dec 2018 - July 2022"
                        address="West Valley City, UT"
                        description="Utilized 3rd party brand software to extract matching images and product descriptions for items sold by 
                        UtahSkis. Imported the gathered images and descriptions onto the website while ensuring they align with the 
                        standard by resizing or rewording details if necessary. Managed product visibility by publishing new items 
                        and unpublishing old or sold-out products as needed to maintain an up-to-date and appealing product catalog."
                        bullets="TODO"
                        skills={[
                            "JavaScript",
                            "React",
                            "Testing",
                            "Automation",
                        ]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
