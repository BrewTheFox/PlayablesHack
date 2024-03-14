import tomblogo from './assets/TotM_Logo.webp'

import './App.css'
import Navbar from './components/Navbar'
import Typewriter from 'typewriter-effect';
function Totm() {
  return (
    <>
    <Navbar></Navbar>
    <img src={tomblogo}/>
    </>
  )
}

export default Totm
