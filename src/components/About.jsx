import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion';

const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:200}}
      transition={{duration: 2}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About </h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Fitness, Dedicated to Your Goals</p>
      <div className='flex flex-col md:flex-row item-center md:items-start md:gap-20'>
        <img src={assets.about_img} alt="" className=' w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>

                <div>
                    <p className='text-4xl font-medium text-gray-800'>20+</p>
                    <p>Years of Excellence</p>
                </div>

                <div>
                    <p className='text-4xl font-medium text-gray-800'>15+</p>
                    <p>Certified Trainers</p>
                </div>

            </div>
            <p className='my-10 max-w-lg text-justify'>At PowerFit, we’re more than just a gym—we’re a community built on passion, dedication, and results. Our mission is to inspire healthier lifestyles by combining expert guidance, modern facilities, and a supportive environment where every member can thrive. Whether you aim to build strength, improve endurance, or find balance, PowerFit is here to fuel your journey.</p>
            <button className='bg-orange-500 text-white px-8 py-2 rounded'>Learn more</button>
        </div>

      </div>
    </motion.div>
  )
}

export default About
