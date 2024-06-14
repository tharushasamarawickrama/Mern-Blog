import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

export default function sachith() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
