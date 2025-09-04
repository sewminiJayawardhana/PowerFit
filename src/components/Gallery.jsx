import {motion} from 'framer-motion';
import { assets,galleryData } from '../assets/assets';
import { useEffect ,useState } from 'react';

const Gallery = () => {
    const [currentIndex,setCurrentIndex]=useState(0);
    const[cardsToShow,setCardsToShow]=useState(1);
    
        useEffect(()=>{
            const updateCardsToShow =()=>{
                if(window.innerWidth >= 1024){
                    setCardsToShow(3);
            }else{
                setCardsToShow(1)
            }
        };
            updateCardsToShow();
    
            window.addEventListener('resize',updateCardsToShow);
            return ()=> window.removeEventListener('resize',updateCardsToShow);
        
        },[])
    
        const nextImg =()=>{
            setCurrentIndex((prevIndex)=>prevIndex + 1 >= galleryData.length ? 0 : prevIndex + 1);
        };
    
            const prevImg =()=>{
            setCurrentIndex((prevIndex)=> prevIndex - 1 < 0 ? galleryData.length - 1 : prevIndex - 1);
        };
    
  return (
    <motion.div 
    initial={{opacity: 0, x:100}}
      transition={{duration: 1.6}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once:true}}
        className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Gallery'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'><span className='underline underline-offset-4 decoration-1 under font-light'>Our</span> Gallery</h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Discover the energy of PowerFit through our gallery. From powerful workouts to inspiring moments, these snapshots showcase the spirit of our fitness community.</p>
        
        {/* slider button */}
        <div className='flex justify-end items-center mb-8'>
            <button onClick={prevImg}
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous image'>
                <img src={assets.left_arrow} alt="previous" />
            </button>

            <button onClick={nextImg}
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Program'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>

                {/* Images slider container */}
                <div className='overflow-hidden'>
                    <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{transform:`translateX(-${(currentIndex * 100)/cardsToShow}%)`}}
                    >
                        {galleryData.map((gallery,index)=>(
                            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4 md:w-1/4'>
                                <img src={gallery.image}  className='w-full h-auto mb-5'/>
                                
                            </div>
                        ))}
                    </div>
                </div>
    </motion.div>
  )
}

export default Gallery
