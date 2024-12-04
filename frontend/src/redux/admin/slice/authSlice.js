// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance from '../../../utils/axiosInstance';
// import axios from 'axios';

// // Async Thunks
// export const signup = createAsyncThunk(
//     'auth/signup',
//     async (signupData, { rejectWithValue }) => {
//         try {
//             const { data } = await axiosInstance.post('admin/users', signupData);
//             return data.message;
//         } catch (error) {
//             return rejectWithValue(error.response?.data?.message || 'An error occurred while signing up.');
//         }
//     }
// );

// export const login = createAsyncThunk(
//     'auth/login',
//     async ({ username, password }, { rejectWithValue }) => {
//         try {
//             const { data } = await axiosInstance.post('admin/admin-login', { username, password });
//             return data; //{ user, token }
//         } catch (error) {
//             return rejectWithValue(error.response?.data?.message || 'Login failed');
//         }
//     }
// );

// export const changePassword = createAsyncThunk(
//     'auth/changePassword',
//     async (passwordData, { getState, rejectWithValue }) => {
//         const { auth } = getState();
//         const token = auth.token; 

//         try {
//             const response = await axios.put('http://localhost:8080/api/admin/password/change', passwordData, {
//                 headers: {
//                     'Authorization': `Bearer ${token}` 
//                 }
//             });
//             return response.data; 
//         } catch (error) {
//             return rejectWithValue(error.response.data); 
//         }
//     }
// );

// // Create the auth slice
// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         user: null,
//         token: null,
//         loading: false,
//         error: null,
//         successMessage: null, 
//         isAuthenticated: false,
//     },
//     reducers: {
//         logout: (state) => {
//             state.user = null;
//             state.token = null; 
//             state.loading = false;  
//             state.error = null;  
//             state.successMessage = null; 
//             state.isAuthenticated = false;   
//             localStorage.removeItem('token'); 
//         },
//         clearError: (state) => {
//             state.error = null;
//         },
//         clearSuccessMessage: (state) => {
//             state.successMessage = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(signup.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(signup.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.successMessage = action.payload; 
//             })
//             .addCase(signup.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })
//             .addCase(login.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(login.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.user = action.payload.user; 
//                 state.token = action.payload.token; 
//                 state.isAuthenticated = true;
//                 localStorage.setItem('token', action.payload.token); 
//             })
//             .addCase(login.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })
//             .addCase(changePassword.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(changePassword.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.successMessage = action.payload.message; 
//             })
//             .addCase(changePassword.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload.message;
//             });
//     },
// });

// export const { clearError, logout, clearSuccessMessage } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/axiosInstance';

// Async Thunks
export const signup = createAsyncThunk(
    'auth/signup',
    async (signupData, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post('admin/users', signupData);
            return data.message;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'An error occurred while signing up.');
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post('admin/admin-login', { username, password });
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);

export const changePassword = createAsyncThunk(
    'auth/changePassword',
    async (passwordData, { getState, rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.put('admin/password/change', passwordData);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Password change failed');
        }
    }
);

// Create the auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
        successMessage: null,
        isAuthenticated: false,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.loading = false;
            state.error = null;
            state.successMessage = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        },
        clearError: (state) => {
            state.error = null;
        },
        clearSuccessMessage: (state) => {
            state.successMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.successMessage = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(changePassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.loading = false;
                state.successMessage = action.payload.message;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Password change failed';
            });
    },
});

export const { clearError, logout, clearSuccessMessage } = authSlice.actions;
export default authSlice.reducer;

