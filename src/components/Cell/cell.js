import React from "react";
import "../../index.css";

const Cell = ({ color, id, spin, handleChange }) => {
  return (
    <div
      className="card-cell"
      style={
        spin
          ? { transform: "rotateY(180deg)", transition: "transform 0.6s" }
          : {}
      }
    >
      <label htmlFor={id} className="color-cell">
        <input
          type="checkbox"
          className="checkbox"
          id={id}
          value={color}
          checked={spin}
          onChange={(e) => handleChange(id, e)}
        />
        <div className="card-cell-front">
          <span className="card-cell-front-text">There is color</span>
        </div>
        <div
          className="card-cell-back"
          style={
            spin
              ? { backgroundColor: `${color}` }
              : { backgroundColor: `${color}` }
          }
        >
          <span className="card-cell-back-text">{color}</span>
        </div>
      </label>
    </div>
  );
};

export default Cell;
