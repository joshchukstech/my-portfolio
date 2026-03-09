import React from 'react'
import { motion as Motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
      <Motion.div
      initial={{ opacity: 0, y:50 }}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 1, ease: 'easeOut'}}
      viewport={{ once: false, amount: 0.2 }}
      id='about'
      className='py-20 bg-dark-200'>
        <div className='container mx-auto px-6'>
          {/* Heading */}
          <h2 className='text-gray-50 text-3xl font-bold text-center mb-4'>About
            <span className='text-blue-500'>Me</span>
          </h2>
          <p className='text-white text-center max-w-2xl mx-auto mb-16'>
            Get to know more about my journey, skills, and what drives me as a developer.
          </p>

          {/* image + my journey */}
          <div className='flex flex-col md:flex-row items-center gap-12'>
            {/* Image */}
            <div className='md:w-1/2 rounded-2xl overflow-hidden'>
              <Motion.img 
              initial={{ opacity: 0, y:50 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: false, amount:0.2 }}
              className='w-full h-full object-cover'  
              src={assets.profileImg} alt="Profile" />
            </div>
            {/* Text content */}
            <div></div>
            <Motion.div 
            initial={{ opacity: 0, y:50 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount:0.2 }}
            className='md:w-1/2'
            >
            <div className='rounded-2xl p-8'>
              <h3 className='text-gray-50 text-2xl font-semibold mb-6'>My Journey
              </h3>
              <p className='text-gray-300 mb-6'>
                My professional life has been defined by a commitment to foundational infrastructure. 
                As an Electrical Engineer, I honed essential skills in reliability, safety,
                and complex project execution. This experience taught me that robustness and attention 
                to detail are paramount, whether you're working with circuits or code.
              </p>
              <p className='text-gray-300 mb-12'>
                I carried this philosophy into Full-Stack Web Development. Proficient in technologies like
                React.js, Next.js, and Node.js, I specialize in designing and deploying powerful e-commerce
                and business websites. My unique background allows me to build digital solutions that are not
                only technologically advanced but are also grounded in practical operational needs, ensuring
                they drive both online sales and business efficiency. I seek to deliver high-quality solutions
                by leveraging this exceptional blend of practical and digital expertise for my clients.
              </p>

              {/* Cards */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    aboutInfo.map((data, index)=>(
                      <div key={index} className='bg-dark-300 
                      rounded-2xl p-6 transition-transform
                      duration-300 hover:-translate-y-2
                      cursor-pointer'>
                          <div className='text-blue text-4xl
                          mb-4'>
                            <data.icon />
                          </div>
                          <h3 className='text-gray-50 text-xl font-semibold
                          mb-2'>{data.title}</h3>
                          <p className='text-gray-300'>{data.description}</p>
                      </div>
                  ))
                }
              </div>
            </div>
            </Motion.div>
          </div>
        </div>
      </Motion.div>
  )
}

export default About