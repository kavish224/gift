import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { Buy } from './pages/Buy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/buy/:title' element={<Buy/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
