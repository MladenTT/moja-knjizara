import "./Preporuceno.css"

function Preporuceno({slika, naslov, cena, pisac}) {

    return (
            <div className="preporuceno-wraper">
                <img src={slika} className="d-block mx-auto preporuceno-slika" alt="..."/>
                <h6 className="preporuceno-naslov">{naslov}</h6>
                <span className="preporuceno-cena">{cena}</span>
                <p className="preporuceno-pisac">{pisac}</p>
            </div>
    )
}

export default Preporuceno;