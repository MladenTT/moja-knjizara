import "./Footer.css";

function Footer() {
  
  return (
    
    <div className="footer-container">
      <div className="pc-container">
        <footer className="container py-5">
          <div className="container"> 
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top border-dark"> 
              <div className="col mb-3"> 
                <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap"> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-journals" viewBox="0 0 16 16">
                    <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/>
                    <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>
                  </svg>
                </a>
                <p className="text-body-secondary">© 2025</p> 
              </div> 
              <div className="col mb-3">
              
              </div> 
              <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
                  </li> 
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
                  </li> 
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
                  </li> 
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">About</a>
                  </li>
                </ul>
              </div>

              <div className="col mb-3">
                <h5>Section</h5> 
                <ul className="nav flex-column"> 
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
                  </li> 
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
                  </li> 
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
                  </li> 
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">About</a>
                  </li> 
                </ul> 
              </div>

              <div className="col mb-3"> 
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
                  </li> 
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">About</a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </footer>
      </div>

      {/*Footer Mobilna Verzija*/}
      <div className="mobile-container">
        <div className="accordion accordion-flush" id="accordionExample">

          <div id="accordion-item" className="accordion-item">
            <h2 className="accordion-header">
              <button id="accordion-button" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>

          <div id="accordion-item" className="accordion-item">
            <h2 className="accordion-header">
              <button id="accordion-button" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>

          <div id="accordion-item" className="accordion-item">
            <h2 className="accordion-header">
              <button id="accordion-button" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
