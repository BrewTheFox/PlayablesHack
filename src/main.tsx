import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Totm from './tombofthemask.tsx'
import Stateio from './stateio.tsx'
import Sliceit from './sliceit.tsx'
import Drawclimber from './drawclimber.tsx'
import Advanced from './advanced.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
      <Route index element={<App />} />
      <Route path='/tomb-of-the-mask' element={<Totm/>}/>
      <Route path='/state.io' element={<Stateio/>}/>
      <Route path='/slice-it-all' element={<Sliceit/>}/>
      <Route path='/draw-climber' element={<Drawclimber/>}/>
      <Route path='/avanzado' element={<Advanced/>}/>
  </Routes>
</BrowserRouter>
)
