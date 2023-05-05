import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Price from './pages/Price'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/price' element={<Price />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
