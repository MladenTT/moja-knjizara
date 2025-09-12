import React, { useState } from "react";

const Proba = () => {
  const [knjiga, setKnjiga] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = e.target.id.value;
    const naslov = e.target.naslov.value;
    const autor = e.target.autor.value;
    const fileInput = e.target.slika;

    if (fileInput.files.length === 0) {
      alert("Molimo izaberite sliku!");
      return;
    }

    const fileName = fileInput.files[0].name;
    const slikaPutanja = `/slike/${fileName}`;

    const novaKnjiga = {
      id,
      naslov,
      autor,
      slika: slikaPutanja,
    };

    setKnjiga(novaKnjiga);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h1>Dodaj novu knjigu</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID knjige:</label>
          <input type="text" id="id" name="id" required />
        </div>
        <div>
          <label htmlFor="naslov">Naslov knjige:</label>
          <input type="text" id="naslov" name="naslov" required />
        </div>
        <div>
          <label htmlFor="autor">Autor:</label>
          <input type="text" id="autor" name="autor" required />
        </div>
        <div>
          <label htmlFor="slika">Izaberi sliku:</label>
          <input type="file" id="slika" name="slika" accept="image/*" required />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Dodaj knjigu</button>
      </form>

      {knjiga && (
        <div style={{ marginTop: "20px" }}>
          <h2>Uneta knjiga:</h2>
          <pre>{JSON.stringify(knjiga, null, 2)}</pre>
          <img src={knjiga.slika} alt={knjiga.naslov} style={{ maxWidth: "200px", marginTop: "10px" }} />
        </div>
      )}
    </div>
  );
};

export default Proba;
