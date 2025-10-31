import React from "react";
import Image from 'next/image';

const Socials = (props) => {
    return (
        <div className='flex flex-row items-center'>
            <a href={`mailto:${props.data.email}`} className='mr-6 transition-all bg-primary-500 hover:bg-primary-300 text-surface-100 font-medium py-1 px-6 rounded flex flex-row items-center h-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className='pl-2 whitespace-nowrap text-sm'>Get in touch</span>
            </a>
            <div className='flex flex-row items-center'>
                <a href={props.data.github} target="_blank" rel="noopener noreferrer" className="mr-6 flex items-center justify-center gap-2 text-sm font-medium h-10">
                    <Image src="/logos/github-mark-white.png" alt="GitHub Logo" width={20} height={20} className='object-contain mr-1' />
                    <div className='whitespace-nowrap'>GitHub</div>
                </a>
                <a href={props.data.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm font-medium h-10">
                    <Image src="/logos/linkedin-mark-white.png" alt="LinkedIn Logo" width={20} height={20} className='object-contain mr-1' />
                    <div className='whitespace-nowrap'>LinkedIn</div>
                </a>
            </div>

        </div>
    )
}

export default Socials