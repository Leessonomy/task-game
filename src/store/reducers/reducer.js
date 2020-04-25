import actions from "../actions/actions";
import randomCells from "../../helpers/shuffle";

const initialState = {
  cellsColors: [
    "red",
    "yellow",
    "blue",
    "orange",
    "purple",
    "gray",
    "green",
    "pink",
  ].map((color) => ({
    color: color,
    spin: false,
  })),
};

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CELLS_COLORS:
      return {
        ...state,
        cellsColors: randomCells(state.cellsColors),
      };
    case actions.STATUS_CELLS_COLORS:
      let newArr = [...state.cellsColors];
      newArr[action.id] = { ...newArr[action.id], spin: true };
      return {
        ...state,
        cellsColors: newArr,
      };

    case actions.RESET_CELLS:
      const resetArr = state.cellsColors.map((n) => {
        return { ...n, spin: false };
      });
      return {
        ...state,
        cellsColors: resetArr,
      };
    default:
      return state;
  }
};

export default defaultReducer;
