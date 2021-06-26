import React, { useState } from "react";
import "./Form.css";

function Form02() {
  const [form, setForm] = useState({ ad: "", soyad: "", mesaj: "" });

  console.log("FORM", form);
  function guncelle(event) {
    const { name, value } = event.target;
    setForm(() => {
      return {
        ...form,
        [name]: value,
      };
    });
  }

  return (
    <div className="alan">
      {form.ad && (
        <h1>
          Merhaba {form.ad} {form.soyad}
        </h1>
      )}
      <form>
        <input
          className="input"
          type="text"
          placeholder="adiniz"
          name="ad"
          required
          onChange={guncelle}
          value={form.ad}
        />
        <input
          className="input"
          type="text"
          placeholder="soyadiniz"
          name="soyad"
          required
          onChange={guncelle}
          value={form.soyad}
        />
        <textarea
          className="input"
          name="mesaj"
          id=""
          cols="30"
          rows="10"
          value={form.mesaj}
          onChange={guncelle}
        ></textarea>

        <button type="submit">Gonder</button>
      </form>
    </div>
  );
}

export default Form02;
