import { configureStore } from '@reduxjs/toolkit';
import settingsSlice from '../redux/settingsSlice';
import userSlice from '../redux/userSlice';

export const store = configureStore({
  reducer: { settingsSlice, userSlice },
});

export type RootState = ReturnType<typeof store.getState>;
