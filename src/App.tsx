import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './routes/Landing'
import { Dashboard } from './routes/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
