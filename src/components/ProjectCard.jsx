import React from 'react'

import Image from 'next/image'

const ProjectCard = ({ pic1, pic2, name1, name2, flip }) => {
    return (
        <div className={`flex gap-8 flex-col ${flip ? 'md:flex-row-reverse' : 'md:flex-row'} justify-around items-center`}>
            <div className='flex w-fit h-fit flex-col items-between justify-center gap-4 bg-slate-800 p-6 border-2 border-purple-200'>
                <div className='max-w-72 md:aspect-square object-cover overflow-hidden'>
                    <Image src={pic1} alt="project photo" className='w-full aspect-auto object-cover' />
                </div>
                <footer className='w-full text-purple-200'>
                    <p>Modelling - 2024</p>
                    <h3 className='text-xl font-bold'>{name1}</h3>
                </footer>
            </div>
            <div className='flex w-full md:max-w-[420px] md:aspect-square flex-col items-center justify-center gap-4 bg-slate-800 p-6 border-2 border-purple-200'>
                <div className='w-full aspect-auto object-fit overflow-hidden'>
                    <Image src={pic2} alt="project photo" className='w-full object-cover' />
                </div>
                <footer className='w-full text-purple-200'>
                    <p>Modelling - 2024</p>
                    <h3 className='text-xl font-bold'>{name2}</h3>
                </footer>
            </div>
        </div>
    )
}

export default ProjectCard