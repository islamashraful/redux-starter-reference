import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnResolvedBugs,
} from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

// const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(projectAdded({ name: "project" }));
store.dispatch(bugAdded({ description: "A new bug1" }));
store.dispatch(bugAdded({ description: "A new bug2" }));
store.dispatch(bugAdded({ description: "A new bug3" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 3 }));

const x = getUnResolvedBugs(store.getState());
