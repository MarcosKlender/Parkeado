import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from './pages/Login/Login'
import { NotFound } from './pages/NotFound/NotFound'

import './App.css'

function App() {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App