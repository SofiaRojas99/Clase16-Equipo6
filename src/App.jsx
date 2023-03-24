import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Beer from './Beer'
import Home from './Home'
import Contacto from './Contacto'

function App() {

  return (
   <div>
        <Navbar/>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/beer/:id' element={<Beer/>}/>
      </Routes>
   </div>
  )
}

export default App
