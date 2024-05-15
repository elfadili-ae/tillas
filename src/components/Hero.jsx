'use client'

import Image from 'next/image'
import React from 'react'
import logo from '/public/tillas.png'
import photo1 from '/public/pic1.png'
import Menu from './Menu'

const Hero = () => {
    return (
        <div className='relative w-full flex max-[991px]:flex-col bg-slate-600'>
            <Menu />
            <div className='w-full pl-4 py-20 flex flex-col justify-center  bg-black relative'>
                <Image src={logo} alt='tillas picture' className='absolute w-28 top-4 left-4' />
                <div className=' flex font-poppins font-bold text-6xl md:text-9xl'>
                    <span className='text-stroke'>H</span>
                    <span className='text-stroke'>e</span>
                    <span className='text-stroke'>l</span>
                    <span className='text-stroke'>l</span>
                    <span className='text-stroke'>o</span>
                </div>
                <h1 className='font-poppins font-bold text-6xl md:text-[140px] bg-gradient-to-r from-blue-600 to-violet-600 w-fit text-transparent bg-clip-text'>I'm Tillas</h1>
                <p className='text-xl text-purple-200'>A Creative Fashion Designer</p>
                <button className='text-lg mt-10 px-4 py-4 border-2 border-purple-200 w-fit text-purple-200 hover:bg-purple-200 hover:text-slate-800'>SEE PORTFOLIO</button>
            </div>
            <div className='w-full h-screen bg-gradient-to-r from-blue-600 to-violet-600 relative overflow-hidden'>
                <Image src={photo1} alt='tillas photo' className='w-full h-full object-contain absolute bottom-0 z-10' />
                <svg className='svg-shadow absolute top-0 left-0 w-full h-full' viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
                    <defs>
                        <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" fill='rgb(233 213 255)'>
                            <path d="M0 40L40 0H20L0 20M40 40V20L20 40"></path>
                        </pattern>
                    </defs>
                    <path id="blob" d="M423.5,285.5Q361,321,357,398.5Q353,476,288.5,453.5Q224,431,165.5,423Q107,415,87,359.5Q67,304,92.5,257.5Q118,211,134,173Q150,135,184.5,84.5Q219,34,272,60.5Q325,87,361.5,121Q398,155,442,202.5Q486,250,423.5,285.5Z" fill="url(#pattern)"></path>
                </svg>
            </div>
        </div>
    )
}

export default Hero