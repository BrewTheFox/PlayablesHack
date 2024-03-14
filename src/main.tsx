import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './mainsite.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Totm from './tombofthemask.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
      <Route index element={<App />} />
      <Route path='/tomb-of-the-mask' element={<Totm/>}/>
      <Route path='/state.io' element={<Totm/>}/>
      <Route path='/slice-it-all' element={<Totm/>}/>
      <Route path='/draw-climber' element={<Totm/>}/>
      
  </Routes>
</BrowserRouter>
)
