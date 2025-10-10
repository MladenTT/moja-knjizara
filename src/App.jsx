import './App.css'
import Pocetna from "./pages/Pocetna"
import Stranica from "./pages/Stranica"
import Book from './pages/Book';
import NoviArtikal from './pages/NoviArtikal';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    
      <>
        <BrowserRouter>  
            <div className="my-texture"></div>
            <Routes>
              <Route path="*" element={<Pocetna />} /> {/* fallback za sve rute */}
              <Route path='/' element = { <Pocetna/> }></Route>
              <Route path='/pocetna' element = { <Pocetna/> }></Route>
              <Route path='/horor' element = { <Stranica/> }></Route>
              <Route path='/book' element = { <Book/>}></Route>
              <Route path='/novi-artikal' element = { <NoviArtikal/>}></Route>
            </Routes>
          </BrowserRouter>
      </>
  )
}

export default App;
