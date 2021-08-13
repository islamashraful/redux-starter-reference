import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequested: (state, action) => {
      state.loading = true;
    },
    bugsReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },
    bugsRequestFailed: (state, action) => {
      state.loading = false;
    },
    bugAssignedToUser: (state, action) => {
      const { bugId, userId } = action.payload;
      const index = state.list.findIndex((item) => item.id === bugId);
      state.list[index].userId = userId;
    },
    bugAdded: (state, action) => {
      state.list.push(action.payload);
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

export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed,
} = slice.actions;
export default slice.reducer;

const url = "/bugs";
export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) {
    return;
  }

  dispatch(
    apiCallBegan({
      url,
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestFailed.type,
    })
  );
};

export const addBug = (bug) =>
  apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
  });

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
