import { useState } from 'react'
import { Fragment } from 'react'   //can be used in place of <>  </>
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from "./Header"
import Hero from "./Hero"

function App(){
  return(
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App
