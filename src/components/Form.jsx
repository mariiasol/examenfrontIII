import React, { useState } from "react";
import "./styles/Form.css"; // Import your CSS file for styling

function Form({ onAddMascota }) {
  const [nombre, setNombre] = useState("");
  const [dueño, setDueño] = useState("");
  const [nombreError, setNombreError] = useState("");
  const [dueñoError, setDueñoError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 3 || nombre.trim().startsWith(" ")) {
      setNombreError(
        "El nombre de la mascota debe tener al menos 3 caracteres y no debe comenzar con espacio en blanco."
      );
      return;
    }

    if (dueño.length < 6) {
      setDueñoError("El nombre del dueño debe tener al menos 6 caracteres.");
      return;
    }

    onAddMascota({nombre , dueño });

    setNombre("");
    setDueño("");
    setNombreError("");
    setDueñoError("");
  };

  return (
    <form onSubmit={handleSubmit} className="minimalist-form">
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          placeholder="Ingrese el nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {nombreError && <p className="error">{nombreError}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="dueño">Dueño:</label>
        <input
          type="text"
          id="dueño"
          placeholder="Ingrese el dueño"
          value={dueño}
          onChange={(e) => setDueño(e.target.value)}
        />
        {dueñoError && <p className="error">{dueñoError}</p>}
      </div>
      <button type="submit" className="submit-button">
        Guardar
      </button>
    </form>
  );
}

export default Form;