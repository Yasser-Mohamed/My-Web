import React from 'react';
import image from "../../assets/avatar.png"
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants"
const Banner = () => {
    return (
        <section className='min-h-[78vh] flex items-center' id='home'>
            <div className='container mx-auto mt-0'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center '>
                    {/* text */}
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>YASSER <span>MR</span></motion.h1>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                            <span className='text-white mb-11 text-4xl'>I am a </span>
                            <TypeAnimation
                                sequence={['Front-End Developer',
                                    2500,
                                    'Back-End Developer',
                                    2500,
                                    'MERN-Stack Developer',
                                    2500]}
                                speed={50}
                                repeat={Infinity}
                                className='text-accent mt-6 inline text-4xl'
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='mb-8 max-w-lg mx-auto lg:mx-0'>
                            I'm a Freelance Front-End Developer with 1 year of Experience.
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='flex items-center gap-x-6 max-w-max mb-12 lg:mb-4 mx-auto lg:mx-0'>
                            <button className='btn btn-lg'><a href="https://www.upwork.com/ab/flservices/workwith/yassermr418">Contact me</a></button>
                            <a href="https://www.linkedin.com/in/yasser-mohamed418/" className='btn-link text-gradient'>My Portfolio</a>
                        </motion.div>
                        {/* social */}
                        <motion.div
                            variants={fadeIn('up', 0.7)}
                            initial='hidden'
                            whileInView={'show'}
                            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
                            <a href="https://github.com/Yasser-Mohamed">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/yasser-mohamed418/">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100008453076365">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com/YasserMR418">
                                <FaTwitter />
                            </a>
                        </motion.div>
                    </div>
                    {/* image */}
                    <motion.div
                        variants={fadeIn('down', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mt-0'>
                        <img src={image} alt="img" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
