import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { store } from './store';

//types
export type AppStateType = ReturnType<typeof store.getState>;
//AppState type
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionType>;
//thunks type
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppStateType,
	unknown,
	AppActionType
>;
//actions type
export type AppActionType = any;
