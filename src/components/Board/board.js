import React, { useEffect, useState } from "react";
import "../../index.css";
import Cell from "../Cell/cell";
import { connect } from "react-redux";
import {
  initializeNewCells,
  setSpinStatus,
  resetCells,
} from "../../store/actions/actions-creators";

const Board = ({ cells, initializeNewCells, setSpinStatus, resetCells }) => {
  const [sort, setSort] = useState([]);

  useEffect(() => {
    initializeNewCells();
  }, []);

  useEffect(() => {
    const gameOver = cells.every((elem) => elem.spin === true);
    const match = sort.some((elem, i) => sort.indexOf(elem) !== i);
    if (gameOver) {
      const conf = window.confirm("You won. Do you want to restart the game?");
      if (conf) {
        window.location.reload();
      }
    }
    if (sort.length > 1) {
      if (!match) {
        setSort([]);
        setTimeout(() => {
          resetCells();
        }, 400);
      } else {
        setSort([]);
      }
    }
  }, [sort]);

  const handleChange = (id, e) => {
    if (e.target.checked) {
      setSort([...sort, e.target.value]);
      setSpinStatus(id);
    }
  };

  const content = cells.map((cell, i) => {
    return (
      <Cell
        color={cell.color}
        id={i}
        key={i}
        spin={cell.spin}
        handleChange={handleChange}
      />
    );
  });
  return (
    <div className="section-wrapper">
      <h2 className="description">
        You have to make eight pairs of cards of the same colors
      </h2>
      <section className="board-content">{content}</section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cells: state.game.cellsColors,
  initializeNewCells: initializeNewCells(),
  setSpinStatus: setSpinStatus(state),
  resetCells: resetCells(),
});

export default connect(mapStateToProps, {
  initializeNewCells: initializeNewCells,
  setSpinStatus: setSpinStatus,
  resetCells: resetCells,
})(Board);
