import React from 'react'

const GetToKnow = () => {
    return (
        <section id='gettoknow' className='relative px-3 overflow-hidden w-full font-poppins flex flex-col justify-center min-h-screen text-purple-200 bg-gradient-to-b from-black to-slate-700'>
            <div className='relative w-full flex gap-2 justify-center items-center max-md:flex-col'>
                <p className='text-center'>GET TO<br />X <br />Know ME</p>
                <h1 className='text-6xl md:text-9xl'>STYLE</h1>
            </div>
            <div className='w-full flex gap-2 justify-center items-center max-md:flex-col'>
                <h1 className='text-6xl md:text-9xl text-center'>FOR PASSION AND</h1>
            </div>
            <div className='relative w-full max-md:flex-col-reverse flex gap-2 justify-center items-center'>
                <p className='text-center'>Working as a creative &<br />outsource your fashion design<br />
                    project & get it quickly done and<br />delivered remotely online.</p>
                <h1 className='text-6xl md:text-9xl'>LIFE'S VIBE</h1>
            </div>

            <svg
                className='absolute w-96 z-0 -top-10 left-0 -translate-x-32 opacity-40'
                viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" id="blobSvg">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" className='stop2'></stop>
                        <stop offset="100%" className='stop1'></stop>
                    </linearGradient>
                </defs>
                <path id="blob" d="M415,322Q421,394,352,417Q283,440,210,443Q137,446,92.5,385Q48,324,46.5,249.5Q45,175,88,109.5Q131,44,203.5,72Q276,100,351,101.5Q426,103,417.5,176.5Q409,250,415,322Z" fill="none" strokeWidth="7px" stroke="url(#gradient)"></path>
            </svg>
            <svg
                className='absolute w-64 z-0 -bottom-10 right-0 translate-x-32 opacity-40'
                viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" id="blobSvg">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" className='stop2'></stop>
                        <stop offset="100%" className='stop1'></stop>
                    </linearGradient>
                </defs>
                <path id="blob" d="M415,322Q421,394,352,417Q283,440,210,443Q137,446,92.5,385Q48,324,46.5,249.5Q45,175,88,109.5Q131,44,203.5,72Q276,100,351,101.5Q426,103,417.5,176.5Q409,250,415,322Z" fill="none" strokeWidth="7px" stroke="url(#gradient)"></path>
            </svg>
        </section>
    )
}

export default GetToKnow