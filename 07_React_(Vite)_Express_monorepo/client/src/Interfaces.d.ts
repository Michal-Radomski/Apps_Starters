// Types and Interfaces

type RootState = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;
type Fetch = () => RootState;
type Action = typeof store.action;
