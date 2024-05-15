'use client'
import Link from 'next/link';
import React, { useState } from 'react'


const Menu = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div className='absolute top-0 left-0 z-30 w-full h-screen pointer-events-none'>
            <div onClick={() => { setMenu(true) }} className={`pointer-events-auto absolute ${menu ? 'hidden' : 'animate-[slideWindowDown_1s_linear]'} z-20 top-6 right-5 cursor-pointer`}>
                <div className='w-8 h-[2px] bg-white mb-2'></div>
                <div className='w-8 h-[2px] bg-white'></div>
            </div>
            <div className='relative w-full h-full flex flex-col md:flex-row '>
                <div onClick={() => { setMenu(false) }} className={`absolute ${menu ? 'pointer-events-auto animate-[slideWindowDown_1s_linear]' : 'hidden'}  group flex items-center cursor-pointer text-purple-200 top-5 right-5`}>
                    <p className='mr-2 translate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out'>Close</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 50 50">
                        <path fill='rgb(233 213 255)' d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                    </svg>
                </div>

                <div className={`${menu ? 'h-[50%] md:h-full animate-[slideWindowDown_1s_ease-in] md:animate-[slideWindowUp_1s_ease-in]' : 'animate-[hideWindowDown_1s_ease-out] h-0 transition-all transform duration-1000'} w-full md:w[50%] bg-slate-700 pointer-events-auto`}>
                    <div className={`${!menu && 'hidden'} w-full h-full flex flex-col gap-3 p-8 justify-center items-center text-purple-200  group hover:text-slate-400`}>
                        <div className='w-full pb-2 px-4 border-b-2 border-b-purple-200 hover:text-purple-200'>
                            <Link href='' className='text-3xl md:text-5xl font-bold'>Home</Link>
                        </div>
                        <div className='w-full pb-2 px-4 border-b-2 border-b-purple-200 hover:text-purple-200'>
                            <Link href='' className='text-3xl md:text-5xl font-bold'>About Me</Link>
                        </div>
                        <div className='w-full pb-2 px-4 border-b-2 border-b-purple-200 hover:text-purple-200'>
                            <Link href='' className='text-3xl md:text-5xl font-bold'>Services</Link>
                        </div>
                        <div className='w-full pb-2 px-4 border-b-2 border-b-purple-200 hover:text-purple-200'>
                            <Link href='' className='text-3xl md:text-5xl font-bold'>Portfolio</Link>
                        </div>
                    </div>
                </div>
                <div className={`${menu ? 'h-[50%] md:h-full animate-[slideWindowUp_1s_ease-in] md:animate-[slideWindowDown_1s_ease-in]' : 'animate-[hideWindowDown_1s_ease-out] h-0 transition-all transform duration-1000'} w-full md:w[50%] bg-black pointer-events-auto`}>
                    <div className={`${!menu && 'hidden'} text-lg w-full h-full flex flex-col gap-3 p-8 justify-center  text-purple-200`}>
                        <div className='w-full text-right'>

                        </div>
                        <div className='w-full text-right leading-8 font-poppins'>
                            +123-6548897<br />+123-hello contact@tillas.com <br />If in doubt. reach out.
                        </div>
                        <ul className='px-4 w-fit style list-disc text-2xl md:text-3xl font-poppins'>
                            <li className='group'>
                                <Link href=''>Dribble</Link>
                                <div className='group-hover:w-full w-0 transition-all duration-300 h-[2px] bg-purple-200'></div>
                            </li>
                            <li className='group'>
                                <Link href=''>Instagram </Link>
                                <div className='group-hover:w-full w-0 transition-all duration-300 h-[2px] bg-purple-200'></div>
                            </li>
                            <li className='group'>
                                <Link href=''>LinkedIn</Link>
                                <div className='group-hover:w-full w-0 transition-all duration-300 h-[2px] bg-purple-200'></div>
                            </li>
                            <li className='group'>
                                <Link href=''>Behance</Link>
                                <div className='group-hover:w-full w-0 transition-all duration-300 h-[2px] bg-purple-200'></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu