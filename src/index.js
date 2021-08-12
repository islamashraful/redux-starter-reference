import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
import * as actions from "./store/api";

const store = configureStore();

store.dispatch(
  actions.apiCallBegan({
    url: "/bugs",
    // onSuccess: actions.apiCallSuccess.type,
    // onError: actions.apiCallFailed.type,
  })
);

// store.dispatch({
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     // method: "get",
//     // data: {},
//     onSuccess: "bugsReceived",
//     onError: "apiRequestFailed",
//   },
// });
