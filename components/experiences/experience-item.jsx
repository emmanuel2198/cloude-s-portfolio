import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all hover:bg-surface-200/10 rounded-lg">
            <div className="basis-1/4 mr-2">
                <Image src={props.logo} alt="Company Logo" width={70} height={70} className='object-contain object-top pt-2' />
            </div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium text-primary-500 hover:text-primary-200 transition-all'>{props.title} | {props.company} </a>
                <div className='mb-2 text-primary-400/70'>{props.startDate} - {props.endDate}</div>
                <div className='text-primary-400 mb-4'>{props.description}</div>
                <div className='flex flex-row flex-wrap gap-2'>
                    {props.skills ? props.skills.map(function(object, index){
                        return <div key={object} className='bg-surface-200 text-primary-200 py-1 px-3 rounded-full text-xs border border-primary-200/10 hover:border-primary-200/20 transition-all'>{object}</div>
                    }) : ""}
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem