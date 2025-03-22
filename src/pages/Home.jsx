import React from 'react'
import Navbar from '../components/Navbar'
import heroImage from '../assets/hero.jpg'
import Hero from '../components/Hero'
import About from '../components/About'
import Alumni from '../components/Alumni'

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Alumni />
    </div>
  )
}

export default Home