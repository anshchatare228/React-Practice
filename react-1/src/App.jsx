import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <PageOne />
    </>
  )
}

function PageOne(){
  return(
    <body className='bg-zinc-800 overflow-x-hidden relative'>
        <nav className='bg-black/80 h-[8rem] flex items-center'>
          <div className='ml-12 flex'>
            <img src={reactLogo} className='h-10'/>
            <h1 className='text-[rgb(88,196,220)] text-4xl'>React facts</h1>
          </div>
        </nav>

        <main className='mx-6'>
          <h1 className='text-[4rem] text-white'>Fun Facts About React</h1>
          <img src={reactLogo} className='absolute left-[77rem] top-[9rem] h-[35rem] mt-10'/>
        </main>
      </body>
  )
}

export default App
