import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { BsTrash } from "react-icons/bs";
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

  return (
    <>
      <table className="sup-list">
        <section className="section-table">
          <tr>
            <th>Itens</th>
            <th>Quantidade</th>
            <th>Unidade</th>
            <th>Add/Remover</th>
          </tr>
          {supList.map((item, index) => (
            <tr key={index}>
              <td className="list-item">{item.ingredient}</td>
              <td className="item-amount">1</td>
              <td>{item.metrics}</td>
              <td>
                <button className="btn-amount">
                  <GoPlus className="add-icon" />
                </button>
                <button className="btn-delete">
                  <BsTrash className="delete-icon" />
                </button>
              </td>
            </tr>
          ))}
          <button className="btn-return" onClick={handleReturn}>
            <BsArrowLeft className="arrow-left" />
            voltar
          </button>
        </section>
      </table>
    </>
  );
}
