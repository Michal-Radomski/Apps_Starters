// Types and Interfaces
import store from "./redux/store";

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type Fetch = () => RootState;
export type Action = typeof store.action;

export type ObjectI = { [key: string]: any };
