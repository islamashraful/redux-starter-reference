import configureStore from "./store/configureStore";
import { loadBugs, resolveBug, assignBugToUser } from "./store/bugs";

const store = configureStore();

store.dispatch(loadBugs());

setTimeout(() => {
  store.dispatch(resolveBug(1));
}, 2000);

store.dispatch(assignBugToUser(1, 4));
