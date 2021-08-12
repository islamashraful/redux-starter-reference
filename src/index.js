import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(projectAdded({ name: "project" }));
store.dispatch(actions.bugAdded({ description: "A new bug1" }));
store.dispatch(actions.bugAdded({ description: "A new bug2" }));
store.dispatch(actions.bugAdded({ description: "A new bug3" }));
store.dispatch(actions.bugResolved({ id: 1 }));
store.dispatch(actions.bugRemoved({ id: 3 }));
