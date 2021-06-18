import React, { useState } from "react";
import data from "./data";
import Liste from "./Liste";

function App() {
  const [kisiler, setKisiler] = useState(data);

  function temizle() {
    setKisiler([]);
  }

  function goster() {
    setKisiler(data);
  }

  return (
    <main>
      <section className="container">
        <h3>Bugun {kisiler.length} dogum gunu bulunmaktadir.</h3>
        <Liste kisi={kisiler} />
        <button onClick={temizle}>Temizle</button>
        <button onClick={goster}>Tekrar Goster</button>
      </section>
    </main>
  );
}

export default App;
