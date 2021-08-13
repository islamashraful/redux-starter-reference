import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  getBugsByUser,
  loadBugs,
  addBug,
  resolveBug,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
import * as actions from "./store/api";

const store = configureStore();

store.dispatch(loadBugs());

setTimeout(() => {
  store.dispatch(resolveBug(1));
}, 2000);

store.dispatch(addBug({ description: "a" }));
