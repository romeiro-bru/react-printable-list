import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePrinter } from "react-icons/ai";
import "./style.css";
import { useHistory } from "react-router-dom";

export function FoodSup() {
  const [supList, setSupList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("key"));
    ls !== null ? setSupList(ls) : setSupList("");
    console.log(ls);
  }, []);

  const handleReturn = () => {
    history.push("/");
  };

  const handleRemove = (index) => {
    const list = JSON.parse(localStorage.getItem("key"));
    const filtered = list.filter((_, i) => i !== index);
    localStorage.setItem("key", JSON.stringify(filtered));
  };

  return (
    <>
      <table className="sup-list">
        <section className="section-table">
          <tr>
            <th>Itens</th>
            <th>Quantidade</th>
            <th>Unidade</th>
            <th>Remover</th>
          </tr>
          {supList.map((item, index) => (
            <tr key={index}>
              <td className="list-item">{item.ingredient}</td>
              <td className="item-amount">1</td>
              <td>{item.unit}</td>
              <td>
                <form>
                  <button
                    onClick={() => handleRemove(index)}
                    className="btn-delete"
                  >
                    <BsTrash className="delete-icon" />
                  </button>
                </form>
              </td>
            </tr>
          ))}
          <button className="btn-return" onClick={handleReturn}>
            <BsArrowLeft className="arrow-left" />
            voltar
          </button>
          <button onClick={() => window.print()} className="btn-print tooltip">
            <span class="tooltiptext">Imprimir</span>
            <AiOutlinePrinter className="print-icon" />
          </button>
        </section>
      </table>
    </>
  );
}
