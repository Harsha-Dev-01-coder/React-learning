import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null
};

// FETCH USERS
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    return response.json();
  }
);

// ADD USER
export const addUser = createAsyncThunk(
  "users/addUser",
  async (user) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(user)
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    return response.json();
  }
);

// DELETE USER
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "DELETE"
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    return id;
  }
);

const userSlice = createSlice({
  name: "users",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // FETCH - PENDING
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // FETCH - FULFILLED
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      // FETCH - REJECTED
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ADD USER
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })

      // DELETE USER
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => user.id !== action.payload
        );
      });
  }
});

export default userSlice.reducer;