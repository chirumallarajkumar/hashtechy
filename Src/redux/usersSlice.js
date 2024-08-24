import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from './userService';

// Async thunk to fetch users with pagination and optional refresh
export const fetchUsersAsync = createAsyncThunk(
    'users/fetchUsers',
    async ({ page, limit, refresh = false }) => {
        const response = await fetchUsers(page, limit);
        return { data: response.results, refresh };
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [], // List of users
        loading: false, // Loading state
        error: null, // Error state
        page: 1, // Current page number
    },
    reducers: {
        clearUsers: state => {
            state.users = []; // Clear user list
            state.page = 1; // Reset page number
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersAsync.pending, (state) => {
                state.loading = true; // Set loading to true on request start
                state.error = null; // Clear previous error
            })
            .addCase(fetchUsersAsync.fulfilled, (state, action) => {
                state.loading = false; // Set loading to false on success
                if (action.payload.refresh) {
                    state.users = action.payload.data; // Replace users on refresh
                } else {
                    state.users = [...state.users, ...action.payload.data]; // Append users on load more
                }
                state.page += 1; // Increment page number
            })
            .addCase(fetchUsersAsync.rejected, (state, action) => {
                state.loading = false; // Set loading to false on error
                state.error = action.error.message; // Store error message
            });
    },
});

export const { clearUsers } = usersSlice.actions;
export default usersSlice.reducer;
