'use client'

import React, { useState, useEffect, useRef } from "react";
import NavItem from "./nav-item";
import { UserCircle2, Briefcase, FolderGit2 } from "lucide-react";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, {threshold:0.5});

        const sections = document.querySelectorAll('[data-section]');

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    return (
        <div id='navigation' className='flex flex-col py-10 font-medium tracking-widest'>
            <NavItem 
                active={activeSection === 'about'} 
                href='#about' 
                icon={<UserCircle2 className="w-6 h-6 transition-transform group-hover:scale-110" />} 
                name="ABOUT" 
            />
            <NavItem 
                active={activeSection === 'experiences'} 
                href='#experiences' 
                icon={<Briefcase className="w-6 h-6 transition-transform group-hover:scale-110" />} 
                name="EXPERIENCES" 
            />
            <NavItem 
                active={activeSection === 'projects' || activeSection === 'credits'} 
                href='#projects' 
                icon={<FolderGit2 className="w-6 h-6 transition-transform group-hover:scale-110" />} 
                name="PROJECTS" 
            />
        </div>
    )
}

export default Navigation