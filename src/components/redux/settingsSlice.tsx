import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type settingsSliceProp = {
  width: number;
  height: number;
  enter: boolean;
  losing: boolean;
  arrayMines: number[];
  arrayPlayer: number[];
  win: boolean;
};

type addParamsAction = {
  name: string;
  value: string;
};

const initialState: settingsSliceProp = {
  width: 0,
  height: 0,
  enter: false,
  losing: false,
  arrayMines: [],
  arrayPlayer: [],
  win: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    addParams(state, action: PayloadAction<addParamsAction>) {
      //@ts-ignore
      state[action.payload.name] = action.payload.value;
    },
    enterGame(state) {
      state.enter = true;
      state.losing = false;
      state.win = false;
      state.arrayPlayer = [];
    },
    losingGame(state) {
      state.losing = true;
    },

    newGame(state) {
      state.losing = false;
      state.enter = false;
      state.arrayPlayer = [];
      state.arrayMines = [];
      state.win = false;
    },
    addMines(state) {
      for (let i = 1; i <= state.width * state.height; i++) {
        const random = Math.floor(Math.random() * 20) + 1;
        if (random > 16) state.arrayMines.push(i);
      }
    },
    checkWin(state, action: PayloadAction<number>) {
      //@ts-ignore
      const second = state.arrayPlayer.find((item) => item === action.payload);
      if (!second) state.arrayPlayer.push(action.payload);
      else {
        state.arrayPlayer = state.arrayPlayer.filter((item) => item !== action.payload);
      }
      state.win = state.arrayMines.every((item, index) => state.arrayPlayer.includes(item));
    },
  },
});

export default settingsSlice.reducer;

export const { addParams, enterGame, losingGame, newGame, addMines, checkWin } =
  settingsSlice.actions;
