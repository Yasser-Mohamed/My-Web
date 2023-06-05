import React from 'react';
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import Img1 from "../../assets/portfolio-img1.png";
import Img2 from "../../assets/portfolio-img2.png";
import Img3 from "../../assets/portfolio-img3.png";

const Work = () => {
    return (
        <section className='section' id='work'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10 '>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='flex flex-1 flex-col relative  mb-10 lg:mb-0 '>
                        {/* text */}
                        <div className='mb-40 lg:mb-20 lg:pb-[362px] relative'>
                            <div className='absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2'>
                            <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work</h2>
                            <button className='btn btn-sm'><a href="https://github.com/Yasser-Mohamed?tab=repositories">View All Projects</a></button>
                            </div>
                        </div>
                        {/* image */}
                        <div className='group relative  overflow-hidden border-2 border-white/50 rounded-xl '>
                            <div className=''>
                                {/* overly */}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            {/* img 1*/}
                            <img
                                className='group-hover:scale-125 transition-all duration-500'
                                src={Img1} alt="img" />
                            {/* pretitle */}
                            <div
                                className='absolute  flex gap-5 left-1/2 -translate-x-1/2 -bottom-10  group-hover:bottom-32 transition-all duration-500 z-50'>
                                <a className='' href="https://github.com/Yasser-Mohamed/e-commerce-product-page/tree/master">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                                    </svg>

                                </a>
                                <a href="https://yasser-mohamed.github.io/e-commerce-product-page/">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </a>
                            </div>
                            {/* title */}
                            <div
                                className='absolute -bottom-full left-1/2 -translate-x-1/2 group-hover:bottom-10 transition-all duration-700 z-50'>
                                <span className='text-gradient text-3xl'>product-page</span>
                            </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='flex flex-1 flex-col gap-y-10 '>
                        {/* image 2 */}
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '>
                            <div>
                                {/* overly */}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            {/* img */}
                            <img
                                className='group-hover:scale-125 transition-all duration-500 '
                                src={Img2} alt="img" />
                            {/* pretitle */}
                            <div
                                className='absolute  flex gap-5 left-1/2 -translate-x-1/2 -bottom-20  group-hover:bottom-32 transition-all duration-500 z-50'>
                                <a className='' href="https://github.com/Yasser-Mohamed/Shortening-API-Landing-Page/tree/master">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                                    </svg>

                                </a>
                                <a href="https://yasser-mohamed.github.io/Shortening-API-Landing-Page/">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </a>
                            </div>
                            {/* title */}
                            <div
                                className='absolute -bottom-full left-1/2 -translate-x-1/2 group-hover:bottom-6 transition-all duration-700 z-50'>
                                <span className='text-gradient text-2xl '>Shortly URL shortening API </span>
                            </div>
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
                                className='absolute  flex gap-5 left-1/2 -translate-x-1/2 -bottom-20  group-hover:bottom-32 transition-all duration-500 z-50'>
                                <a className='' href="https://github.com/Yasser-Mohamed/Store/tree/master">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                                    </svg>

                                </a>
                                <a href="https://yasser-mohamed.github.io/Store/">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </a>
                            </div>
                            {/* title */}
                            <div
                                className='absolute -bottom-20 left-1/2 -translate-x-1/2  group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-gradient text-2xl'>e-commerce Store</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Work;
