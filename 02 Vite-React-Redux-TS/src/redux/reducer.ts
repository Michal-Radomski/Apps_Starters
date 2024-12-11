import { combineReducers } from "redux";

import { GET_ADDRESS_IP } from "./actionTypes";
import { ObjectI } from "../Interfaces";

const initialState = {} as ObjectI;

// Reducers
const getAddressInfo = function (state = initialState, action: { type: string; payload: ObjectI }) {
  // console.log("action.payload:", action.payload);
  switch (action.type) {
    case GET_ADDRESS_IP:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

// CombineReducer
const rootReducer = combineReducers({
  getAddressInfo: getAddressInfo,
});

export default rootReducer;
