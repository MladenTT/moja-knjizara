import React from "react";
import "./Add.css";
import reklamaH from "../assets/reklame/Kapetan-Gacerone-1400x300px.jpg";
import reklamaV from "../assets/reklame/Kapetan-Gacerone-800x900px.jpg";

function Add() {
    return (
        <div className="reklama1">
            <img className="horizontal" src={reklamaH} alt="Horizontalna" />
            <img className="vertical" src={reklamaV} alt="Vertikalna" />
        </div>
    )
}

export default Add;
