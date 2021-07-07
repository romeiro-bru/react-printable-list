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
    if (initVal !== null || initVal.length !== 0) {
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
    setTimeout(() => {
      history.push("/suppliespage");
    }, 1000);
  };

  const handlePageList = () => {
    history.push("/suppliespage");
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <input
          name="ingredient"
          onChange={handleInputChange}
          placeholder=" Ingrediente"
          required
        />
        <select name="metrics" onChange={handleInputChange} required>
          <option value="Kg"> Kg</option>
          <option selected value="mL">
            mL
          </option>
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
