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

// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(userAdded({ name: "User1" }));

store.dispatch((dispatch, getState) => {
  dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
  console.log(getState());
});

// store.dispatch(userAdded({ name: "User2" }));
// store.dispatch(projectAdded({ name: "project" }));
// store.dispatch(bugAdded({ description: "A new bug1" }));
// store.dispatch(bugAdded({ description: "A new bug2" }));
// store.dispatch(bugAdded({ description: "A new bug3" }));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugRemoved({ id: 3 }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

// const bugsByUser1 = getBugsByUser(1)(store.getState());
// console.log(bugsByUser1);
