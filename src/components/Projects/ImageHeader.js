import React from 'react';
import Link from 'next/link';
import Layout from '../Common/Layout';
import Image from 'next/image';

const Header = ({ projectName, role, desc, link, img }) => {
  return (
      <div className='grid w-full grid-cols-8 gap-16 px-8 my-16'>
        <div className='col-span-6 relative h-max rounded-2xl border-2 border-solid border-primary bg-light p-8 dark:bg-dark'>
          <Image src={img} alt={projectName} className='w-full h-auto rounded-2xl' 
          priority
          sizes="(max-width: 768px) 100vs, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className='col-span-2 flex flex-col items-start justify-center'>
          <h1 className="text-3xl font-bold text-primary mb-2">{projectName}</h1>
          <h2 className="text-xl mb-4 dark:text-light">{role}</h2>
          <p className="text-sm text-gray-700 dark:text-accentlightgrey mb-6">{desc}</p>
          <Link href={link} className="text-primary text-lg font-semibold hover:underline hover:text-secondary">
            Visit the project
          </Link>
        </div>
      </div>
  );
};

export default Header;
