import React from "react";
import "./style.css";

export function Form() {
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("oi");
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <input
          name="ingredient"
          onChange={handleInputChange}
          placeholder="  Ingrediente"
        />
        <input
          name="metrics"
          onChange={handleInputChange}
          placeholder="  Kg ou ml"
        />

        <button type="submit">Adicionar</button>
      </form>
    </>
  );
}
