import React from "react";
import "./Add.css";

function Add() {
  return (
    <div className="reklama1">
      {/* Horizontalna slika za desktop */}
      <img
        className="horizontal"
        src={process.env.PUBLIC_URL + "/slike/reklame/Kapetan-Gacerone-1400x300px.jpg"}
        alt="Horizontalna reklama"
      />

      {/* Vertikalna slika za mobilni */}
      <img
        className="vertical"
        src={process.env.PUBLIC_URL + "/slike/reklame/Kapetan-Gacerone-800x900px.jpg"}
        alt="Vertikalna reklama"
      />
    </div>
  );
}

export default Add;
