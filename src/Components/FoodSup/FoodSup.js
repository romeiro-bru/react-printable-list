import React, { useEffect, useState } from "react";
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
      <ul className="sup-list">
        {supList.map((item, index) => (
          <li key={index}>
            <span>
              {item.ingredient} {item.metrics}
            </span>
          </li>
        ))}
        <button className="btn-return" onClick={handleReturn}>
          return
        </button>
      </ul>
    </>
  );
}
