import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import tomblogo from './assets/TotM_Logo.webp'
import stateio from "./assets/stateio.png"
import sliceit from "./assets/sliceit.webp"
import drawclimber from './assets/drawclimber.png'
import Patcher from './components/patcher.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
      <Route index element={<App />} />
      <Route path='/tomb-of-the-mask' element={<Patcher logo={tomblogo}/>}/>
      <Route path='/state.io' element={<Patcher logo={stateio}/>}/>
      <Route path='/slice-it-all' element={<Patcher logo={sliceit}/>}/>
      <Route path='/draw-climber' element={<Patcher logo={drawclimber}/>}/>
      <Route path='/avanzado' element={<Patcher/>}/>
  </Routes>
</BrowserRouter>
)
