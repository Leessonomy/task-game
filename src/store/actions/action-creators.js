import actions from "./actions";

const actionCreators = {
  initializeNewCells: () => {
    return { type: actions.GET_CELLS_COLORS };
  },

  setSpinStatus: (id) => {
    return { type: actions.STATUS_CELLS_COLORS, id };
  },

  resetCells: () => {
    return { type: actions.RESET_CELLS };
  },
};

export default actionCreators;
