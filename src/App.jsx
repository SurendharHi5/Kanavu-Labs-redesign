import { useState } from 'react'
import './App.css'
import Com from './components/Com'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Product from './pages/Product'
import Services from './pages/Services'
import homeData from './data/homeData.json'
import clientsData from "./data/clientsData.json"
import { proContext } from './context/proContext'

function App() {

  const [homeDatas,setHomeDatas] = useState(homeData)
  const [clientsDatas,setClientsDatas] = useState(clientsData)


  return (
    <BrowserRouter>
      <Routes>
         
            <Route path='/home' element ={
              <proContext.Provider value={{ homeDatas, clientsDatas }}>
                <Home />
              </proContext.Provider>} />
              <Route path='/' element ={
              <proContext.Provider value={{ homeDatas, clientsDatas }}>
                <Home />
              </proContext.Provider>} />
        <Route path='/about' element ={<About />} />
        <Route path='/contact' element ={<Contact />} />
        <Route path='/faq' element ={<Faq />} />
        <Route path='/products' element ={<Product />} />
        <Route path='/services' element ={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
