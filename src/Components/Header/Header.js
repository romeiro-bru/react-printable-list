import React from "react";
import atom from "../../../public/assets/images/atom.svg";
import "./style.css";

export function Header() {
  return (
    <>
      <h1 className="no-print">
        30 days of React
        <img src={atom} alt="atom" className="spin" />
      </h1>
      <h2 className="no-print">Day 12</h2>
    </>
  );
}
