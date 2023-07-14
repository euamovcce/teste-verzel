import {  } from 'react'

import './App.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { ShowRoom } from './components/showRoom'
import { Login } from './components/login'
import { Register } from './components/register'

export function App() {

  return (
    <div>
      <Header/>
      <Login/>
      <ShowRoom/>
      <Footer/>
    </div>
  )

}
 