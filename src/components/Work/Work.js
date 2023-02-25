import React from 'react';
import {fadeIn} from "../../variants";
import {motion} from "framer-motion";
import Img1 from "../../assets/portfolio-img1.png";
import Img2 from "../../assets/portfolio-img2.png";
import Img3 from "../../assets/portfolio-img3.png";

const Work = () => {
    return (
        <section className='section' id='work'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10 '>
                    <motion.div 
                    variants={fadeIn('right',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false ,amount:0.7}}
                    className='flex flex-1 flex-col gap-y-20  mb-10 lg:mb-0 '>
                        {/* text */}
                        <div className='mb-0'>
                            <h2 className='h2 leading-tight text-accent'>My Latest <br/> Work</h2>
                            <button className='btn btn-sm'><a href="https://github.com/Yasser-Mohamed">View All Projects</a></button>
                        </div>
                        {/* image */}
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
                            {/* overly */}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            {/* img 1*/}
                            <img
                            className='group-hover:scale-125 transition-all duration-500'
                            src={Img1} alt="img" />
                            {/* pretitle */}
                            <div
                             className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>UI/UX Design</span>
                            </div>
                            {/* title */}
                            <div 
                            className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-3xl'>Snap</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={fadeIn('left',0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false ,amount:0.7}}
                    className='flex flex-1 flex-col gap-y-10 '>
                        {/* image 2 */}
                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
                            {/* overly */}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            {/* img */}
                            <img
                            className='group-hover:scale-125 transition-all duration-500 '
                            src={Img2} alt="img" />
                            {/* pretitle */}
                            <div
                             className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>UI/UX Design</span>
                            </div>
                            {/* title */}
                            <div 
                            className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-3xl'>Kasper</span>
                            </div>
                        </div>
                        {/* image3 */}
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
                            {/* overly */}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            {/* img */}
                            <img
                            className='group-hover:scale-125 transition-all duration-500'
                            src={Img3} alt="img" />
                            {/* pretitle */}
                            <div
                             className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>UI/UX Design</span>
                            </div>
                            {/* title */}
                            <div 
                            className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-3xl'>Log In</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Work;
