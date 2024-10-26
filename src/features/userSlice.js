
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: null,
    username: null,
    avatar: null, 
  },
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { _id, username, avatar } = action.payload;
      state.user = { id:_id, username, avatar };
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = { id: null, username: null, avatar: null };
      state.isLoggedIn = false;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
