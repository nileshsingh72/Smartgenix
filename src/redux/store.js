import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
const rootreducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootreducer, applyMiddleware(thunk));
