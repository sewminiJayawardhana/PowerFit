import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Programs from './components/Programs'
import Testimonails from './components/Testimonails'
import Contacts from './components/Contacts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Programs/>
      <Testimonails/>
      <Contacts/>
    </div>
  )
}

export default App
