import { createStore } from 'redux';
import rootReducer from "../reducers/Combinededucer";

const store = createStore(rootReducer);
export default store;