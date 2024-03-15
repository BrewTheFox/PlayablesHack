import tomblogo from './assets/TotM_Logo.webp'
import './App.css'
import Navbar from './components/Navbar'
import { Button, TextareaAutosize } from '@mui/material';
import { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';

interface Dictionary {
  [key: string]: string;
}


function Totm() {
  const [dictionary, setDictionary] = useState<Dictionary>({});

    const [state, setState] = useState([false, "este es el texto"]);
  
  
    const handleClose = () => {
      setState([false, state[1]]);
    };



  function encontrardatos() {
    setState([true, state[1]]);
    const regex = /-H '([^']*)'/g;
    // const curl = ""
    const curl = "curl 'https://www.youtube.com/miniapp_cloudsaves?authuser=0' -X POST -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:123.0) Gecko/20100101 Firefox/123.0' -H 'Accept: */*' -H 'Accept-Language: es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br' -H 'Referer: https://www.youtube.com/playables/UgkxKXJt3Dp8gutdeca9P-UpEM3LLaeDffpa' -H 'X-YouTube-MiniAppId: UgkxKXJt3Dp8gutdeca9P-UpEM3LLaeDffpa' -H 'X-YouTube-PostPlayNonce: rueiFRGs' -H 'Origin: https://www.youtube.com' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Connection: keep-alive' -H 'Cookie: VISITOR_INFO1_LIVE=4JT2_rhJi2E; VISITOR_PRIVACY_METADATA=CgJDTxIEGgAgOg%3D%3D; PREF=tz=America.Bogota&f6=40000000&f5=30000&f7=100; SID=g.a000gwjWxYUF9pxN0IAgcLZHv2Sw_VJRVWDTYQi4q2OwGa8Lb2uWyqU05DDrlfqDkv42rxjaqwACgYKASASAQASFQHGX2MiIft_MJDBVpgZ4JPlNaHEKxoVAUF8yKrw8oYr_97w1Ynfa7XzBemt0076; __Secure-1PSIDTS=sidts-CjIBYfD7Z6xIsvEY391O9uno87h0Iuz1HwYSO2djJoHxgIOYG7oDJmc3qmDX7phpXAztUhAA; __Secure-3PSIDTS=sidts-CjIBYfD7Z6xIsvEY391O9uno87h0Iuz1HwYSO2djJoHxgIOYG7oDJmc3qmDX7phpXAztUhAA; __Secure-1PSID=g.a000gwjWxYUF9pxN0IAgcLZHv2Sw_VJRVWDTYQi4q2OwGa8Lb2uWBCe76VPPX-wMJEgg_85EPwACgYKAcUSAQASFQHGX2Mif6s26MGM-ebfUcgRetCyjRoVAUF8yKr-mcrvBhqyZi54kTVDrAZ90076; __Secure-3PSID=g.a000gwjWxYUF9pxN0IAgcLZHv2Sw_VJRVWDTYQi4q2OwGa8Lb2uWdwmUXnyUeR5DCYUEAeoxewACgYKAWUSAQASFQHGX2MiVCOsOFRVJ__z04_3fmN9SBoVAUF8yKoSkD4DdnDCsG5merqsyQ8M0076; HSID=A7sLC5Ckeoh0VK72J; SSID=A7yNTbnSxP35OaIRY; APISID=YFiV1VNyqKeg6EoS/AtolnaTJzwNHQ1eEG; SAPISID=Vc7ivBweg4-2Ef1g/ASBwr5QQhbQUeIZfY; __Secure-1PAPISID=Vc7ivBweg4-2Ef1g/ASBwr5QQhbQUeIZfY; __Secure-3PAPISID=Vc7ivBweg4-2Ef1g/ASBwr5QQhbQUeIZfY; SIDCC=AKEyXzVz5w9be-q_ungsIsqXWev-pTDnEOikh2tZAtErEK4QlcdXDz4zFV_x96ADx7kWiqTRcSCd; __Secure-1PSIDCC=AKEyXzU5O3Td_1Cx_u8qPdZ58B60-qgbAheJ_WYZFdiiQp7SBZ-Bc4tGwZSkn6JUCkJBwaQRgDoY; __Secure-3PSIDCC=AKEyXzWH2c6GH3oP0WnEHtoTWPFzdeSlJ4m8RLlDHT8B7lWXirjqUGa1NSnzqLD0dHbikHr23yKm; LOGIN_INFO=AFmmF2swRQIhAMI96bsMjnaa7ScOSg5T4hHwiH-5nb3z2CngagVuoqM4AiAlSef9bR-PbIyGuHlIQ6adVbaAKb_GEVt1-MK304UbCw:QUQ3MjNmeDNkeWJoXzNNQV8tSU01QnNlWUxnNDJ6VmQ5MUJKUXBoeUFpdkt2NXo4SUJsSDN5VGwya2xUS0gxbUxIYWxzaWliNWpiUzNkS2RkOGp6U2xDSFcyQkc0cXpkd05fRk9LSU9YRHR0aXhYLU1keGJhVlUxRjhtWFJMOGtfZ2RVRG9tTV84Y01MRklFNzRzV01CbWNlR2ZycW5IRjdn; YSC=_BEetQ8FqCM' -H 'TE: trailers' --data-raw 'eyJhcHBWZXJzaW9uIjoiIiwiY29pbnNDb3VudCI6OTk5OTk5OTksImJlc3RTY29yZSI6MCwiYWxsU2NvcmUiOiIxNDY5OSIsInN0b3J5U3RhZ2VzIjoiMzoxIDM6MSAzOjEgMzoxIDM6MSAzOjEgMzoxIDM6MSAzOjEgMyAzOjEgMzoxIDMgMyAzOjEgMyAzOjEgMyAzIDM6MSAzIDMgMyAzOjEgMyAzIDAiLCJmcmVlU3BpbnMiOjk5OTk5OTksImFjdGl2ZU1hc2tJZCI6MjAwNywibWFza3NTdGF0ZXMiOlt7ImlkIjowLCJwdXJjaGFzZWQiOmZhbHNlLCJ2aWRlb0NvdW50ZXIiOjB9LHsiaWQiOjEsInB1cmNoYXNlZCI6ZmFsc2UsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MjcsInB1cmNoYXNlZCI6dHJ1ZSwidmlkZW9Db3VudGVyIjowfSx7ImlkIjoyMDA3LCJwdXJjaGFzZWQiOnRydWUsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MTYsInB1cmNoYXNlZCI6ZmFsc2UsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MjUsInB1cmNoYXNlZCI6ZmFsc2UsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MiwicHVyY2hhc2VkIjp0cnVlLCJ2aWRlb0NvdW50ZXIiOjB9LHsiaWQiOjE1LCJwdXJjaGFzZWQiOnRydWUsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MTcsInB1cmNoYXNlZCI6ZmFsc2UsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MTAsInB1cmNoYXNlZCI6dHJ1ZSwidmlkZW9Db3VudGVyIjowfSx7ImlkIjoyNiwicHVyY2hhc2VkIjpmYWxzZSwidmlkZW9Db3VudGVyIjowfSx7ImlkIjozLCJwdXJjaGFzZWQiOmZhbHNlLCJ2aWRlb0NvdW50ZXIiOjB9LHsiaWQiOjE4LCJwdXJjaGFzZWQiOmZhbHNlLCJ2aWRlb0NvdW50ZXIiOjB9LHsiaWQiOjM1LCJwdXJjaGFzZWQiOnRydWUsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MjIsInB1cmNoYXNlZCI6ZmFsc2UsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MTIsInB1cmNoYXNlZCI6dHJ1ZSwidmlkZW9Db3VudGVyIjowfSx7ImlkIjoxOSwicHVyY2hhc2VkIjpmYWxzZSwidmlkZW9Db3VudGVyIjowfSx7ImlkIjo0LCJwdXJjaGFzZWQiOmZhbHNlLCJ2aWRlb0NvdW50ZXIiOjB9LHsiaWQiOjMxLCJwdXJjaGFzZWQiOmZhbHNlLCJ2aWRlb0NvdW50ZXIiOjB9LHsiaWQiOjExLCJwdXJjaGFzZWQiOnRydWUsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MjAsInB1cmNoYXNlZCI6ZmFsc2UsInZpZGVvQ291bnRlciI6MH0seyJpZCI6NSwicHVyY2hhc2VkIjpmYWxzZSwidmlkZW9Db3VudGVyIjowfSx7ImlkIjozMywicHVyY2hhc2VkIjpmYWxzZSwidmlkZW9Db3VudGVyIjowfSx7ImlkIjoyOCwicHVyY2hhc2VkIjp0cnVlLCJ2aWRlb0NvdW50ZXIiOjB9LHsiaWQiOjQwNywicHVyY2hhc2VkIjp0cnVlLCJ2aWRlb0NvdW50ZXIiOjB9LHsiaWQiOjYsInB1cmNoYXNlZCI6ZmFsc2UsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MjEsInB1cmNoYXNlZCI6ZmFsc2UsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MTMsInB1cmNoYXNlZCI6dHJ1ZSwidmlkZW9Db3VudGVyIjowfSx7ImlkIjoxNCwicHVyY2hhc2VkIjpmYWxzZSwidmlkZW9Db3VudGVyIjowfSx7ImlkIjo3LCJwdXJjaGFzZWQiOmZhbHNlLCJ2aWRlb0NvdW50ZXIiOjB9LHsiaWQiOjMyLCJwdXJjaGFzZWQiOmZhbHNlLCJ2aWRlb0NvdW50ZXIiOjB9LHsiaWQiOjMwLCJwdXJjaGFzZWQiOnRydWUsInZpZGVvQ291bnRlciI6MH0seyJpZCI6OCwicHVyY2hhc2VkIjpmYWxzZSwidmlkZW9Db3VudGVyIjowfSx7ImlkIjoyMywicHVyY2hhc2VkIjpmYWxzZSwidmlkZW9Db3VudGVyIjowfSx7ImlkIjo5LCJwdXJjaGFzZWQiOmZhbHNlLCJ2aWRlb0NvdW50ZXIiOjB9LHsiaWQiOjI0LCJwdXJjaGFzZWQiOmZhbHNlLCJ2aWRlb0NvdW50ZXIiOjB9LHsiaWQiOjI5LCJwdXJjaGFzZWQiOnRydWUsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MzQsInB1cmNoYXNlZCI6ZmFsc2UsInZpZGVvQ291bnRlciI6MH0seyJpZCI6MTAwMDEsInB1cmNoYXNlZCI6dHJ1ZSwidmlkZW9Db3VudGVyIjowfV0sImFjdGl2YXRlZE1pc3Npb25zIjpbeyJ0eXBlIjo3LCJ0aWVyIjowLCJ2YWx1ZSI6MH0seyJ0eXBlIjoxLCJ0aWVyIjowLCJ2YWx1ZSI6MH0seyJ0eXBlIjozLCJ0aWVyIjowLCJ2YWx1ZSI6MTd9XSwiY29tcGxldGVkTWlzc2lvbnMiOlt7InR5cGUiOjAsInRpZXIiOjB9LHsidHlwZSI6MiwidGllciI6MH0seyJ0eXBlIjo0LCJ0aWVyIjowfSx7InR5cGUiOjUsInRpZXIiOjB9XSwiZW5lcmd5Q291bnQiOjk5OTksInR1dG9yaWFsQ29tcGxldGUiOnRydWUsInB3U2hpZWxkc0NvdW50IjoxMDAsInB3Q29pbkFkZGljdExldmVsIjoxMCwicHdGcmVlemVMZXZlbCI6MTAsInB3TWFnbmV0TGV2ZWwiOjEwLCJwd1Njb3JlQm9vc3RlckxldmVsIjoxMCwibXV0ZU11c2ljIjpmYWxzZSwibXV0ZVNvdW5kIjpmYWxzZSwiY3VycmVudExhbmd1YWdlIjoic3BhbmlzaCIsInJvdWxldHRlUGxheXNDb3VudCI6MCwiZW5lcmd5VGltZXN0YW1wIjoxNzEwMTg5OTQwLCJmcmVlU3BpblRpbWVzdGFtcCI6MTcxMDE4NzIwMCwiZnJlZVVwZ3JhZGVUaW1lc3RhbXAiOjB9'";
    const coincidencias = curl.matchAll(regex);
      for (const coincidencia of coincidencias) {
        const [_, header] = coincidencia;
        const [key, value] = header.split(':');
        setDictionary(prevDictionary => ({
        ...prevDictionary,
        [key.trim()]: value.trim()
      }));
    }
}

useEffect(() => {
  console.log(Object.keys(dictionary));
  if (Object.keys(dictionary).length < 1) {
    console.log("No hay headers");
  } else {
    console.log("Los headers están presentes");
  }
}, [dictionary]);


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
    <div className='container'>
    <Button onClick={encontrardatos} variant="outlined">Leer cURL</Button>
    <Button variant="outlined">Como?</Button>
    
    </div>
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        open={state[0] === true}
        onClose={handleClose}
        message={state[1]}
        key={"bottom" + "center"}
      />
    </Box>  
    </>
  )
}

export default Totm
