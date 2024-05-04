import React from 'react'

const VideoSection = () => {
    return (
        <div className='w-full h-screen'>
            <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src="/video1.webm" type="video/webm" />
            </video>
        </div>
    )
}

export default VideoSection