'use client'
import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import pic1 from '/public/mp1.png'
import pic2 from '/public/mp2.png'
import pic3 from '/public/mp3.png'
import pic4 from '/public/mp4.png'
import pic5 from '/public/mp5.png'
import pic6 from '/public/mp6.png'
import Link from 'next/link';

const Portfolio = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        // Ensure the DOM is loaded
        if (typeof window !== 'undefined') {

            // Intersection Observer
            var observer = new IntersectionObserver(function (entries) {
                console.log(entries[0].intersectionRatio)
                if (entries[0].intersectionRatio === 0)
                    setIsSticky(true)
                else if (entries[0].intersectionRatio === 1)
                    setIsSticky(false);
            }, {
                threshold: [0, 1]
            });

            observer.observe(document.querySelector("#container-top"));

            return () => {
                observer.disconnect();
            };
        }
    }, []);

    return (
        <div className='relative w-full flex flex-col items-center min-h-screen bg-slate-800 pb-16'>
            <div id="container-top"></div>
            <div id='stickyElement' className='sticky z-0 top-0 left-0 mb-16 pt-6 w-full flex justify-center items-center'>
                <h1 className={`${isSticky ? 'text-6xl md:text-9xl' : 'text-3xl'} transition-all duration-1000 text-purple-200`}>Portfolio</h1>
            </div>
            <div className='relative z-10 w-full flex flex-col gap-5 px-8'>
                <ProjectCard pic1={pic1} name1='Mohamad Khosravi' pic2={pic2} name2='Mohamad Khosravi' />
                <ProjectCard pic1={pic3} name1='Alireza Esmaeeli' pic2={pic4} name2='Tyler Nix' flip={true} />
                <ProjectCard pic1={pic5} name1='Mohamad Khosravi' pic2={pic6} name2='Mohamad Khosravi' />
            </div>

            <div className='mt-24'>
                <Link href='#' className='py-4 px-2 border-y-2 border-y-purple-200 text-purple-200'>SEE MORE PROJECTS</Link>
            </div>
        </div>
    );
};

export default Portfolio;
