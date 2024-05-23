import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Header from './components/header/Header'
function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route  path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
