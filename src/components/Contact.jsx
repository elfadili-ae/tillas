import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pic1 from '/public/mp1.png'
import pic2 from '/public/mp2.png'
import pic3 from '/public/mp6.png'
import pic4 from '/public/mp4.png'

const Contact = () => {
    return (
        <section id="contact" className='w-full pt-16 pb-6 px-4 bg-gradient-to-r from-slate-800 to-purple-900 text-purple-300'>
            <div className='relative w-full flex gap-2 justify-center items-center max-md:flex-col'>
                <p className='text-center '>GET TO<br />X <br />Know ME</p>
                <h1 className='text-6xl md:text-9xl'>FIND ME</h1>
            </div>
            <div className='w-full flex gap-2 justify-center items-center max-md:flex-col'>
                <h1 className='text-6xl md:text-9xl text-center'>WHERE STYLE AWAITS</h1>
            </div>

            <div className='mt-20 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:justify-items-center text-purple-300'>
                <div className='pl-4 border-l-2 border-l-purple-200 group hover:border-l-pink-600'>
                    <p className='text-sm group-hover:text-pink-600'>REGULAR UPDATES ON</p>
                    <Link href='https://www.linkedin.com/in/abdessamad-el-fadili/' className='flex gap-1'>
                        <h3 className='text-3xl hover:text-purple-50'>Instagram</h3>
                        <svg
                            className='w-4 h-4'
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,20.5v-5c0-3.3,2.7-6,6-6h10"></path><path fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M38.5,25.5v10c0,3.3-2.7,6-6,6h-20c-3.3,0-6-2.7-6-6v-7"></path><line x1="23.5" x2="41.5" y1="24.5" y2="6.5" fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3"></line><polyline fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" points="27.5,6.5 41.5,6.5 41.5,20.5"></polyline>
                        </svg>
                    </Link>
                </div>
                <div className='pl-4 border-l-2 border-l-purple-200 group hover:border-l-pink-600'>
                    <p className='text-sm group-hover:text-pink-600'>WORD TALKS</p>
                    <Link href='https://www.linkedin.com/in/abdessamad-el-fadili/' className='flex gap-1'>
                        <h3 className='text-3xl hover:text-purple-50'>LinkedIn</h3>
                        <svg
                            className='w-4 h-4'
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,20.5v-5c0-3.3,2.7-6,6-6h10"></path><path fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M38.5,25.5v10c0,3.3-2.7,6-6,6h-20c-3.3,0-6-2.7-6-6v-7"></path><line x1="23.5" x2="41.5" y1="24.5" y2="6.5" fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3"></line><polyline fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" points="27.5,6.5 41.5,6.5 41.5,20.5"></polyline>
                        </svg>
                    </Link>
                </div>
                <div className='pl-4 border-l-2 border-l-purple-200 group hover:border-l-pink-600'>
                    <p className='text-sm group-hover:text-pink-600'>SINGLE SHOTS</p>
                    <Link href='https://www.linkedin.com/in/abdessamad-el-fadili/' className='flex gap-1'>
                        <h3 className='text-3xl hover:text-purple-50'>Dribble</h3>
                        <svg
                            className='w-4 h-4'
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,20.5v-5c0-3.3,2.7-6,6-6h10"></path><path fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M38.5,25.5v10c0,3.3-2.7,6-6,6h-20c-3.3,0-6-2.7-6-6v-7"></path><line x1="23.5" x2="41.5" y1="24.5" y2="6.5" fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3"></line><polyline fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" points="27.5,6.5 41.5,6.5 41.5,20.5"></polyline>
                        </svg>
                    </Link>
                </div>
                <div className='pl-4 border-l-2 border-l-purple-200 group hover:border-l-pink-600'>
                    <p className='text-sm group-hover:text-pink-600'>COMPLETE PROJECTS</p>
                    <Link href='https://www.linkedin.com/in/abdessamad-el-fadili/' className='flex gap-1'>
                        <h3 className='text-3xl hover:text-purple-50'>Behance</h3>
                        <svg
                            className='w-4 h-4'
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,20.5v-5c0-3.3,2.7-6,6-6h10"></path><path fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M38.5,25.5v10c0,3.3-2.7,6-6,6h-20c-3.3,0-6-2.7-6-6v-7"></path><line x1="23.5" x2="41.5" y1="24.5" y2="6.5" fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3"></line><polyline fill="none" stroke="rgb(216 180 254)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" points="27.5,6.5 41.5,6.5 41.5,20.5"></polyline>
                        </svg>
                    </Link>
                </div>

            </div>
            <div className='mt-16 w-full flex flex-col max-md:gap-4 md:flex-row md:justify-around'>
                <div className='w-full md:max-w-[22%] aspect-square overflow-hidden group'>
                    <Image className='w-full h-full object-contain max-md:object-cover hover:rotate-3 hover:scale-105 transition-transform transform duration-1000 ease-in-out' src={pic1} alt='model photo' />
                </div>
                <div className='w-full md:max-w-[22%] overflow-hidden'>
                    <Image className='w-full h-full object-cover hover:rotate-3 hover:scale-105 transition-transform duration-1000 ease-in-out' src={pic2} alt='model photo' />
                </div>
                <div className='w-full md:max-w-[22%] overflow-hidden'>
                    <Image className='w-full h-full object-cover hover:rotate-3 hover:scale-105 transition-transform duration-1000 ease-in-out' src={pic4} alt='model photo' />
                </div>
                <div className='w-full md:max-w-[22%] overflow-hidden'>
                    <Image className='w-full h-full object-cover hover:rotate-3 hover:scale-105 transition-transform duration-1000 ease-in-out' src={pic3} alt='model photo' />
                </div>
            </div>
            <div className='mt-6 flex flex-col items-center gap-1 sm:flex-row-reverse sm:justify-between text-purple-200'>
                <p>contact@tillas.com</p>
                <p>© All Rights Reserved. By Tillas</p>
            </div>
        </section>
    )
}

export default Contact