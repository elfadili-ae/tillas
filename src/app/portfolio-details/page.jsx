'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import pic1 from '/public/mp1.png'
import pic2 from '/public/mp2.png'
import logo from '/public/tillas.png'
import Contact from '../../components/Contact'
import Menu from '../../components/Menu'


const page = () => {
    return (
        <ParallaxProvider>
            < div className='absolute w-full min-h-[50vh] bg-black scroll-smooth px-5 overflow-hidden' >
                <Menu />
                <div className='relative z-10 p-8 text-purple-200 flex flex-col justify-end h-[50vh] bg-black'>
                    <Image src={logo} alt='tillas picture' className='absolute w-28 top-4 left-4' />
                    <p>Fashion</p>
                    <h1 className='text-3xl md:text-6xl'>Bruce Mars</h1>
                </div>
                <Parallax className='relative z-0 w-full h-[70vh] object-cover overflow-hidden' speed={-25}>
                    <div className='w-ful h-full object-cover'>
                        <Image fill className='w-full h-full' src='/bruce-mars.jpg' alt='Bruce Mars&apos;s photo' />
                    </div>
                </Parallax>
                <Parallax className='w-full py-10 object-cover bg-black' speed={-15}>
                    <div className='w-full py-6 max-md:gap-6 text-purple-200 min-h-[60%] flex flex-col md:flex-row items-center md:justify-between md:items-center'>
                        <div className='w-full flex-1'>
                            <h2 className='text-4xl md:text-6xl mb-4'>It&apos;s all about<br />Fashion</h2>
                            <Link href='/' className='px-4 py-1 border-2 border-purple-200 rounded-full hover:text-black hover:bg-purple-200'>VISIT LINK</Link>
                        </div>
                        <div className='w-full flex-1'>
                            <p className='mb-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                            </p>
                            <p>In this demo project, we will provide an overview of the interior design process, showcasing the various stages involved in crafting stunning and personalized living and working spaces. From conceptualization to execution, You need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.!
                            </p>
                            <div className='flex flex-wrap gap-8 mt-6'>
                                <p><span className='text-lg font-bold'>Clients</span><br />THE ORGANIC CRAVE</p>
                                <p><span className='text-lg font-bold'>Year</span><br />20/01/2018</p>
                                <p><span className='text-lg font-bold'>Role</span><br />FASHION DESIGN</p>
                            </div>
                        </div>
                    </div>
                </Parallax>
                <Parallax className='relative z-0 w-full h-screen object-cover overflow-hidden' speed={0}>
                    <div className='w-full h-full object-cover'>
                        <Image fill className='w-full h-full' src='/ben-rosett.jpg' alt='Ben Rosett&apos;s photo' />
                    </div>
                </Parallax>
                <Parallax className='relative z-10 w-full py-10 object-cover bg-black' speed={10}>
                    <div className='w-full py-6 max-md:gap-6 text-purple-200 min-h-[60%] flex flex-col md:flex-row items-center md:justify-between md:items-center'>
                        <div className='w-full flex-1'>
                            <h2 className='text-4xl md:text-6xl'>Finishing &<br />Touches</h2>
                        </div>
                        <div className='w-full flex-1'>
                            <p className='mb-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                            </p>
                            <p>In this demo project, we will provide an overview of the interior design process, showcasing the various stages involved in crafting stunning and personalized living and working spaces. From conceptualization to execution, You need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.!
                            </p>
                        </div>
                    </div>
                </Parallax>
                <Parallax speed={-20} className='relative z-0 bg-black w-full py-6 min-h-[40vh] overflow-hidden items-center justify-center flex flex-col md:flex-row gap-5'>
                    <div className='w-full md:aspect-square object-cover overflow-hidden'>
                        <Image src={pic1} alt="project photo" className='w-full aspect-auto' />
                    </div>
                    <div className='w-full md:aspect-square object-cover overflow-hidden'>
                        <Image src={pic2} alt="project photo" className='w-full aspect-auto' />
                    </div>
                </Parallax>

                <div className='relative z-10 bg-black w-full'>
                    <Contact />
                </div>
            </div >
        </ParallaxProvider >
    )
}

export default page