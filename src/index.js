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

const store = configureStore();

store.dispatch({
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    // method: "get",
    // data: {},
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  },
});
