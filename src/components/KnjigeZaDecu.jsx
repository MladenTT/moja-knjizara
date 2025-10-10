import React, { useState, useEffect } from "react";
import PopularneKnjige from "./PopularneKnjige";
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

function KnjigeZaDecu() {
    return (
      <div className="main-container-decije">
        <PopularneKnjige/>
      </div>
    );
}
export default KnjigeZaDecu;