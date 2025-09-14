import React from "react";
import "./Add.css";
import reklamaH from "../assets/reklame/Kapetan-Gacerone-1400x300px-v2.jpg";
import reklamaV from "../assets/reklame/Kapetan-Gacerone-800x900px-v2.jpg";

function Add() {
  return (
    <div className="reklama1">
      <img className="horizontal" src={reklamaH} alt="Horizontalna reklama" />
      <img className="vertical" src={reklamaV} alt="Vertikalna reklama" />
    </div>
  );
}

export default Add;

