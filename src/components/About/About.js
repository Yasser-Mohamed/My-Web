import React from 'react';
import "./About.css"
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <section className='section' id='about' ref={ref}>
            <div className='container mx-auto '>
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
                lg:gap-x-20 lg:gap-y-0 h-screen'>
                    {/* img */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>

                    </motion.div>
                    {/* text */}
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1'>
                        <h2 className='h2 text-accent'>About me.</h2>
                        <h3 className='h3 mb-4'>
                            I am a Professional Front-End Developer With 1 Year of Experience.
                        </h3>
                        <p className='mb-8'>
                            I Create Successful Website That Is Fast And Easy To Use, I have Experience with Object-Oriented programming,
                            Data Structures and Front-End Development.
                        </p>

                        {/* stats */}
                        <div className='flex mb-12 flex-col'>
                            <div className='mb-4'>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {
                                        inView ? <CountUp start={0} end={1} duration={3} /> :
                                            null}
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Year of <br />
                                    Experience
                                </div>
                            </div>
                            <div className='flex gap-x-8 items-center justify-center'>
                                <button className='btn btn-lg'>
                                    <a href="https://wa.me/201141826327?text=">Contact me</a>
                                </button>
                                <a href="#" className='text-gradient bn-link'>My Portfolio</a>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>

        </section>
    );
}

export default About;
