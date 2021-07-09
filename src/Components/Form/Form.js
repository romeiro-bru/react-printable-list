import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import "./style.css";

export function Form() {
  const [inputs, setInputs] = useState({});
  const [list, setList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const initVal = JSON.parse(localStorage.getItem("key"));
    if (initVal !== null) {
      setList(initVal);
    }
    console.log(initVal);
  }, []);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setList([...list, inputs]);
    localStorage.setItem("key", JSON.stringify([...list, inputs]));
    e.target.reset();
  };

  const handlePageList = () => {
    history.push("/suppliespage");
  };

  return (
    <>
      <form className="submit-item" onSubmit={handleAdd}>
        <input
          name="ingredient"
          onChange={handleInputChange}
          placeholder=" Ingrediente"
          required
        />
        <select name="metrics" onChange={handleInputChange} required>
          <option selected value="-">
            Selecione a unidade
          </option>
          <option value="Kg"> Kg</option>
          <option value="mL">mL</option>
        </select>

        <button type="submit">Adicionar</button>
        <button className="btn-page-list" onClick={handlePageList}>
          Ver lista
          <BsArrowRightShort className="arrow-right" />
        </button>
      </form>
    </>
  );
}
