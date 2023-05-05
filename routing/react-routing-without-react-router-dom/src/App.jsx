import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Price from './pages/Price'
import About from './pages/About'

function App() {
  const path = window.location.pathname;
  let Component = Home;

  if (path == '/price') {
    Component = Price;
  } else if (path == '/about') {
    Component = About;
  }

  return (
    <>
      <Navbar />
      <h1>Current path: {path}</h1>
      <Component />
    </>
  )
}

export default App
