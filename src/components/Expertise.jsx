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
            <div className='w-full flex justify-between text-purple-200 p-3'>
                <h3>SERVICES</h3>
                <h3>MY EXPERTISE IN THIS AREA</h3>
                <Link href='#'>Learn More</Link>
            </div>

            <div className='w-full h-full flex flex-col mt-16 md:mt-24 mb-24'>
                <div className='group relative w-full h-20 flex flex-col justify-center items-center text-slate-600 hover:text-purple-200 hover:bg-gradient-to-b hover:from-fuchsia-300 transition ease-in-out delay-75 hover:to-violet-500 md:h-40 border-b-2 border-slate-600 py-3'>
                    <h2 className='text-3xl font-poppins md:text-5xl'>Modelling</h2>
                    <p>FASHION & LIFESTYLE</p>
                    <div className='absolute hidden bottom-0 left-[10%] translate-y-[20%] w-56 h-80 bg-yellow-200 group-hover:block group-hover:animate-slideUp'>
                        <Image className='w-full h-full object-cover' src={pic1} alt='model photo' />
                    </div>
                    <div className='absolute hidden bottom-0 right-[10%] translate-y-[20%] w-40 h-64 bg-yellow-200 group-hover:block group-hover:animate-slideUp'>
                        <Image className='w-full h-full object-cover' src={pic2} alt='model photo' />
                    </div>

                </div>
                <div className='group relative w-full h-20 flex flex-col justify-center items-center text-slate-600 hover:text-purple-200 hover:bg-gradient-to-b hover:from-violet-400 transition ease-in-out delay-75 hover:to-violet-700 md:h-40 border-b-2 border-slate-600 py-3'>
                    <h2 className='text-3xl font-poppins md:text-5xl'>Acting</h2>
                    <p>CHARACTER</p>
                    <div className='absolute hidden bottom-0 right-[10%] translate-y-[20%] w-56 h-80 bg-yellow-200 group-hover:block group-hover:animate-slideUp'>
                        <Image className='w-full h-full object-cover' src={pic3} alt='model photo' />
                    </div>
                    <div className='absolute hidden bottom-0 left-[10%] translate-y-[20%] w-40 h-64 bg-yellow-200 group-hover:block group-hover:animate-slideUp'>
                        <Image className='w-full h-full object-cover' src={pic4} alt='model photo' />
                    </div>
                </div>
                <div className='group relative w-full h-20 flex flex-col justify-center items-center text-slate-600 hover:text-purple-200 hover:bg-gradient-to-b hover:from-violet-500 transition ease-in-out delay-75 hover:to-violet-900 md:h-40 border-b-2 border-slate-600 py-3'>
                    <h2 className='text-3xl font-poppins md:text-5xl'>Artist</h2>
                    <p>CREATIVE DESGINER</p>
                    <div className='absolute hidden bottom-0 right-[10%] translate-y-[20%] w-56 h-80 bg-yellow-200 group-hover:block group-hover:animate-slideUp'>
                        <Image className='w-full h-full object-cover' src={pic5} alt='model photo' />
                    </div>
                    <div className='absolute hidden bottom-0 left-[10%] translate-y-[20%] w-40 h-64 bg-yellow-200 group-hover:block group-hover:animate-slideUp'>
                        <Image className='w-full h-full object-cover' src={pic6} alt='model photo' />
                    </div>
                </div>
                <div className='group relative w-full h-20 flex flex-col justify-center items-center text-slate-600 hover:text-purple-200 hover:bg-gradient-to-b hover:from-violet-900 transition ease-in-out delay-75 hover:to-fuchsia-600 md:h-40 border-b-2 border-slate-600 py-3'>
                    <h2 className='text-3xl font-poppins md:text-5xl'>Costume</h2>
                    <p>CLOTH & WEARING</p>
                    <div className='absolute hidden bottom-0 left-[10%] translate-y-[20%] w-56 h-80 bg-yellow-200 group-hover:block group-hover:animate-slideUp'>
                        <Image className='w-full h-full object-cover' src={pic7} alt='model photo' />
                    </div>
                    <div className='absolute hidden bottom-0 right-[10%] translate-y-[20%] w-40 h-64 bg-yellow-200 group-hover:block group-hover:animate-slideUp'>
                        <Image className='w-full h-full object-cover' src={pic8} alt='model photo' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Expertise