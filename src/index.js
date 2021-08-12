import { bugAdded, bugResolved, bugRemoved } from "./actions";
import store from "./store";

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(bugAdded("A new bug1"));
store.dispatch(bugAdded("A new bug2"));
store.dispatch(bugAdded("A new bug3"));
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));
