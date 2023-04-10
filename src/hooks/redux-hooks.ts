import { useDispatch, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, AppState } from '../store/appStore';
import { useSelector } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// useAppSelector(store => )