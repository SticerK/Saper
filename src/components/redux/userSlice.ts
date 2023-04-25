import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Values } from '../auth/login';

// const getUser = createAsyncThunk('user/getUser', async (prop) => {});

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: number;
}

export interface Game {
  games: number;
  wins: number;
  time: number;
}

export interface TotalUserCard {
  isAuth: boolean;
  user: User;
  game: Game;
}

const initialState: TotalUserCard = {
  isAuth: false,
  user: {
    _id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  game: {
    games: 0,
    wins: 0,
    time: 0,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuth = true;
    },
    endGame(state, action: PayloadAction<boolean>) {
      if (action.payload) {
        state.game.wins += 1;
        state.game.games += 1;
      } else {
        state.game.games += 1;
      }
    },
    timerRecord(state, action: PayloadAction<number>) {
      if (state.game.time > action.payload || state.game.time === 0)
        state.game.time = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getUser.fulfilled, (state, action) => {});
  // },
});

export default userSlice.reducer;
export const { getUser, endGame, timerRecord } = userSlice.actions;
