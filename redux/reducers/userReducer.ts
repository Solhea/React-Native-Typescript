import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: "",
    },
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.user = action.payload;
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;