import React from "react";

const Credits = (props) => {
        return (
        <div data-section id='credits' className='group mt-32'>
            <div className='text-primary-400/80'>
                <p className="text-sm italic font-light tracking-wide mb-4 hover:text-primary-400 transition-colors duration-300">
                    Designed & developed with love by Emmanuel Mweemba powered by Next.js + Tailwind.
                </p>
                <div className='flex flex-row justify-between text-sm font-light italic tracking-wide'>
                    <a href="/imprint" rel="noopener noreferrer" className="transition-all hover:text-primary-200">Imprint</a>
                    <a href="/privacy" rel="noopener noreferrer" className="transition-all hover:text-primary-200">Privacy Statement</a>
                    <span className="text-primary-400/60">{props.data.name} | 2025</span>
                </div>
            </div>
        </div>
    )
}

export default Credits