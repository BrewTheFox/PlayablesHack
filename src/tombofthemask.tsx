import tomblogo from './assets/TotM_Logo.webp'
import './App.css'
import Navbar from './components/Navbar'
import Typewriter from 'typewriter-effect';
import { TextareaAutosize } from '@mui/material';



function Totm() {
  return (
    <>
    <Navbar></Navbar>
    <div className='gameiconcontainer'>
    <img className="gameicon" src={tomblogo}/>
    </div>
    <div className='supracontainer'>
    <div className="codecontainer">
      <TextareaAutosize
        className="textarea"
        aria-label="code"
        placeholder="Escribe el codigo curl..."
        minRows={20} // Número mínimo de filas
      />
    </div>
    </div>
    </>
  )
}

export default Totm
