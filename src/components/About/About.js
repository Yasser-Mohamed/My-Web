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

    const handleDownload = () => {
        const fileUrl = 'https://yasser-mohamed.github.io/My-Web/Yasser-Mohamed-resume.pdf'; // replace with your file URL
        const fileName = 'Yasser-Mohamed-resume.pdf'; // replace with your file name
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

    return (
        <section className='section ' id='about' ref={ref}>
            <div className='container mx-auto '>
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
                lg:gap-x-20 lg:gap-y-0 h-screen'>
                    {/* img */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] hidden md:flex mix-blend-lighten bg-top'>

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
                            I am a Professional Front-End Developer With 2 Year's of Experience.
                        </h3>
                        <p className='mb-8'>
                        As a Front-End Developer with experience in React.js, my objective is to leverage my skills and knowledge to contribute to the success of a dynamic and innovative team. I strive to create high-quality, responsive, and user-friendly web applications that meet and exceed client expectations. I am committed to continued learning and development and am eager to collaborate with others to deliver exceptional results.
                        </p>

                        {/* stats */}
                        <div className='flex mb-12 flex-col'>
                            <div className='mb-4'>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    {
                                        inView ? <CountUp start={0} end={2} duration={3} /> :
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
                                <button onClick={handleDownload} className='btn-link flex justify-center items-center md:gap-2 text-sm md:text-lg text-gradient'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#42a6e3" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                <span>Download CV</span></button>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>

        </section>
    );
}

export default About;
