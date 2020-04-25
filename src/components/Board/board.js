import React, { useEffect, useState } from "react";
import "../../index.css";
import Cell from "../Cell/cell";
import actionCreators from "../../store/actions/action-creators";
import { useSelector, useDispatch } from "react-redux";

const Board = () => {
  const [sort, setSort] = useState([]);
  const cells = useSelector((state) => state.game.cellsColors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.initializeNewCells());
  }, []); // eslint-disable-line

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
          dispatch(actionCreators.resetCells());
        }, 400);
      } else {
        setSort([]);
      }
    }
  }, [sort]); // eslint-disable-line

  const handleChange = (id, e) => {
    if (e.target.checked) {
      setSort([...sort, e.target.value]);
      dispatch(actionCreators.setSpinStatus(id));
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

export default Board;
