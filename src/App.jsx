import './App.css'
import Header from "./components/Header"
import Navigation from "./components/Navigation";
import PopularneKnjige from './components/PopularneKnjige';
import Add from './components/Add';
import KnjigeZaDecu from "./components/KnjigeZaDecu"
import Pribor from "./components/Pribor.jsx"
import Footer from "./components/Footer"
import Heading from "./components/Heading"
import Proba from './components/Proba.jsx';

function App() {

  return (
    
      <div>
        <Header/>
        <PopularneKnjige naslov="Popularne knjige"/>
        <Add/>
        <KnjigeZaDecu naslov="Knjige za decu"/>
        <Heading/>
        <Add/>
        <Pribor/>
        <Footer/>
      </div>
      
    
  )
}

export default App;
