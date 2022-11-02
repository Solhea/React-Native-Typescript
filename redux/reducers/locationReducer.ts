import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type state = {
  locations: any[];
};

const initialState: state = {
  locations: [],
};

export const locationSlice = createSlice({
  name: 'location',
  initialState: initialState,
  reducers: {
    setLocations: (state, action: PayloadAction<any[]>) => {
      state.locations = action.payload;
      state.locations = state.locations.filter(
        (location: any) => location.id !== '1',
      );
    },
  },
});

export const {setLocations} = locationSlice.actions;
export default locationSlice.reducer;
