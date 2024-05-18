import tomblogo from './assets/TotM_Logo.webp'
import slicelogo from './assets/SliceItAllLogo-transformed.webp'
import statelogo from "./assets/240312_18h04m38s_screenshot-transformed.png"
import climberlogo from "./assets/240312_18h10m59s_screenshot-transformed.png"
import './App.css'
import Navbar from './components/Navbar'
import Typewriter from 'typewriter-effect';
//Esto es basicamente la pagina de inicio

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className='typewriter'>
    <Typewriter
  options={{
    strings: ['HACK', 'IT', 'IF', 'YOU', 'CAN'],
    autoStart: true,
    loop: true,
  }} 
  ></Typewriter>
    </div>
    <div className='container'>
    <div>
      <a href='./Tomb-Of-The-Mask'>
      <img className="logo" src={tomblogo}/>
      </a>
    </div>
    <div>
    <a href='./Slice-It-All'>
      <img className="logo" src={slicelogo}/>
      </a>
    </div>
    <div>
    <a href='./state.io'>
      <img className="logo" src={statelogo}/>
      </a>
    </div>
    <div>
    <a href='./Draw-Climber'>
      <img className="logo" src={climberlogo}/>
      </a>
    </div>
    </div>
    </>
  )
}

export default App
