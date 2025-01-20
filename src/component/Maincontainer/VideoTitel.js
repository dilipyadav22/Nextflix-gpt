import React from 'react'

const VideoTitel = ({titel , overview}) => {
  return (
    <div className='   aspect-video pt-40 px-16 absolute  text-white  bg-gradient-to-r from-black overflow-hidden  opacity-80'>
        <h4 className='font-bold text-4xl  '>{titel}</h4>
        <p className='text-lg w-[40%] mt-4 text-balance'>{overview}</p>

        <div className='flex gap-4 mt-8 '>
            <button className=' px-6 text-xl font-medium py-2.5 rounded-xl  opacity-80 bg-white text-black focus:opacity-60' >
                ▶️ Play Now</button>
            <button className='bg-gray-500 px-10 opacity-80 text-xl font-medium py-2.5 rounded-xl text-white'>
                More Info.</button>
        </div>
    </div>
  )
}

export default VideoTitel