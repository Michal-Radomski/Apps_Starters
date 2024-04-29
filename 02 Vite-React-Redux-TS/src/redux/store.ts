import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk as reduxThunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from "./reducer";

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(reduxThunk)));
export default store;
