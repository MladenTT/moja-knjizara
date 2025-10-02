import "./ProductPage.css"
import KarticaProizvoda from "../components/KarticaProizvoda"

function ProductPage() {


    return (
        <div className="product-container">
            <div className="page-tools">
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
    )
}

export default ProductPage;