import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="mx-auto max-w-[1920px] relative">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App