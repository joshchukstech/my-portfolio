import React from 'react'
// import  { nav } from 'framer-motion/client'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8
     shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <a href="a" className='text-3xl font-bold text-white'>
            Joshchuks
            <span className='text-blue'>Tech</span>
            <div className='w-4 h-4 bg-blue rounded-full'></div>
          </a>
        </div>
        <div className='hidden md:flex space-x-10'>
          <a href="#Home" className='relative text-white/80 transition 
          duration-300 hover:text-blue group'>
            <span>Home</span>
            <span className='absolute left-0 -button-1 w-0 h-0.5
            bg-blue transition-all duration-300 group-hover:w-full'></span>
          </a>

          <a href="#about" className='relative text-white/80 transition 
          duration-300 hover:text-blue group'>
            <span>About</span>
            <span className='absolute left-0 -button-1 w-0 h-0.5
            bg-blue transition-all duration-300 group-hover:w-full'></span>
          </a>

          <a href="#skills" className='relative text-white/80 transition 
          duration-300 hover:text-blue group'>
            <span>Skills</span>
            <span className='absolute left-0 -button-1 w-0 h-0.5
            bg-blue transition-all duration-300 group-hover:w-full'></span>
          </a>

          <a href="#projects" className='relative text-white/80 transition 
          duration-300 hover:text-blue group'>
            <span>Projects</span>
            <span className='absolute left-0 -button-1 w-0 h-0.5
            bg-blue transition-all duration-300 group-hover:w-full'></span>
          </a>

          {/* <a href="#experience" className='relative text-white/80 transition 
          duration-300 hover:text-blue group'>
            <span>Experience</span>
            <span className='absolute left-0 -button-1 w-0 h-0.5
            bg-blue transition-all duration-300 group-hover:w-full'></span>
          </a> */}

          <a href="#contact" className='relative text-white/80 transition 
          duration-300 hover:text-blue group'>
            <span>Contact</span>
            <span className='absolute left-0 -button-1 w-0 h-0.5
            bg-blue transition-all duration-300 group-hover:w-full'></span>
          </a>
        </div>
        {/* Mobile button */}
        <div className='md:hidden bg-dark-200 p-2 rounded-md text-white/80'>
          {
            showMenu ?
            <FaXmark onClick={()=>setShowMenu(!showMenu)} 
            className='text-2xl cursor-pointer'/>:
            <FaBars onClick={()=>setShowMenu(!showMenu)} 
            className='text-2xl cursor-pointer'/>
          }
        </div>
      </div>
      {/* Mobile menus */}
      {
        showMenu && (
          <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg 
          p-4 flex flex-col space-y-4 text-center justify-center'>
            <a onClick={()=>setShowMenu(!showMenu)} href="#Home" className='relative text-white/80 transition 
          duration-300 hover:text-blue group'>
            <span>Home</span>
          </a>

          <a onClick={()=>setShowMenu(!showMenu)} href="#about" className='relative text-white/80 transition 
          duration-300 hover:text-blue group'>
            <span>About</span>
          </a>

          <a onClick={()=>setShowMenu(!showMenu)} href="#skills" className='relative text-white/80 transition 
          duration-300 hover:text-blue group'>
            <span>Skills</span>
          </a>

          <a onClick={()=>setShowMenu(!showMenu)} href="#projects" className='relative text-white/80 transition 
          duration-300 hover:text-blue group'>
            <span>Projects</span>
          </a>

          {/* <a onClick={()=>setShowMenu(!showMenu)} href="#experience" className='relative text-white/80 transition 
          duration-300 hover:text-blue group'>
            <span>Experience</span>
          </a> */}

          <a onClick={()=>setShowMenu(!showMenu)} href="#contact" className='relative text-white/80 transition 
          duration-300 hover:text-blue group'>
            <span>Contact</span>
          </a>
          </div>
        )
      }
    </nav>
  )
}

export default Navbar