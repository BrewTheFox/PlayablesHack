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
    <TextareaAutosize></TextareaAutosize>
    </>
  )
}

export default Totm
