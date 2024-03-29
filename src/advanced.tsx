import './App.css'
import Navbar from './components/Navbar'
import { Button, TextareaAutosize } from '@mui/material';
import { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Alert, { AlertColor } from '@mui/material/Alert';
import { Base64 } from 'js-base64';
import axios from 'axios';
import React from 'react';
import Typewriter from 'typewriter-effect';


interface Headers {
  [key: string]: string;
}




function Advanced() {
  const [Headers, setHeaders] = useState<Headers>({});
  const [state, setState] = useState([false, "este es el texto", "danger"]);
  const [vecesAbierto, setAbierto] = useState(0)
  const [curl, setCurl] = useState("")
  const [datos, setDatos] = useState<[string, { [key: string]: any }]>(["base64", {}]);
  const [isVisible, setIsVisible] = useState("inicio");
  const [consoleOutput, setConsoleOutput] = useState<Array<string>>(["Hackeo iniciado."]);
  const [IsButtonDisabled, SetButtonDisabled] = useState(false)
  
    const handleClose = () => {
      setState([false, state[1], state[2]]);
    };

    function updatedatos(key: string, value: string | number | boolean | Array<any> | object, path:string) {
      const claves = path.replace(".","").split(".");
      let datosActualizados = { ...datos[1] };
      let currentData = datosActualizados;
    
      if (path === "") {
        datosActualizados[key] = value;
      } else {
        const lastKey = claves.pop();
        for (let dato of claves) {
          currentData = currentData[dato];
        }
        currentData[lastKey as string][key] = value;
      }
    
      setDatos([datos[0], datosActualizados]);
    }
      

  function patchGameData(){
    setIsVisible("patch")
    setDatos([Base64.encode(JSON.stringify(datos[1])), datos[1]])
  }

  function sendData() {
    SetButtonDisabled(true)
    const output: Array<string> = [...consoleOutput]; // Inicializa output con el valor de consoleOutput
    output.push("Enviando datos..."); // Agrega el valor de i a output
    setConsoleOutput(output); // Actualiza consoleOutput con el array completo
    const datatosend = Base64.encode(JSON.stringify({gameinfo:datos[0], gameheaders:Headers}))
    console.log(datatosend)
    let data = JSON.stringify({
      "encodeddata": datatosend
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://playablesback.vercel.app/do-request/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios.request(config)
    .then((response) => {
  const output: Array<string> = [...consoleOutput];
  output.push(JSON.stringify(response.data));
  output.push("Datos enviados correctamente.");
  output.push("Validando...");
  if (JSON.stringify(response.data) === '{"status":200}') {
    output.push("Validado, hackeo correcto OwO")
  }
  else {
    output.push("El hackeo no fue satisfactorio, intentalo denuevo :3")
  }
  output.push("🦊 Brew te quiere <3 🦊")
  setConsoleOutput(output)
  SetButtonDisabled(false)
    })
    .catch((error) => {
    output.push(error)
    output.push("El hackeo no fue satisfactorio, intentalo denuevo :3")
    output.push("🦊 Brew te quiere <3 🦊")
    SetButtonDisabled(false)
  });
  }
  
  useEffect(() => {
    console.log(curl);
    console.log(Headers)
  }, [curl, Headers]);

  function encontrardatos() {
    setAbierto(vecesAbierto+1)
    const regex = /-H '([^:]+): ((?:(?!').)+)' /g;
    const regex2 = /--data-raw '(.*)'/g;

    const coincidencias = curl.matchAll(regex);
      for (const coincidencia of coincidencias) {
          setHeaders(prevHeaders => ({
            ...prevHeaders,
            [coincidencia[1]]: coincidencia[2]
          }));
    }
    const savegame = curl.matchAll(regex2)
    for (const coincidencia of savegame){
      setDatos([coincidencia[1] , JSON.parse(Base64.decode(coincidencia[1]))])
      break
    } 

}

function renderizarJSON(data: any, path: any) {
  return Object.keys(data).map((key) => {
    const value = data[key];
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return (
        <div key={key}>
          <h1>{key}:</h1>
          {renderizarJSON(value, path + "." + key)}
        </div>
      );
    } else if (Array.isArray(value)) {
      return (
        <div key={key}>
          <h1>{key}:</h1>
          <div>
            {value.map((item, index) => (
              <div key={index}>{renderizarJSON(item, path + "." + key + "." + index)}</div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div key={key}>
          <h1>{key + ":" + value}</h1>
          {typeof value === 'string' ? (
            <input onChange={(event) => { updatedatos(key, event.target.value, path) }} type="text" value={value} />
          ) : typeof value === 'boolean' ? (
            <input onChange={(event) => { updatedatos(key, event.target.checked, path) }} type="checkbox" checked={value} />
          ) : (
            <React.Fragment>
              <div>
                <Button onClick={() => { updatedatos(key, value - 10, path) }} variant="contained">-10</Button>
                <Button onClick={() => { updatedatos(key, value + 10, path) }} variant="contained">+10</Button>
                <Button onClick={() => { updatedatos(key, value + 100, path) }} variant="contained">+100</Button>
              </div>
              <input onChange={(event) => { updatedatos(key, parseInt(event.target.value), path) }} type="number" min="0" />
            </React.Fragment>
          )}
        </div>
      );
    }
  });
}


useEffect(() => {
  if (vecesAbierto >= 1){
    if (Object.keys(datos[1]).length !== 0 && Object.keys(Headers).length >= 1 && datos[1] !== undefined) {
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
    <div className='typewriter'>
    <Typewriter
  options={{
    strings: ['#Libertad', '#Editor', '#Avanzado', '#Otros', '#Juegos'],
    autoStart: true,
    loop: true,
  }} 
  ></Typewriter>
    </div>
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

{isVisible === "editor" && (
  <div className='datos'>
    {renderizarJSON(datos[1], "")}
    <div>
      <Button onClick={patchGameData} variant="contained">Parchear datos</Button>
    </div>
  </div>
)}

{isVisible == "patch" && (
      <>
      <div className='holder'>
      <h1>Game Patcher</h1>
      </div>
      <div className='holder'>
      <div className="console">
      <div className="console-output">
        {consoleOutput.map((output, index) => (
          <div key={index}> {"> "+output} </div>
        ))}
      </div>
      <Button disabled={IsButtonDisabled} onClick={sendData}>Enviar?</Button>
    </div>
    </div>
    <div className='holder'>
    <Button onClick={() => {window.location.replace("./");}} variant="contained">Volver</Button>
    </div>
      </>
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

export default Advanced