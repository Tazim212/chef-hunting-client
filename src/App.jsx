import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

const App = () =>{

  return (
    <div className='bg-backImg bg-no-repeat bg-cover mb-3 bg-blend-soft-screen brightness-90'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App;
