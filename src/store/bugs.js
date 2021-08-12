import { createAction, createReducer } from "@reduxjs/toolkit";

// Action creators
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

// Reducer
let lastId = 0;

export default createReducer([], {
  [bugAdded.type]: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugResolved.type]: (state, action) => {
    const index = state.findIndex((item) => item.id === action.payload.id);
    state[index].resolved = true;
  },
  [bugRemoved.type]: (state, action) => {
    const index = state.findIndex((item) => item.id === action.payload.id);
    state.splice(index, 1);
  },
});
