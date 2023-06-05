import React, { useRef } from 'react';
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const notfiy = () => {
        toast.success('🥰🔥 Successfully Sent!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const errorMassage = () => {
        toast.error('🙄the message is empty!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    // ☹️Enter valid email..
    const errorEmail = () => {
        toast.error('☹️Enter valid email..', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const isValidEmail = (email) => {
            // basic email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        if (message.length === 0) {
            errorMassage()
            return;
        }
        if (!isValidEmail(email)) {
            errorEmail()
            return;
        }
        else {
            emailjs.sendForm('service_u9x3xys', 'template_vda0wg6', form.current, 'Z9E8zv7o0x0ZLqHVu')
                .then((result) => {
                    notfiy()
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }

    };
    return (
        <section className='py-16 lg:section' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row '>
                    {/* text */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex justify-center items-center flex-1'>
                        <div>
                            <h4 className='text-xl text-accent uppercase font-medium mb-2'>Get in touch</h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>let's work <br />together!</h2>
                        </div>
                    </motion.div>
                    {/* form */}
                    <motion.form
                        ref={form} onSubmit={sendEmail}
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 border rounded-2xl flex flex-col items-start gap-y-6 p-6 pb-24'>
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent
                        transition-all '
                            placeholder='Your email'
                            name='user_email'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="text" />
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent
                        transition-all '
                            placeholder='Your name'
                            name='user_name'
                            required
                            type="text" />
                        <textarea
                            className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent
                        transition-all resize-none mb-12'
                            placeholder='Your message'

                            name='message'
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <input type="submit" className='btn btn-lg' value='Send message' />
                        {message && (<ToastContainer
                            position="top-center"
                            autoClose={5000}
                            limit={3}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />)}
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            limit={3}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
