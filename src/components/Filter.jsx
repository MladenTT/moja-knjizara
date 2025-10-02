import "./Filter.css"

function Filter() {
    return (
        <div id="filter-container" className="filter-conteiner">
            <div className="filter-naslov">
                <h4>Filteri</h4>
            </div>
            <div className="filter-kategorija">
                <ul>
                    <li>Klasici</li>
                    <li>Drame</li>
                    <li>Biografije</li>
                </ul>
            </div>
            <div className="filter-brend">
                <h6>Izdavaci:</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
                    <label className="form-check-label" htmlFor="checkDefault">
                        #3D+
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
                    <label className="form-check-label" htmlFor="checkDefault">
                        4SE
                    </label>
                </div>
            </div>
            <div className="filter-cena">
                <h6>Cena:</h6>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Min:</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>
                    <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Max:</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>
            </div>
            <div className="filter-pismo">
                <h6>Pismo:</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
                    <label className="form-check-label" htmlFor="checkDefault">
                        Latinica
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
                    <label className="form-check-label" htmlFor="checkDefault">
                        Cirilica
                    </label>
                </div>
            </div>
            <div className="filter-povez">
                <h6>Povez:</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
                    <label className="form-check-label" htmlFor="checkDefault">
                        Tvrd
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
                    <label className="form-check-label" htmlFor="checkDefault">
                        Bros
                    </label>
                </div>
            </div>
            <h6>Naziv:</h6>
            <div className="filter-pretraga">
                <div className="input-group input-group-sm mb-3">
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>
            </div>
            <div className="filter-reset">
                <button type="button" className="btn btn-outline-warning">Pretrazi</button>
            </div>
        </div>
    )
}

export default Filter;