import React, { useState } from "react";
import "./style.css";

export function Form() {
  const [inputs, setInputs] = useState({});
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setList([...list, inputs]);
    localStorage.setItem("key", JSON.stringify([...list, inputs]));

    e.target.reset();
    setInputs({
      ingredient: "",
      metrics: "Kg"
    });
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <input
          name="ingredient"
          onChange={handleInputChange}
          placeholder="  Ingrediente"
          required
        />
        <select name="metrics" onChange={handleInputChange} required>
          <option value="Kg">Kg</option>
          <option selected value="mL">
            mL
          </option>
        </select>

        <button type="submit">Adicionar</button>
      </form>
      <section className="ingredients-list">
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <span>
                {item.ingredient} {item.metrics}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
