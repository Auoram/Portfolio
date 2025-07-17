import React from 'react'
import { useState } from "react"
import logo from '../../assets/logo2.png'
import menu from '../../assets/menu-white.svg'

const Navbar = ({ bgColor }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`fixed top-0 right-0 w-full z-50 ${bgColor} backdrop-blur-sm py-4 px-2 lg:px-8`}>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <a href='/'><img src={logo} alt="Logo" className='w-20'/></a>
          </div>
          <div className='text-white hidden lg:block'>
            <ul className='flex items-center gap-6 text-xl py-4'>
                <li>
                    <a href="/pages/about">About me</a>
                </li>
                <li>
                    <a href="/pages/project">Projects</a>
                </li>
                <li>
                    <a href="/pages/formation">Formation</a>
                </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl"
            >
              <img src={menu} alt="Menu" className='w-10'/>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col gap-4 bg-black/70 text-white text-lg p-4 rounded-lg">
              <li>
                <a href="/pages/about">About Me</a>
              </li>
              <li>
                <a href="/pages/project">Projects</a>
              </li>
              <li>
                <a href="#">Formation</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar