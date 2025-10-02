import './Pocetna.css'
import Header from "../components/Header.jsx"
import Navigation from "../components/Navigation.jsx";
import PopularneKnjige from '../components/PopularneKnjige.jsx';
import Add from '../components/Add.jsx';
import KnjigeZaDecu from "../components/KnjigeZaDecu.jsx"
import Pribor from "../components/Pribor.jsx"
import Footer from "../components/Footer.jsx"
import Heading from "../components/Heading.jsx"
import Proba from '../components/Proba.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function Pocetna() {

  return (
    
      <div>
        <div className="my-texture"></div>
        <Header/>
        <PopularneKnjige naslov="Popularne knjige"/>
        <Heading/>
        <Add/>
        <KnjigeZaDecu naslov="Knjige za decu"/>
        
        <Add/>
        <Pribor/>
        <Footer/>
      </div>
  )
}

export default Pocetna;
