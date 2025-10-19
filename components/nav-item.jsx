import React from "react";

function NavItem(props) {
    return (
        <a href={props.href} className='flex flex-row py-3 items-center group relative'>
            <div className={`mr-4 ${props.active ? 'text-primary-200' : 'text-surface-600'} transition-all group-hover:text-primary-200`}>
                {props.icon}
            </div>
            <div className='flex flex-col'>
                <span className={`transition-all ${props.active ? 'text-primary-200' : 'text-surface-600'} group-hover:text-primary-200`}>
                    {props.name}
                </span>
                <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 ${props.active ? 'bg-primary-300' : 'bg-primary-300'}`}></span>
            </div>
        </a>
    )
}

export default NavItem