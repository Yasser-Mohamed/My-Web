import React from 'react';
import {motion} from "framer-motion"
import {fadeIn} from "../../variants"

const Contact = () => {
    return (
        <section className='py-16 lg:section' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row '>
                    {/* text */}
                    <motion.div
                    variants={fadeIn('right',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false ,amount:0.3}}
                    className='flex justify-center items-center flex-1'>
                        <div>
                            <h4 className='text-xl text-accent uppercase font-medium mb-2'>Get in touch</h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>let's work <br/>together!</h2>
                        </div>
                    </motion.div>
                    {/* form */}
                    <motion.form
                    variants={fadeIn('left',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false ,amount:0.3}}
                    className='flex-1 border rounded-2xl flex flex-col items-start gap-y-6 p-6 pb-24'>
                        <input
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent
                        transition-all '
                        placeholder='Your email'
                        type="text" />
                        <input
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent
                        transition-all '
                        placeholder='Your name'
                        type="text" />
                        <textarea 
                        className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent
                        transition-all resize-none mb-12'
                        placeholder='Your message'
                        ></textarea>
                        <button className='btn btn-lg'>Send message </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
