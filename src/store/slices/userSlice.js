import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getUsers,
  createUser,
  removeUser
} from "../../services/userService";

const initialState = {
  users: [],
  loading: false,
  adding: false,
  error: null
};

  // USER SELECTERS
  export const selectUsers = state => state.users.users;
  export const selectUsersLoading = state => state.users.loading;
  export const selectUsersAdding = state => state.users.adding;
  export const selectUsersError = state => state.users.error;

// FETCH USERS
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      return await getUsers();
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch users"
      );
    }
  }
);

// ADD USER
export const addUser = createAsyncThunk(
  "users/addUser",
  async (user) => {
    return await createUser(user);
  }
);

// DELETE USER
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    await removeUser(id);

    return id;
  }
);

// SLICE
const userSlice = createSlice({
  name: "users",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // FETCH USERS - PENDING
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // FETCH USERS - FULFILLED
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      // FETCH USERS - REJECTED
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ADD USER - FULFILLED
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })

      // DELETE USER - FULFILLED
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => user.id !== action.payload
        );
      });
  }
});

export default userSlice.reducer;