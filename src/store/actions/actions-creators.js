import actions from "./actions";

export const initializeNewCells = () => {
  return { type: actions.GET_CELLS_COLORS };
};

export const setSpinStatus = (id) => {
  return { type: actions.STATUS_CELLS_COLORS, id };
};

export const resetCells = () => {
  return { type: actions.RESET_CELLS };
};
