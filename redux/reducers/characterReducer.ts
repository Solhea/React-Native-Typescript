import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type characters = {
  id: number;
  name: string;
  image: string;
}[];

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    characters: [{}],
  },
  reducers: {
    setCharacters: (state, action: PayloadAction<characters>) => {
      state.characters = action.payload.splice(0, 1);
    },
  },
});

export const {setCharacters} = characterSlice.actions;
export default characterSlice.reducer;
