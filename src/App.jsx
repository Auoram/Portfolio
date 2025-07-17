import React from 'react'
import bgvideo from './assets/earthVideo.mp4'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <div>
      <div className='h-[700px] relative'>
        <video autoPlay loop muted className='fixed right-0 top-0 h-[800px] w-full object-cover z[-1]'>
          <source src={bgvideo} type='video/mp4'/>
        </video>
        <Navbar bgColor="bg-black/10"/>
        <Hero />
      </div>
    </div>
  )
}

export default App
