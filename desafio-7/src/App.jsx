import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/productos' element={<Productos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App