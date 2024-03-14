import tomblogo from './assets/TotM_Logo.webp'
import slicelogo from './assets/SliceItAllLogo-transformed.webp'
import statelogo from "./assets/240312_18h04m38s_screenshot-transformed.png"
import climberlogo from "./assets/240312_18h10m59s_screenshot-transformed.png"
import './App.css'
import Navbar from './components/Navbar'
import Typewriter from 'typewriter-effect';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <div>
    <div className='typewriter'>
    <Typewriter
  options={{
    strings: ['HACK', 'IT', 'IF', 'YOU', 'CAN'],
    autoStart: true,
    loop: true,
  }} 
  ></Typewriter>
  </div>
    </div>
    <div className='container'>
    <div>
      <img className="logo" src={tomblogo}/>
    </div>
    <div>
      <img className="logo" src={slicelogo}/>
    </div>
    <div>
      <img className="logo" src={statelogo}/>
    </div>
    <div>
      <img className="logo" src={climberlogo}/>
    </div>
    </div>
    </>
  )
}

export default App
