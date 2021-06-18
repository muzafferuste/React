import React from "react";

function Liste({ kisi }) {
  /* Bir baska yol ile props yapip kisiler dizisini almak
  function Liste(props) {
  const { kisi } = props;
  */
  return (
    <div>
      {kisi.map((k) => {
        const { id, isim, resim, yas } = k;

        return (
          // map'in return'u
          <div className="kisi" key={id}>
            <img src={resim} alt="" />
            <div>
              <h4>{isim}</h4>
              <p>{yas} Yasinda</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Liste;
