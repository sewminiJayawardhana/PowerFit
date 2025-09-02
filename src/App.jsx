import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Programs from './components/Programs'
import Testimonails from './components/Testimonails'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Programs/>
      <Testimonails/>
      <Contacts/>
    </div>
  )
}

export default App
