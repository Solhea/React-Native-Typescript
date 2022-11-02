import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type state = {
  loading: boolean;
  requests: string[];
};

const initialState: state = {
  loading: false,
  requests: [],
};

export const sharedSlice = createSlice({
  name: 'shared',
  initialState: initialState,
  reducers: {
    addRequest: (state, action: PayloadAction<string>) => {
      state.requests.push(action.payload);
      state.loading = true;
    },
    removeRequest: (state, action: PayloadAction<string>) => {
      state.requests = state.requests.filter(
        request => request !== action.payload,
      );
      state.loading = state.requests.length > 0;
    },
  },
});

export const {addRequest, removeRequest} = sharedSlice.actions;
export default sharedSlice.reducer;
