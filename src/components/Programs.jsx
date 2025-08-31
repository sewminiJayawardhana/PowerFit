import React from 'react'
import { assets, programsData } from '../assets/assets'

const Programs = () => {
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Programs'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'><span className='underline underline-offset-4 decoration-1 under font-light'>Our</span> Programs</h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto' >At PowerFit, our programs are crafted to challenge limits, build confidence, and create healthier lifestyles in a motivating environment.</p>
      
      {/* slider button */}
        <div  className='flex justify-end items-center mb-8'>
            <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Program'>
                <img src={assets.left_arrow} alt="previous" />
            </button>

            <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Program'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>
        {/* Programs slider container */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'>
                {programsData.map((program,index)=>(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={program.image} alt={program.title} />
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Programs
