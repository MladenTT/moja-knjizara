import "./Stranica.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Filter from "../components/Filter"
import ProducPage from "../components/ProductPage"

function Stranica() {
    return(
        <div>
            <Header/>
            <div className="pocetni">

                <div className="naslov">
                    <h1>Naslov</h1>
                </div>
                <div className="sadrzaj">
                    <div className="d-none d-md-block">
                        <Filter/>
                    </div>
                    <ProducPage/>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Stranica;