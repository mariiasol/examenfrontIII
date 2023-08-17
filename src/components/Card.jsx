import React from "react";
import "./styles/Card.css";

function Card({ mascotas }) {
  return (
    <div className="card-container">
      <h2>Mascotas</h2>
      {mascotas.map((mascota, index) => (
        <div key={index} className="card">
          <h3 className="card-title">
            Nombre mascota: {mascota.nombre}
          </h3>
          <p className="card-content">
            Nombre dueño: {mascota.dueño}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;