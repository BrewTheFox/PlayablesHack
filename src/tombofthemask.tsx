import tomblogo from './assets/TotM_Logo.webp'
import './App.css'
import Navbar from './components/Navbar'
import { Button, TextareaAutosize } from '@mui/material';
import { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Alert, { AlertColor } from '@mui/material/Alert';
import { Base64 } from 'js-base64';
interface Headers {
  [key: string]: string;
}


function Totm() {


  const [Headers, setHeaders] = useState<Headers>({});
  const [state, setState] = useState([false, "este es el texto", "danger"]);
  const [vecesAbierto, setAbierto] = useState(0)
  const [curl, setCurl] = useState("")
  const [datos, setDatos] = useState(["base64", "json"])
  
    const handleClose = () => {
      setState([false, state[1], state[2]]);
    };


  function encontrardatos() {
    setAbierto(vecesAbierto+1)
    const regex = /-H '([^']*)'/g;
    const regex2 = /--data-raw '(.*)'/g;
    const coincidencias = curl.matchAll(regex);
      for (const coincidencia of coincidencias) {
        const [_, header] = coincidencia;
        const [key, value] = header.split(':');
        setHeaders(prevHeaders => ({
        ...prevHeaders,
        [key.trim().replace('"', "")]: value.trim().replace('"', "")
      }));
    }
    const savegame = curl.matchAll(regex2)
    for (const coincidencia of savegame){
      setDatos([coincidencia[1] , Base64.decode(coincidencia[1])])
      break
    } 

}

useEffect(() => {
  if (vecesAbierto >= 1){
  console.log(Object.keys(Headers));
  if (Object.keys(Headers).length <= 1) {
    setState([true, "No se encontraron los headers", "warning"]);
  } else {
    setState([true, "Se encontraron los headers", "success"]);
  }
}}, [vecesAbierto]);



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
        onChange={(Event) => {setCurl(Event.target.value)}}
      />
    </div>
    </div>
    <div className='container'>
    <Button onClick={encontrardatos} variant="outlined">Leer cURL</Button>
    <Button variant="outlined">Como?</Button>
    
    </div>
    <ul>
        {Object.keys(Headers).map((key) => (
          <li key={key}>
            <strong>{key}</strong>: {Headers[key]}
          </li>
        ))}
      </ul>

    <p>{datos[1]}</p>
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        open={state[0] === true}
        onClose={handleClose}
        key={"bottom" + "center"}>
          <Alert severity={state[2] as AlertColor} onClose={handleClose}>
            {state[1]}
          </Alert>
        </Snackbar>
    </Box>  
    </>
  )
}

export default Totm
