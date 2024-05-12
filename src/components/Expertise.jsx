import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pic1 from '/public/mp1.png'
import pic2 from '/public/mp2.png'
import pic3 from '/public/mp3.png'
import pic4 from '/public/mp4.png'
import pic5 from '/public/mp5.png'
import pic6 from '/public/mp6.png'
import pic7 from '/public/mp7.png'
import pic8 from '/public/mp8.png'

const Expertise = () => {
    return (
        <section className='relative w-full min-h-screen bg-black border-t-2 border-t-purple-400 overflow-hidden'>
            <div className='w-full flex justify-between text-sm md:text-md text-purple-200 p-3'>
                <h3 className='hidden md:block'>SERVICES</h3>
                <h3>MY EXPERTISE IN THIS AREA</h3>
                <Link href='#'>Learn More</Link>
            </div>

            <div className='w-full h-full flex flex-col mt-16 md:mt-24 mb-24'>
                <div className='group relative w-full h-20 flex flex-col justify-center items-center text-slate-600 hover:text-purple-200 hover:bg-gradient-to-b hover:from-fuchsia-300 transition-all ease-in-out duration-75 hover:to-violet-500 md:h-40 border-b-2 border-slate-600 py-3'>
                    <h2 className='text-3xl font-poppins md:text-5xl'>Modelling</h2>
                    <p>FASHION & LIFESTYLE</p>
                    <div className='absolute md:hidden bottom-0 left-1 md:left-[10%] max-md:rotate-12 md:translate-y-[20%] w-20 h-24 md:w-56 md:h-80 bg-yellow-200 md:group-hover:block md:group-hover:animate-slideUp'>
                        <Image className='filter max-md:grayscale group-hover:grayscale-0 w-full h-full object-cover' src={pic1} alt='model photo' />
                    </div>
                    <div className='absolute md:hidden bottom-0 right-1 md:right-[10%] md:translate-y-[20%] w-20 h-24 md:w-40 md:h-64 bg-yellow-200 md:group-hover:block md:group-hover:animate-slideUp'>
                        <Image className='filter max-md:grayscale group-hover:grayscale-0 w-full h-full object-cover' src={pic2} alt='model photo' />
                    </div>

                </div>
                <div className='group relative w-full h-20 flex flex-col justify-center items-center text-slate-600 hover:text-purple-200 hover:bg-gradient-to-b hover:from-violet-400 transition ease-in-out delay-75 hover:to-violet-700 md:h-40 border-b-2 border-slate-600 py-3'>
                    <h2 className='text-3xl font-poppins md:text-5xl'>Acting</h2>
                    <p>CHARACTER</p>
                    <div className='absolute md:hidden bottom-0 right-2 md:right-[10%] max-md:-rotate-12 md:translate-y-[20%] w-16 h-20 md:w-56 md:h-80 bg-yellow-200 md:group-hover:block md:group-hover:animate-slideUp'>
                        <Image className='filter max-md:grayscale group-hover:grayscale-0 w-full h-full object-cover' src={pic3} alt='model photo' />
                    </div>
                    <div className='absolute md:hidden bottom-0 left-2 md:left-[10%] md:translate-y-[20%] -translate-y-2 w-12 md:w-40 md:h-64 bg-yellow-200 md:group-hover:block md:group-hover:animate-slideUp'>
                        <Image className='filter max-md:grayscale group-hover:grayscale-0 w-full h-full object-cover' src={pic4} alt='model photo' />
                    </div>
                </div>
                <div className='group relative w-full h-20 flex flex-col justify-center items-center text-slate-600 hover:text-purple-200 hover:bg-gradient-to-b hover:from-violet-500 transition ease-in-out delay-75 hover:to-violet-900 md:h-40 border-b-2 border-slate-600 py-3'>
                    <h2 className='text-3xl font-poppins md:text-5xl'>Artist</h2>
                    <p>CREATIVE DESGINER</p>
                    <div className='absolute md:hidden bottom-0 right-1 md:right-[10%] md:translate-y-[20%] -translate-y-2 w-12 md:w-56 md:h-80 bg-yellow-200 md:group-hover:block md:group-hover:animate-slideUp'>
                        <Image className='filter max-md:grayscale group-hover:grayscale-0 w-full h-full object-cover' src={pic5} alt='model photo' />
                    </div>
                    <div className='absolute md:hidden bottom-0 left-1 md:left-[10%] max-md:-rotate-12 md:translate-y-[20%] w-20 h-24 md:w-40 md:h-64 bg-yellow-200 md:group-hover:block md:group-hover:animate-slideUp'>
                        <Image className='filter max-md:grayscale group-hover:grayscale-0 w-full h-full object-cover' src={pic6} alt='model photo' />
                    </div>
                </div>
                <div className='group relative w-full h-20 flex flex-col justify-center items-center text-slate-600 hover:text-purple-200 hover:bg-gradient-to-b hover:from-violet-900 transition ease-in-out delay-75 hover:to-fuchsia-600 md:h-40 border-b-2 border-slate-600 py-3'>
                    <h2 className='text-3xl font-poppins md:text-5xl'>Costume</h2>
                    <p>CLOTH & WEARING</p>
                    <div className='absolute md:hidden bottom-0 left-1 md:left-[10%] translate-y-[20%] w-20 md:w-56 md:h-80 bg-yellow-200 md:group-hover:block md:group-hover:animate-slideUp'>
                        <Image className='filter max-md:grayscale group-hover:grayscale-0 w-full h-full object-cover' src={pic7} alt='model photo' />
                    </div>
                    <div className='absolute md:hidden bottom-0 right-1 md:right-[10%] max-md:rotate-12 translate-y-[20%] w-16 md:w-40 md:h-64 bg-yellow-200 md:group-hover:block md:group-hover:animate-slideUp'>
                        <Image className='filter max-md:grayscale group-hover:grayscale-0 w-full h-full object-cover' src={pic8} alt='model photo' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Expertise