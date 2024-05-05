'use client'
import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
    const elementRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        // Ensure the DOM is loaded
        if (typeof window !== 'undefined') {

            // Intersection Observer
            var observer = new IntersectionObserver(function (entries) {
                if (entries[0].intersectionRatio === 0)
                    setIsSticky(true)
                else if (entries[0].intersectionRatio === 1)
                    setIsSticky(false);
            }, {
                threshold: [0, 1]
            });

            observer.observe(document.querySelector("#nav-container-top"));

            return () => {
                observer.disconnect();
            };
        }
    }, []);

    return (
        <div className='relative w-full min-h-screen bg-slate-800'>
            <div id="nav-container-top"></div>
            <div id='stickyElement' className='sticky z-0 top-0 left-0 mb-16 pt-6 w-full flex justify-center items-center'>
                <h1 className={`${isSticky ? 'text-6xl md:text-9xl' : 'text-3xl'} transition-all duration-1000 text-purple-200`}>Portfolio</h1>
            </div>
            <div className='relative z-10 w-full flex flex-col gap-5 px-8'>
                <ProjectCard />
                <div className='w-full h-48 bg-green-400'></div>
                <div className='w-full h-48 bg-green-400'></div>
                <div className='w-full h-48 bg-green-400'></div>
            </div>
        </div>
    );
};

export default Portfolio;
