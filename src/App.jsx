import './App.css'
import Pocetna from "./pages/Pocetna"
import Stranica from "./pages/Stranica"
import Book from './pages/Book';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    
      <>
        <BrowserRouter>  
            <div className="my-texture"></div>
            <Routes>
              <Route path='/moja-knjizara/' element = { <Pocetna/> }></Route>
              <Route path='/moja-knjizara/pocetna' element = { <Pocetna/> }></Route>
              <Route path='/moja-knjizara/horor' element = { <Stranica/> }></Route>
              <Route path='/moja-knjizara/book' element = { <Book/>}></Route>
            </Routes>
          </BrowserRouter>
      </>
  )
}

export default App;
