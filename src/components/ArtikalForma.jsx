import "./ArtikalForma.css"

const ArtikalForma = () => {


    return (
        <div className="form-container">
            <h3>Nova knjiga</h3>
            <br />

            <form className="row g-3">
                <div className="col-md-12 col-12">
                    <label htmlFor="imageUpload" className="form-label">Dodaj sliku</label>
                    <input 
                        type="file" 
                        className="form-control" 
                        id="imageUpload" 
                        accept="image/*" 
                    />
                </div>  
                <div className="col-md-12 col-12">
                    <label htmlFor="inputState" className="form-label">Kategorija</label>
                    <select id="inputState" className="form-select">
                        <option selected>Odaberi...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-12 col-12">
                    <label htmlFor="inputState" className="form-label">Podkategorija</label>
                    <select id="inputState" className="form-select">
                        <option selected>Odaberi...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-6 col-12">
                    <label htmlFor="inputEmail4" className="form-label">Naziv</label>
                    <input type="text" className="form-control" id="naziv"/>
                </div>
                <div className="col-md-6 col-12">
                    <label htmlFor="inputState" className="form-label">Pisac</label>
                    <select id="inputState" className="form-select">
                        <option selected>Odaberi...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2 col-6">
                    <label htmlFor="inputZip" className="form-label">Cena</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-md-2 col-6">
                    <label htmlFor="inputZip" className="form-label">Akcija</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-md-2 col-6">
                    <label htmlFor="inputZip" className="form-label">Broj stranica</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-md-2 col-6">
                    <label htmlFor="inputZip" className="form-label">ISBN</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-md-2 col-6">
                    <label htmlFor="inputZip" className="form-label">Kolicina</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-md-4 col-12">
                    <label htmlFor="inputZip" className="form-label">Pismo</label> <br />
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="pismo" id="pismo1" value="cirilica" defaultChecked/>
                        <label className="form-check-label" htmlFor="pismo1">
                            Cirilica
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="pismo" id="pismo2" value="latinica"/>
                        <label className="form-check-label" htmlFor="pismo2">
                            Latinica
                        </label>
                    </div>         
                </div>
                <div className="col-md-4 col-12">
                    <label htmlFor="inputZip" className="form-label">Povez</label> <br />
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="povez" id="povez1" value="tvrd" defaultChecked/>
                        <label className="form-check-label" htmlFor="povez1">
                            Tvrd
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="povez" id="povez2" value="brosirani"/>
                        <label className="form-check-label" htmlFor="povez2">
                            Broš
                        </label>
                    </div>         
                </div>
                <div className="col-md-4 col-12">
                    <label htmlFor="inputZip" className="form-label">Jezik</label> <br/>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="jezik" id="jezik1" value="srpski" defaultChecked/>
                        <label className="form-check-label" htmlFor="jezik1">
                            Srpski
                        </label>
                    </div>
                    <div className="form-check col-12">
                        <input className="form-check-input" type="radio" name="jezik" id="jezik2" value="engleski"/>
                        <label className="form-check-label" htmlFor="jezik2">
                            Engleski
                        </label>
                    </div>         
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Opis</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div className="col-md-12 row">

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Kralja Petra I
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            Zmaj Jovina 12
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            Bulevar Evrope 36
                        </label>
                    </div>

                </div>
                
                <div className="col-12 potvrda">
                    <button type="submit" className="btn btn-warning">Dodaj</button>
                </div>
            </form>
        </div>
    )
}

export default ArtikalForma;