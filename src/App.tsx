import tomblogo from './assets/TotM_Logo.webp'
import slicelogo from './assets/sliceit.webp'
import statelogo from "./assets/stateio.png"
import climberlogo from "./assets/drawclimber.png"
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
