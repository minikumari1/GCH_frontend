import { createStore, combineReducers } from 'redux';
import taskReducer from '../Redux/Reducers/taskReducer'; // Example reducer

const rootReducer = combineReducers({
  tasks: taskReducer,
  // Add other reducers here (e.g., userReducer, notificationReducer)
});

const store = createStore(rootReducer);

export default store;
