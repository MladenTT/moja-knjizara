import "./Book.css"
import slika from '../assets/knjige/rat_i_mir_i_v.jpg'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Preporuceno from "../components/Preporuceno"

import knjiga1 from "../assets/knjige/alisa_u_zemlji_cuda-luis_kerol_v.png";
import knjiga2 from "../assets/knjige/braca_karamazovi_i-fjodor_mihailovic_dostojevski_v.jpg";
import knjiga3 from "../assets/knjige/cica_gorio-onore_de_balzak_v.jpg";
import knjiga4 from "../assets/knjige/zapisi_iz_mrtvog_doma-fjodor_mihailovic_dostojevski_v.jpg";
import knjiga5 from "../assets/knjige/zli_dusi_i-fjodor_mihailovic_dostojevski_v.jpg";
import knjiga6 from "../assets/knjige/decaci_pavlove_ulice-ferenc_molnar_v.png";
import knjiga7 from "../assets/knjige/zivotinjska_farma-dzordz_orvel_v.jpg";


function Book() {
    return (
        <div>
            <Header/>
            <div className="book-container">
                <div className="upper-container row">

                    <div className="item-img col-12 col-md-4" >
                        <img src={slika} alt="" />
                    </div>
                    <div className="item-data col-12 col-md-8">
                        <div className="data-title">
                            <h1>Rat i mir</h1>
                        </div>
                        <div className="data-index">
                            <div className="data-category">
                                <h6>ROMAN</h6>
                            </div>
                            <div>
                                Sifra artikla:
                                <span>372282</span>
                                <div>
                                    isbn:
                                    <span>9788610044126</span>
                                </div>
                            </div>
                            <div className="data-autor">
                                Autor:
                                <span> Lav Tolstoj</span>
                                <div>
                                    Izdavac: 
                                    <span>VULKAN IZDAVAŠTVO</span>
                                </div>
                            </div>
                        </div>   
                        <div className="data-description">
                            <p>
                                A i sve ostalo na svetu mu izgledaše tako besmisleno i ništavno kad se uporedi sa onim strogim i veličanstvenim sklopom misli što su ga u njemu izazivali: slabljenje njegovih sila usled isteka krvi, bolovi i očekivanje bliske smrti. Zagledavši se u oči Napoleonu, knez Andrej razmišljaše o ništavilu ljudske veličine, o ništavnosti života kome niko nije mogao da shvati značaj, i o još većoj ništavnosti smrti, čiji smisao niko živi nije mogao da shvati i objasni.
                            </p>

                            <div id="moreText" className="collapse">
                                <p>
                                Rat i mir je filozofski, istorijski i epski roman-reka u kojem Lav Tolstoj analizira složen proces istorijske stvarnosti, društvene dinamike i ljudskog ponašanja. Ideali i smisao ljudskog postojanja centralna su tema ovog remek-dela. Radnja se odvija tokom Napoleonove invazije na Rusiju 1812. godine i prati sudbine troje junaka: Pjera Bezuhova, vanbračnog sina jednog plemića, koji se bori za svoje nasledstvo i duhovno ispunjenje, kneza Andreja Bolkonskog koji ostavlja svoju porodicu da bi ratovao protiv Napoleona, i Nataše Rostove, prelepe mlade grofice koja intrigira obojicu.
                                </p>
                                <p>
                                Kako Napoleonova vojska napreduje, tako nam Tolstoj u sve širim potezima oslikava pozadinu istorijskih dešavanja, pa se na poleđini ove impresivne freske pojavljuju seljaci, vojnici i građanstvo u svojoj borbi sa problemima doba u kojem žive. Što se više pred nama razvija ova fascinantna saga, tako njeni junaci prevazilaze svoje književno obličje i postaju sve dirljivije i čitaocu bliže figure.
                                </p>
                                <p>
                                „Najveći ratni roman u istoriji književnosti.“ – Tomas Man
                                </p>
                            </div>

                            <button 
                                type="button"
                                className="btn btn-warning"
                                data-bs-toggle="collapse" 
                                data-bs-target="#moreText" 
                                aria-expanded="false"
                            >
                                Prikaži više
                            </button>
                        </div>

                        <div className="cena-wraper">
                            <br />
                            <span className="maloprodajna">Maloprodajna cena:1000.00 RSD</span><br />
                            <span className="naSajtu">Cena na sajtu: 900.00 RSD</span><br />
                            <span className="usteda">Usteda: 100.00 RSD</span><br />
                            <br />
                        </div>
                        <div className="data-action row g-3">
                            <div className="data-amount-wraper col-12 col-md-4">
                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" className="btn btn-outline-warning">-</button>
                                    <input type="text" name="amount" value={1}/>
                                    <button type="button" className="btn btn-outline-warning">+</button>
                                </div>
                            </div>
                            <div className="data-cart col-12 col-md-4">
                                <button type="button" className="btn btn-success">
                                    Dodaj u korpu
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-basket3-fill"
                                    viewBox="0 0 16 16"
                                    >
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="data-cart col-12 col-md-4">
                                <button type="button" className="btn btn-outline-success">
                                    Dodaj u omiljene
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-basket3-fill"
                                    viewBox="0 0 16 16"
                                    >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-container row">
                    <div className="item-info col-12 col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    O proizvodu
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Specifikacije
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Dostupnost u radnjama
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Slajd - show*/}
                    
                    <div className="item-similar col-12 col-md-6">
                        <h5 className="preporuceno-za-tebe">Preporuceno za tebe:</h5>
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="200000">
                                    <div className="d-flex justify-content-center gap-3 px-4">
                                        <Preporuceno slika={knjiga1} naslov="Ovo je naslov" cena="1000.00" pisac="Mladen Trivunovic"/>
                                        <Preporuceno slika={knjiga2} naslov="Ovo je naslov" cena="900.00" pisac="Svetlana Trivunovic"/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-center gap-3 p-3">
                                        <Preporuceno slika={knjiga3} naslov="Ovo je naslov" cena="1900.00" pisac="Mladen Bozidarovic"/>
                                        <Preporuceno slika={knjiga4} naslov="Ovo je naslov" cena="1300.00" pisac="Petar Petrovic"/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-center gap-3 p-3">
                                        <Preporuceno slika={knjiga5} naslov="Ovo je naslov" cena="1100.00" pisac="Mladen Trivunovic"/>
                                        <Preporuceno slika={knjiga6} naslov="Ovo je naslov" cena="1100.00" pisac="Neko Trivunovic"/>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Book;