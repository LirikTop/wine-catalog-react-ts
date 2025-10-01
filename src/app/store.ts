// eslint-disable-next-line import/no-extraneous-dependencies
import {
  configureStore,
  ThunkAction,
  Action,
  combineSlices,
} from '@reduxjs/toolkit';
import { favoritesSlice } from '../features/favoritesSlice';
import { commentsSlice } from '../features/commentsSlice';
import { userSlice } from '../features/userSlice';
import { cartSlice } from '../features/cartSlice';
import { wineSlice } from '../features/wineSlice';
// eslint-disable-next-line import/no-cycle

const rootReducer = combineSlices(
  favoritesSlice,
  commentsSlice,
  userSlice,
  cartSlice,
  wineSlice,
);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
