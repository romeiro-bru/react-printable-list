import React, { useEffect, useState } from "react";
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
      <ul>
        {supList.map((item, index) => (
          <li key={index}>
            <span>
              {item.ingredient} {item.metrics}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={handleReturn}>return</button>
    </>
  );
}
