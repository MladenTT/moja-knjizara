import { useState } from "react";
import "./PopularneKnjige.css";

import knjiga1 from "../assets/knjige/alisa_u_zemlji_cuda-luis_kerol_v.png";
import knjiga2 from "../assets/knjige/braca_karamazovi_i-fjodor_mihailovic_dostojevski_v.jpg";
import knjiga3 from "../assets/knjige/cica_gorio-onore_de_balzak_v.jpg";
import knjiga4 from "../assets/knjige/zapisi_iz_mrtvog_doma-fjodor_mihailovic_dostojevski_v.jpg";
import knjiga5 from "../assets/knjige/zli_dusi_i-fjodor_mihailovic_dostojevski_v.jpg";
import knjiga6 from "../assets/knjige/decaci_pavlove_ulice-ferenc_molnar_v.png";
import knjiga7 from "../assets/knjige/zivotinjska_farma-dzordz_orvel_v.jpg";
import knjiga8 from "../assets/knjige/zov_divljine-dzek_london_v.jpg";
import knjiga9 from "../assets/knjige/izgubljene_iluzije-onore_de_balzak_v.png";
import knjiga10 from "../assets/knjige/jadnici_-_i_tom-viktor_igo_v.png";

function PopularneKnjige() {
  const slike = [
    knjiga1, knjiga2, knjiga3, knjiga4, knjiga5,
    knjiga6, knjiga7, knjiga8, knjiga9, knjiga10
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 8;

  const prev = () => {
    setStartIndex((prev) =>
      prev === 0 ? slike.length - visibleCount : prev - 1
    );
  };

  const next = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= slike.length ? 0 : prev + 1
    );
  };

  const displayed = [];
  for (let i = 0; i < visibleCount; i++) {
    displayed.push(slike[(startIndex + i) % slike.length]);
  }

  // --- touch logika za mobilne ---
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      next(); // swipe levo -> sledeća
    }
    if (touchEndX - touchStartX > 50) {
      prev(); // swipe desno -> prethodna
    }
  };

  return (
    <div
      className="carousel-wrapper"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Strelica levo */}
      <div className="arrow left" onClick={prev}>
        &#8249;
      </div>

      {/* Carousel */}
      <div className="carousel-loop">
        {displayed.map((src, idx) => (
          <KnjigaPrecica key={idx} src={src} />
        ))}
      </div>

      {/* Strelica desno */}
      <div className="arrow right" onClick={next}>
        &#8250;
      </div>

      {/* Pozadinski container */}
      <div className="carousel-container"></div>
    </div>
  );
}

export default PopularneKnjige;
