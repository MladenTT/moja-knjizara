

function Kartica({putanja, text}) {
    return(
        <div className="col-lg-3">
            <img src={putanja} alt={text} className="bd-placeholder-img rounded-circle" width="200" height="200" />
            <h2 className="fw-normal">{text}</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
    )
}

export default Kartica