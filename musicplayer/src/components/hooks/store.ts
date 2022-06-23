
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useCustomDispatch = () => useDispatch<AppDispatch>();

export const useCustonSelector: TypedUseSelectorHook<RootState> = useSelector;