import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Calc from './pages/Calc'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="nav justify-content-center">
        <Link to="/" className="nav-link">Főoldal</Link>
        <Link to="/calc" className="nav-link">Számítás</Link>
        <Link to="/about" className="nav-link">Névjegy</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>    
  )
}

export default App
