import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): Dispatch => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
