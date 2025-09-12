import React, { useState, useEffect } from "react";
import "./KnjigeZaDecu.css"
import knjiga1 from "../assets/decijeKnjige/404649_350_350px.jpg";
import knjiga2 from "../assets/decijeKnjige/404650_350_350px.jpg";
import knjiga3 from "../assets/decijeKnjige/405042_350_350px.jpg";
import knjiga4 from "../assets/decijeKnjige/405043_350_350px.jpg";
import knjiga5 from "../assets/decijeKnjige/405047_350_350px.jpg";
import knjiga6 from "../assets/decijeKnjige/405048_350_350px.jpg";
import knjiga7 from "../assets/decijeKnjige/405049_350_350px.jpg";
import knjiga8 from "../assets/decijeKnjige/405050_350_350px.jpg";
import knjiga9 from "../assets/decijeKnjige/405054_350_350px.jpg";
import knjiga10 from "../assets/decijeKnjige/405046_350_350px.jpg";

const knjige = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5, knjiga6, knjiga7, knjiga8, knjiga9, knjiga10];

function KnjigeZaDecu({naslov}) {
  const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(5); // default za velike ekrane
    const total = knjige.length;
  
    // Responsivni broj vidljivih knjiga
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 576) {
          setVisibleCount(1); // mobilni ekran -> 1 knjiga
        } else {
          setVisibleCount(5); // veći ekrani -> 5 knjiga
        }
      };
      handleResize(); // inicijalno
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const next = () => setStartIndex((startIndex + 1) % total);
    const prev = () => setStartIndex((startIndex - 1 + total) % total);
  
    // Pripremamo vidljive knjige sa wrap-around logikom
    const visibleKnjige = [];
    for (let i = 0; i < visibleCount; i++) {
      visibleKnjige.push(knjige[(startIndex + i) % total]);
    }
  
    return (
      <div className="main-container-decije">
        <h1 className="decije-naslov">{naslov}</h1>
  
        <div className="carousel-wrapper-decije">
          <button onClick={prev} className="carousel-btn left">&#10094;</button>
  
          <div className="carousel-inner-decije" style={{ width: `${visibleCount * 220}px` }}>
            {visibleKnjige.map((knjiga, index) => (
              <img
                key={index}
                src={knjiga}
                alt={`Knjiga ${index}`}
                className="carousel-img"
              />
            ))}
          </div>
  
          <button onClick={next} className="carousel-btn-decije right">&#10095;</button>
        </div>
      </div>
    );
}
export default KnjigeZaDecu;