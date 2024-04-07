import React, { useState, useEffect } from 'react'
import Header from './components/Shared/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Shared/Home'
import About from './components/Router/About'
import Contact from './components/Router/Contact'
import Register from './components/Router/Register'
import Gallery from './components/Router/Gallery'
import Projects from './components/Router/Projects'
import Error from './components/Router/Error'
import { auth } from './components/Router/Firebase_Config'
const App = () => {

  const [userName, setUserName] = useState("")
  const [img_url, setImg_url] = useState()
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      console.log(user)
      if(user){
        setUserName(user?.displayName)
        setImg_url(user?.photoURL)
      }
      else{
        setUserName("")
      }
    })
  }, []);
  
  return (
    <div className='w-screen h-auto overflow-hidden '>
      <BrowserRouter >
        <Routes>
        <Route path='/' element={<Home name={userName} img={img_url}/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Error' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
