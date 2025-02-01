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
                        description="Focused on qualifying software releases for machine calibration and qualification on the production line, including writing test plans, executing tests, identifying and documenting bugs, and creating automation scripts. Contributed to the development of software solutions, including UI updates, bug fixes, and complex system enhancements such as Test Flags, which ensure machines pass each production line station efficiently. Led efforts to implement fast-fail functionality and automated calibration processes, improving line efficiency and machine precision."
                        bullets="<p>● Worked as Lead Test Engineer and Software Developer on the Test Development Engineering team to help qualify and develop
                        the calibration and qualification software used on the manufacturing lines.</p>
                        <p>● Created detailed test plans for 10+ calibration and qualification stations, ensuring reliability and accuracy before SW release.</p>
                        <p>● Added fast-fail functionality to 2 stations, reducing qualification times from 4+ minutes to as little as 20 seconds on the line.</p>
                        <p>● Automated a calibration process using image analysis, eliminating human selection and increasing machine precision by 20%.</p>
                        <p>● Fixed critical bugs across calibration and qualification stations, preventing skipped stations and unauthorized access.</p>
                        <p>● Act as the Lead Software QA Engineer and project co-owner of new manufacturing line calibration and qualification software.</p>"
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
                        description="Performed comprehensive testing of firmware functionalities, identifying defects, performance issues, and potential areas for improvement. Developed and maintained automation test frameworks and scripts, streamlining the testing process and significantly improving efficiency. Designed, developed, and executed detailed test plans, test cases, and test scripts for firmware applications, driving faster issue identification and resolution."
                        bullets="<p>● Developed an automated bootloader testing system, reducing testing time from 4+ days to less than 2 days.</p>
                        <p>● Engineered USB and Bluetooth logging apps specifically for Cricut machines, saving $40 million by identifying chip defects.</p>
                        <p>● Automated Bluetooth testing, reducing testing time by 90%, and constructed a custom tool for testing 5+ machines at once.</p>
                        <p>● Reduced firmware issue resolution time from 5 days to 3 or less by collaborating cross-functionally using streamlined flows.</p>"
                        skills={[
                            "Test Automation",
                            "Quality Assurance",
                            "System Monitoring",
                            "Test Planning"
                        ]}
                    />

                    <Details
                        position="Software QA Tester"
                        company="Cricut"
                        companyLink="https://cricut.com/en-us/"
                        companyColor="#00c08b"
                        time="Aug 2022 - Mar 2023"
                        address="South Jordan, UT"
                        description="Executed a variety of test plans, including bootloader and firmware testing, across 7+ different machines to ensure optimal functionality. Created a standardized bug documentation template to streamline communication and facilitate faster resolution. Collaborated with the Firmware team to develop a consolidated Firmware Testing Automation tool, merging 15 automated testing tools into one cohesive system. Addressed a critical Windows auto-update issue impacting over 4 million users, which has since been integrated into Cricut’s application and FAQ page."
                        bullets="<p>● Executed a variety of test plans ranging from bootloader testing to firmware testing on 7+ different machines.</p>
                        <p>● Created a bug documentation template to streamline communication and facilitate replication, understanding, and resolution.</p>
                        <p>● Collaborated with the Firmware team to construct a Firmware Testing Automation tool to consolidate 15 automated testing tools.</p>
                        <p>● Mitigated critical Windows auto-update issue affecting over 4 million users, now integrated into Cricut’s application and FAQ page.</p>"
                        skills={[
                            "Software Testing",
                            "Firmware Testing",
                            "Regression Testing",
                            "Defect Identification"
                        ]}
                    />

                    <Details
                        position="Lead Engineer | Machinima Lead"
                        company="Burning Reel Studios"
                        companyLink="https://store.steampowered.com/app/2311140/Natural_Disaster_A_Butterflys_Guide_to_Mass_Destruction/"
                        companyColor="#000082"
                        time="Aug 2022 - Apr 2023"
                        address="Remote"
                        description="Led a team of 7 engineers to develop <i>Natural Disaster: A Butterfly's Guide to Mass Destruction</i>, a game published on Steam. Oversaw daily operations, managed task and bug lists, and ensured seamless integration of game systems and assets. Conceptualized and refined over 10 innovative features, designed a Machinima pipeline, and played a key role in project success through close collaboration with design, art, and sound departments."
                        bullets="<p>● Conceptualized, prototyped, and refined over 10 innovative game systems and features, blending design ideas and original
                        concepts for a feature-rich gameplay experience.</p>
                        <p>● Managed a team of 7 engineers, overseeing task and bug lists, daily operations, and representing the engineering department in
                        meetings.</p>
                        <p>● Designed a robust Machinima pipeline, selected and managed a strike team, and acted as both lead animator and feature owner.</p>
                        <p>● Collaborated with design, art, and sound leads to ensure seamless integration of various game components and 100+ assets.</p>
                        <p>● Successfully published Natural Disaster on Steam under Burning Real Studios, managing Steamworks integration with Unreal
                        Engine 5 and serving as the primary playtester for stability and functionality.</p>"
                        skills={[
                            "Game Development",
                            "Feature Conceptualization and Prototyping",
                            "Unreal Engine, Miro",
                            "Task Management",
                            "Project Management"
                        ]}
                    />

                    <Details
                        position="Volunteer Video Game Venture Scout"
                        company="Anthos Capital"
                        companyLink="https://anthoscapital.com/"
                        companyColor="#710000"
                        time="Dec 2021 - Present"
                        address="Remote"
                        description="Provided detailed bug reports and feedback on game design during pre-release stages, evaluating game quality and development viability for potential investment. Engaged in discussions about trends and concepts, sharing projects and learning opportunities with fellow video game enthusiasts. Confidential details about this role can be discussed during interviews."
                        bullets="<p>• Generated detailed bug reports and provided constructive feedback on game design during pre-release stages.</p>
                        <p>• Assessed game quality and development potential to inform investment decisions.</p>
                        <p>• Participated in discussions on industry trends and concepts, sharing insights and learning opportunities with other video game enthusiasts.</p>
                        <p>• Maintained confidentiality regarding specific project details, with information available during interviews.</p>"
                        skills={[
                            "Bug Reporting",
                            "Game Quality Evaulation",
                            "Trend Analysis"
                        ]}
                    />

                    <Details
                        position="Web Content Specialist"
                        company="UtahSkis"
                        companyLink="https://utahskis.com/"
                        companyColor="#3cdfff"
                        time="Dec 2018 - July 2022"
                        address="West Valley City, UT"
                        description="Utilized third-party brand software to extract matching images and product descriptions for items sold by UtahSkis. Imported and optimized these details on the website, ensuring alignment with standards by resizing or rewording as needed. Managed product visibility by publishing new items and removing outdated or sold-out products to maintain an up-to-date and appealing product catalog. Provided customer support and handled orders, returns, and exchanges to ensure a positive customer experience."
                        bullets="<p>• Extracted and integrated product images, descriptions, and relevant content from vendor websites into the online catalog, ensuring proper formatting and SEO optimization.</p>
                        <p>• Maintained an organized and up-to-date database of digital assets, product information, and metadata.</p>
                        <p>• Managed product visibility by publishing new items and unpublishing old or sold-out products to keep the catalog current and appealing.</p>
                        <p>• Served as the primary point of contact for customer inquiries, addressing concerns and providing information about products, services, and policies.</p>
                        <p>• Processed orders, returns, and exchanges efficiently, ensuring a positive customer experience.</p>"
                        skills={[
                            "Content Integration",
                            "Web Content Optimization",
                            "Database Management",
                            "Order Processing",
                        ]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
