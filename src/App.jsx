import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './comonent/Navbar'
import HomeSection from './comonent/HomeSection'
import ServicesSection from './comonent/ServicesSection'

const App = () => {
  return (
   <div>
    <Navbar/>
    <HomeSection/>
    <ServicesSection/>
   </div>
  )
}

export default App