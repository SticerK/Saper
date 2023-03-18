import { configureStore } from '@reduxjs/toolkit';
import settingsSlice from '../redux/settingsSlice';

export const store = configureStore({
  reducer: { settingsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
