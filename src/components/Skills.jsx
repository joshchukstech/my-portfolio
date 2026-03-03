import React from 'react'
import { motion as Motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <Motion.div
      initial={{opacity: 0, y:50 }}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 1, ease: 'easeOut'}}
      viewport={{ once: false, amount: 0.2 }}
      id='skills'
      className='py-20 bg-dark-100'
      >
        <div className='container mx-auto px-6'>
          <h2 className='text-gray-50 text-3xl font-bold text-center mb-4'>
            My <span className='text-blue-500'>Skills</span>
          </h2>
          <p className='text-gray-400 text-center max-w-2xl mx-auto 
          mb-16'>Technologies that I work with...</p>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8
          max-w-5xl mx-auto'>
            {/* Skill Item */}
            {
              skills.map((skill, index) => (
                <div key={index} className='bg-dark-300 rounded-lg p-6
                hover:-translate-y-2 transition duration-300
                cursor-pointer'>
                  <div className='text-gray-50 flex items-center mb-4'>
                    <skill.icon className='w-12 h-12 text-blue
                    mr-6' />
                    <h3 className='text-xl font-semibold'>{skill.title}</h3>
                     </div>
                    <p className='text-gray-400 mb-4'>{skill.description}</p>
                    <div className='flex flex-wrap gap-2'>
                      {skill.tags.map((tech)=>(
                        <span key={tech} className='text-gray-50 px-3 py-1 
                        bg-dark-400 rounded-full text-sm'>{tech}</span>
                      ))}
                   
                  </div>
                </div>
              ))
            }

          </div>
        </div>
    </Motion.div>
  )
}

export default Skills