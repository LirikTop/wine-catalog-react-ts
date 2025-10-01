/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
// import { getUsers } from '../api/users';
import Users from '../api/userApi.json';
import { User } from '../types/User';

const initialState = {
  users: [] as User[],
  user: null as User | null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  // return getUsers();
  return Users;
});

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (userId: number) => {
    // return getUser(userId);

    return Users.find(user => user.id === userId) || null;
  },
);

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
      },
    );
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<User | null>) => {
        state.user = action.payload;
      },
    );
  },
});

export const selectUsers = (state: RootState) => state.users;

export default userSlice.reducer;
