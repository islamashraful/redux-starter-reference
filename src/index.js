import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(actions.bugAdded("A new bug1"));
store.dispatch(actions.bugAdded("A new bug2"));
store.dispatch(actions.bugAdded("A new bug3"));
store.dispatch(actions.bugResolved(1));
store.dispatch(actions.bugRemoved(1));
