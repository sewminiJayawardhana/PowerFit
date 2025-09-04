import React, { use, useEffect, useState } from 'react'
import { assets, programsData } from '../assets/assets'
import { motion } from 'framer-motion';

const Programs = () => {
    const [currentIndex,setCurrentIndex]=useState(0);
    const[cardsToShow,setCardsToShow]=useState(1);

    useEffect(()=>{
        const updateCardsToShow =()=>{
            if(window.innerWidth >= 1024){
                setCardsToShow(programsData.length);
        }else{
            setCardsToShow(1)
        }
    };
        updateCardsToShow();

        window.addEventListener('resize',updateCardsToShow);
        return ()=> window.removeEventListener('resize',updateCardsToShow);
    
    },[])

    const nextProgram =()=>{
        setCurrentIndex((prevIndex)=>(prevIndex + 1)% programsData.length)
    }

        const prevProgram =()=>{
        setCurrentIndex((prevIndex)=> prevIndex === 0 ?  programsData.length-1 : prevIndex -1)
    }

  return (
    <motion.div 
    initial={{opacity: 0, x:-200}}
      transition={{duration: 1.8}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once:true}}
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Programs'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'><span className='underline underline-offset-4 decoration-1 under font-light'>Our</span> Programs</h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto' >At PowerFit, our programs are crafted to challenge limits, build confidence, and create healthier lifestyles in a motivating environment.</p>
      
      {/* slider button */}
        <div  className='flex justify-end items-center mb-8'>
            <button onClick={prevProgram}
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Program'>
                <img src={assets.left_arrow} alt="previous" />
            </button>

            <button onClick={nextProgram}
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Program'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>
        {/* Programs slider container */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'
            style={{transform:`translateX(-${(currentIndex * 100)/cardsToShow}%)`}}
            >
                {programsData.map((program,index)=>(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4 md:w-1/4'>
                        <img src={program.image} alt={program.title} className='w-full h-auto mb-5'/>
                        <div className='absolute left-0 right-0 bottom-1  flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                <h2 className='text-xl font-semibold text-gray-800'>
                                    {program.title}
                                </h2>
                                <p className='text-gray-500 text-sm'>
                                    {program.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </motion.div>
  )
}

export default Programs
