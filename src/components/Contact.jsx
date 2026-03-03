import React from 'react'
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
// import { useInView } from "motion/react";
import { motion as Motion } from 'framer-motion'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaRobot, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
//New line to clear form after submission
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  // const isInView = useInView(ref, { margin: "-200px" });

  return (
    <Motion.div
     initial={{opacity:0, y:50}}
     whileInView={{opacity:1, y:0}}
     transition={{duration: 1, ease: 'easeOut'}}
     viewport={{once: false, amount: 0.2}}
     id='contact'
     className='py-20 bg-dark-200'
     >
      <div className='container mx-auto px-6'>
        <h2 className='text-gray-50 text-3xl font-bold text-center mb-4'>
            Get In
            <span className='text-blue'>Touch</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto
        mb-16'>Have a project in mind or want to collaborate? Let'
          talk!</p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl
          mx-auto'>
          {/* Contact form*/}
            <div>
              <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                <div>
                  <label htmlFor="name" className='block 
                  text-gray-300 mb-2'>Your Name</label>
                  <input className='text-gray-50 w-full bg:dark-300 border
                  border-dark-400 rounded-lg px-4 py-3
                  outline-noone'
                  type="text"
                  name='name'
                  placeholder='John Doe' />
                </div>

                <div>
                  <label htmlFor="email" className='block 
                  text-gray-300 mb-2'>Email Address</label>
                  <input className='text-gray-50 w-full bg:dark-300 border
                  border-dark-400 rounded-lg px-4 py-3
                  outline-noone'
                  type="email"
                  name='user_email'
                  placeholder='johndoe@email.com' />
                </div>

                <div>
                  <label htmlFor="message" className='block 
                  text-gray-300 mb-2'>Your Message</label>
                  <textarea className='text-gray-50 w-full h-40 bg:dark-300 border
                  border-dark-400 rounded-lg px-4 py-3
                  outline-noone'
                  type="text" 
                  name='message'
                  placeholder='Write your message...'/>
                </div>
                <button type='submit' className='text-gray-50 w-full px-6 py-3
                bg-blue rounded-lg font-medium hover:bg-blue-700
                transition duration-300 cursor-pointer'>
                  Send
                  </button>
                  {success && <span>Your message has been sent!</span>}
                  {error && <span>Something went wrong!</span>}
              </form>
            </div>
          {/* Contact information */}
          <div className='space-y-8'>
            <div className='flex items-start'>
              <div className='text-blue text-2xl mr-4'>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className='text-gray-50 text-lg font-semibold
                mb-2'>Location</h3>
                <p className='text-gray-400'>Enugu, 
                  Nigeria</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-blue text-2xl mr-4'>
                <FaEnvelope />
              </div>
              <div>
                <h3 className='text-gray-50 text-lg font-semibold
                mb-2'>Email</h3>
                <p className='text-gray-400'>chukwuemekajoshua32@gmail.com</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-blue text-2xl mr-4'>
                <FaWhatsapp />
              </div>
              <div>
                <h3 className='text-gray-50 text-lg font-semibold
                mb-2'>Whatsapp</h3>
                <p className='text-gray-400'>+234 703 302 2305</p>
                <p className='text-gray-400'>+234 915 199 5031</p>
              </div>
            </div>

            <div>
              <h3 className='text-gray-50 text-lg font-semibold mb-4'>Follow 
                Me</h3>
              <div className='flex space-x-4'>
                <a href="https://github.com/Josh161tech" className='w-12 h-12 rounded-full
                bg-dark-300 flex items-center justify-center
                text-blue hover:bg-black hover:text-white
                transition duration-300'>
                  <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/joshua-ezugwu-b-eng
                -167909241?utm_source=share&utm_campaign=
                share_via&utm_content=profile&utm_medium=android_app"
                 className='w-12 h-12 rounded-full
                bg-dark-300 flex items-center justify-center
                text-blue hover:bg-blue hover:text-white
                transition duration-300'>
                  <FaLinkedin />
                </a>

                <a href="https://www.x.com/JoshuaEzugwu1" className='w-12 h-12 rounded-full
                bg-dark-300 flex items-center justify-center
                text-blue hover:bg-blue hover:text-white
                transition duration-300'>
                  <FaTwitter />
                </a>

                <a href="https://www.facebook.com/chukwuemeka.ezugwu.1" className='w-12 h-12 rounded-full
                bg-dark-300 flex items-center justify-center
                text-blue hover:bg-blue hover:text-white
                transition duration-300'>
                  <FaFacebook />
                </a>

                <a href="https://wa.me/2347033022305" className='w-12 h-12 rounded-full
                bg-dark-300 flex items-center justify-center
                text-green-500 hover:bg-white hover:text-green-500
                transition duration-300'>
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
          </div>
      </div>
    </Motion.div>
  )
}

export default Contact