import { } from 'react'

import './App.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { ShowRoom } from './components/showRoom'
import { Login } from './components/login'
import { Register } from './components/register'
import { AdminControll } from './components/adminControll'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export function App() {

  return (
    <div className='min-h-screen'>
      <Header />    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowRoom />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminControll />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  )

}
