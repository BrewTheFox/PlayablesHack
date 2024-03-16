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
  const [datos, setDatos] = useState<[string, { [key: string]: any }]>(["base64", {}]);
  const [isVisible, setIsVisible] = useState("inicio");
  
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
        if (coincidencia[1].includes(":")){
          const [key, value] = header.split(':');
          setHeaders(prevHeaders => ({
            ...prevHeaders,
            [key.trim().replace('"', "")]: value.trim().replace('"', "")
          }));
        }
    }
    const savegame = curl.matchAll(regex2)
    for (const coincidencia of savegame){
      setDatos([coincidencia[1] , JSON.parse(Base64.decode(coincidencia[1]))])
      break
    } 

}

useEffect(() => {
  if (vecesAbierto >= 1){
    if (Object.keys(datos[1]).length !== 0 && Object.keys(Headers).length >= 1) {
      setState([true, "Toda la info está presente", "success"]);
      setIsVisible("editor")
    } else {
      setState([true, "No toda la info está presente", "error"]);
    }
}}, [vecesAbierto]);



return (
  <div>
    <Navbar />
    <div className='gameiconcontainer'>
          <img className="gameicon" src={tomblogo} alt="Logo" />
        </div>
    {isVisible == "inicio" && (
      <>
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

      </>
    )}
    {isVisible == "editor" && (
              <div>
              <h1>{"Tienes " + datos[1]["coinsCount"] + " monedas"}</h1>
            </div>
    )}
            <Box sx={{ width: 500 }}>
          <Snackbar
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            open={state[0] === true}
            onClose={handleClose}
            key={"bottom" + "center"}
          >
            <Alert severity={state[2] as AlertColor} onClose={handleClose}>
              {state[1]}
            </Alert>
          </Snackbar>
        </Box>
  </div>
  
);
}

export default Totm
