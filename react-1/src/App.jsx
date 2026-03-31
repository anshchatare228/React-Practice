import { useState } from 'react'
import { Fragment } from 'react'   //can be used in place of <>  </>
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Nav from './nav.jsx'
import Hero from './hero.jsx'
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
    <>
      <Nav />
      <Hero />

    </>
  )
}

export default App
