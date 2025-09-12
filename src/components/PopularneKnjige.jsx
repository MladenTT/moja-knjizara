import React, { useState, useEffect } from "react";
import "./PopularneKnjige.css";

import knjiga1 from "../assets/knjige/alisa_u_zemlji_cuda-luis_kerol_v.png";
import knjiga2 from "../assets/knjige/braca_karamazovi_i-fjodor_mihailovic_dostojevski_v.jpg";
import knjiga3 from "../assets/knjige/cica_gorio-onore_de_balzak_v.jpg";
import knjiga4 from "../assets/knjige/zapisi_iz_mrtvog_doma-fjodor_mihailovic_dostojevski_v.jpg";
import knjiga5 from "../assets/knjige/zli_dusi_i-fjodor_mihailovic_dostojevski_v.jpg";
import knjiga6 from "../assets/knjige/decaci_pavlove_ulice-ferenc_molnar_v.png";
import knjiga7 from "../assets/knjige/zivotinjska_farma-dzordz_orvel_v.jpg";

const knjige = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5, knjiga6, knjiga7];

function PopularneKnjige() {
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
    <div className="main-container">
      <h1 className="popularni-naslov">Popularne knjige</h1>

      <div className="carousel-wrapper">
        <button onClick={prev} className="carousel-btn left">&#10094;</button>

        <div className="carousel-inner" style={{ width: `${visibleCount * 220}px` }}>
          {visibleKnjige.map((knjiga, index) => (
            <img
              key={index}
              src={knjiga}
              alt={`Knjiga ${index}`}
              className="carousel-img"
            />
          ))}
        </div>

        <button onClick={next} className="carousel-btn right">&#10095;</button>
      </div>
    </div>
  );
}

export default PopularneKnjige;
