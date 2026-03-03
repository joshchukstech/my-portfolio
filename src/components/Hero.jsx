import React from 'react'
import { motion as Motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <Motion.div
    initial={{ opacity: 0, y:50 }}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 2, ease: 'easeOut'}}
    viewport={{ once: false, amoun:0.2 }}
    id='Home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#01020a] via-[#000011] to-[#02000e]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row 
      items-center justify-between'>
        {/* left side content */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl text-gray-50 md:text-6xl font-bold mb-4'>
            Hi, I'm <span className='text-blue-500'>Joshua</span>
          </h1>
          <h2 className='text-2xl text-gray-50 md:text-4xl font-semibold mb-6 typewriter'>Full Stack Web Developer
          </h2>
          <p className='text-lg text-gray-300 mb-8'>
            I Create business websites with modern technologies and innovative design</p>
            <div className='flex space-x-4'>
              <a href="#projects" className='text-gray-50 px-6 py-3 bg-blue
              rounded-lg font-medium hover:bg-blue-700 transition
              duration-300'>View Work</a>
              <a href="#contact" className='text-gray-50 px-6 py-3 border border-blue
              rounded-lg font-medium hover:bg-blue/20 transition
              duration-purple-300'>Contact Me</a>
            </div>
        </div>

        {/* right side content */}
        <div className='md:w-1/2 flex justify-center'>
        <div className='relative w-64 h-64 md:w-80 md:h-80'>
          <div className='basolute inset-0 rounded-full
          bg-gradient-to-r from-blue to-green opacity-70'>
            <Motion.img
            animate={{y:[0, -20, 0]}}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className='relative rounded-full w-64 h-64 md:w-80
            md:h-80 object-cover z-10'
            src={assets.profileImg} alt='Profile'/>
          </div>
        </div>
        </div>
      </div>
      ''
    </Motion.div>
  )
}

export default Hero