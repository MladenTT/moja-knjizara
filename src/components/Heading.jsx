import "./Heading.css"
import slika from "../assets/heading/Notesi-800x600.jpg"

function Heading() {

    return(
        <div className="heading-container row ">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">Notesi sa karakterom</h2>
                <p className="lead">Sa velikim zadovoljstvom objavljujemo da od 
                    sada kod nas možete pronaći notes-e sa natpisima! Bilo 
                    da volite junake iz crtanih filmova, popularne serije ili fantastične 
                    likove, naši notes-i donose radost i inspiraciju u svaki dan. 
                    Savršeni su za beleške, planiranje obaveza ili kao poklon dragoj osobi.
                     Kvalitetni, kreativni i praktični, naši notes-i su dostupni u 
                     različitim formatima i veličinama, kako bi odgovarali svakoj potrebi. 
                     Posetite nas i obezbedite svoj omiljeni notes već danas! </p>
            </div>
            <div className="col-md-5">
                <img src={slika} alt="" aria-label="Placeholder: 500x500" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" height="500" preserveAspectRatio="xMidYMid slice" role="img" width="500" xmlns="http://www.w3.org/2000/svg"/>
                
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
            </div>
        </div>
    )
}

export default Heading;