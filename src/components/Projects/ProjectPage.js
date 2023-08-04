import React from 'react';
import Link from 'next/link';
import Layout from '../Common/Layout';
import AnimatedText from '../Common/AnimatedText';

const ProjectPage = () => {
  return (
    <>
    <Layout className='pt-16'>
        <div>
            <h1>Name of the Project</h1>
            <h2>My Role</h2>
            <p>Your role in the project (e.g., Developer, Designer, etc.)</p>
            <h2>Short Description</h2>
            <p>
            Briefly describe the project and its purpose in a few sentences.
            </p>
            <h2>Link to Project</h2>
            <p>
            <Link href="https://www.example.com">Visit the project</Link>
            </p>
            <h2>Video</h2>
            <div>
            {/* Add your video component here */}
            </div>
            <h2>Detail Description</h2>
            <p>
            Provide a more in-depth description of the project, including its
            features, technologies used, and any challenges you faced during
            development.
            </p>
            <h2>My Contributions</h2>
            <p>
            Explain your specific contributions to the project and your
            achievements during its development.
            </p>
            <h2>Set of Images</h2>
            <div>
            {/* Add a carousel or image gallery to showcase project images */}
            </div>
            <h2>Tools Used</h2>
            <p>
            List the tools, frameworks, and technologies used to build the
            project.
            </p>
        </div>
      </Layout>
    </>
  );
};

export default ProjectPage;
