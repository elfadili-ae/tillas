import React from 'react'

const Marquee = () => {
    const tasks = [
        "Fashion",
        '*',
        "Brand Promotion",
        '*',
        "Family Shoots",
        '*',
        "Event",
        '*',
        "Interior Photography",
        '*',
    ]
    return (
        <div className='relative w-full flex  text-purple-200 bg-gradient-to-l from-fuchsia-800 to-pink-500 overflow-hidden'>
            <div className="relative flex overflow-x-hidden">
                <div className="py-4 flex justify-between animate-marquee whitespace-nowrap">
                    {tasks.map((element, i) => {
                        return <span key={i} className="text-4xl mx-10">{element}</span>
                    })}
                </div>

                <div className="absolute top-0 py-4 flex justify-between animate-marquee2 whitespace-nowrap">
                    {tasks.map((element, i) => {
                        return <span key={i} className="text-4xl mx-10">{element}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Marquee