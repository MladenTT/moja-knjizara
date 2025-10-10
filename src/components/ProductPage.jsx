import "./ProductPage.css"
import KarticaProizvoda from "../components/KarticaProizvoda"
import "./Filter.css"

function ProductPage() {


    return (
        <>
            <div className="product-container">
                <div className="page-tools">
                    <div className="filter-wraper">
                        <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                            </svg>
                        </button>
                        
                    </div>
                    <div className="sortiranje">
                        <p>Sortiraj: </p>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Najnovije</option>
                            <option value="1">Po ceni: rastuce</option>
                            <option value="2">Po ceni: opadajuce</option>
                            <option value="3">Po nazivu</option>
                        </select>
                    </div>
                    <div className="sortiranje">
                        <p>Prikaz: </p>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>24</option>
                            <option value="1">36</option>
                            <option value="2">48</option>
                        </select>
                    </div>
                </div>
                <div className="page-tools-list ">
                    <KarticaProizvoda/>
                    <KarticaProizvoda/>
                    <KarticaProizvoda/>
                    <KarticaProizvoda/>
                    <KarticaProizvoda/>
                    <KarticaProizvoda/>
                    <KarticaProizvoda/>
                    <KarticaProizvoda/>
                    <KarticaProizvoda/>
                    <KarticaProizvoda/>
                    <KarticaProizvoda/>
                    <KarticaProizvoda/>
                </div>
            </div>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Filter</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body d-flex justify-content-center">
                                    <div className=" filter-conteiner">
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
                                            <div className="filter-pretraga border-0">
                                                <div className="input-group input-group-sm mb-3">
                                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="modal-footer d-flex justify-content-between">
                                    <button type="button" className="btn btn-outline-warning">Reset</button>
                                    <button type="button" className="btn btn-warning">Pretrazi</button>
                                </div>
                            </div>
                        </div>
                    </div> 
        </>
    )
}

export default ProductPage;