import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsReceived: (state, action) => {
      state.list = action.payload;
    },
    bugAssignedToUser: (state, action) => {
      const { bugId, userId } = action.payload;
      const index = state.list.findIndex((item) => item.id === bugId);
      state.list[index].userId = userId;
    },
    bugAdded: (state, action) => {
      state.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (state, action) => {
      const index = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      state.list[index].resolved = true;
    },
    bugRemoved: (state, action) => {
      const index = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      state.list.splice(index, 1);
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved, bugAssignedToUser } =
  slice.actions;
export default slice.reducer;

// If bugs not changed from left side then the right side will not be executed
// Returns the bugs from cache
export const getUnResolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.list.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.list.filter((bug) => bug.userId === userId)
  );

// export const getUnResolvedBugs = createSelector(
//   (state) => state.entities.bugs,
//   (state) => state.entities.projects,
//   (bugs, projects) => bugs.filter((bug) => !bug.resolved)
// );
