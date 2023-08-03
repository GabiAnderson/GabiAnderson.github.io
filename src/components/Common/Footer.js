import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Footer = ({children, className=""}) => {
    return (
        <footer className='w-full border-t-2 border-slid border-dark 
        font-medium text-lg'>
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center'>
                    Built With <span className='text-2xl px-1'>&#9749; & &#128049;</span>
                    by&nbsp;<Link href="/" className='underline
                    underline-offset-2'
                    >Gabi Anderson</Link>
                </div>
                <Link href="https://discord.com/users/488372834016690186" target={"_blank"} className='underline
                    underline-offset-2'>Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer