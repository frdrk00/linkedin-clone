import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
