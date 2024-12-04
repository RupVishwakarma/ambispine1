import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import axios from 'axios';

import axiosInstance from '../../utils/axiosInstance'; 

export const submitContactMessage = createAsyncThunk(
    'contact/submitContactMessage',
    async (contactData, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post('/contact', contactData); 
            return data.message;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 
                'An error occurred while sending your message.');
        }
    }
);

export const fetchContactMessages = createAsyncThunk(
    'contact/fetchContactMessages',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/contact');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message ||
                'An error occurred while fetching messages.');
        }
    }
);

export const deleteContactMessage = createAsyncThunk(
    'contact/deleteContactMessage',
    async (id, { rejectWithValue }) => {
        try {
            await axiosInstance.delete(`/contact/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message ||
                'An error occurred while deleting the message.');
        }
    }
);

// Create the contact slice
const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        loading: false,
        success: false,
        error: null,
        contacts: [], 
    },
    reducers: {
        resetContactState: (state) => {
            state.success = false;
            state.error = null;
        },
        resetContactMessages: (state) => {
            state.contacts = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitContactMessage.pending, (state) => {
                state.loading = true;
            })
            .addCase(submitContactMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(submitContactMessage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchContactMessages.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchContactMessages.fulfilled, (state, action) => {
                state.loading = false;
                state.contacts = action.payload.data; 
                state.error = null;
            })
            .addCase(fetchContactMessages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteContactMessage.fulfilled, (state, action) => {
                state.contacts = state.contacts.filter(contact => contact._id !== action.payload);
            })
    },
});

// Export actions and reducer
export const { resetContactState, resetContactMessages } = contactSlice.actions;
export default contactSlice.reducer;
