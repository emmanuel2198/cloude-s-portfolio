import React from "react";
import Image from "next/image";
import Navigation from "./navigation";
import Socials from "./socials";

const Header = (props) => {
    return (
        <div className='flex flex-col h-[calc(100vh-12rem)] justify-between'>
            <div className='space-y-6'>
                <div className="w-[120px] h-[120px] relative rounded-full overflow-hidden ring-2 ring-primary-200/20 ring-offset-2 ring-offset-surface-100 hover:ring-primary-200/50 transition-all duration-300">
                    <Image
                        src="/images/profile.jpg"
                        alt="Emmanuel Mweemba"
                        width={120}
                        height={120}
                        className="object-cover hover:scale-110 transition-transform duration-300"
                        priority
                    />
                </div>
                <div className='space-y-2'>
                    <h1 className='text-4xl subpixel-antialiased tracking-wide text-primary-500'>{props.data.name}</h1>
                    <h2 className='text-primary-400 pt-1 text-base font-normal tracking-wider'>{props.data.headline}</h2>
                </div>
            </div>
            <Navigation />
            <Socials data={props.data.socials} />
        </div>
    )
}

export default Header