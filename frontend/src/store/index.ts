import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import roomReducer from './room/room';
import homeReducer from './home/home';

export function makeStore() {
  return configureStore({
    reducer: { home: homeReducer, room: roomReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
