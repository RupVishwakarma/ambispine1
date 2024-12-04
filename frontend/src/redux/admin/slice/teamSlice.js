import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import axios from 'axios';
import axiosInstance from '../../../utils/axiosInstance'; 

export const fetchTeamMembers = createAsyncThunk('team/fetchTeamMembersAll', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axiosInstance.get('/team/');
        return data.teams;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team members');
    }
});

export const createTeamMember = createAsyncThunk(
    'team/createTeamMember',
    async (formData, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post('/team/', formData, {
                headers: {
                    'Content-Type': 'application/json', // 'Content-Type': 'multipart/form-data' if handling file uploads
                },
            });
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Something went wrong');
        }
    }
);

export const updateTeamMember = createAsyncThunk(
    'team/updateTeamMember',
    async ({ id, updatedMember }, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.put(`/team/${id}`, updatedMember);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to update team member');
        }
    }
);

export const deleteTeamMember = createAsyncThunk(
    'team/deleteTeamMember',
    async (id, { rejectWithValue }) => {
        try {
            await axiosInstance.delete(`/team/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to delete team member');
        }
    }
);


const initialState = {
    teamMembers: [],
    loading: false,
    error: null,
};



const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        clearFeedbacks: (state) => {
            state.error = null; 
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTeamMembers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTeamMembers.fulfilled, (state, action) => {
                state.loading = false;
                state.teamMembers = action.payload;
            })
            .addCase(fetchTeamMembers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createTeamMember.pending, (state) => {
                state.loading = true;
            })
            .addCase(createTeamMember.fulfilled, (state, action) => {
                state.loading = false;
                state.teamMembers.push(action.payload);
            })
            .addCase(createTeamMember.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateTeamMember.fulfilled, (state, action) => {
                const index = state.teamMembers.findIndex(member => member._id === action.payload._id);
                if (index !== -1) {
                    state.teamMembers[index] = action.payload;
                }
            })
            .addCase(deleteTeamMember.fulfilled, (state, action) => {
                const index = state.teamMembers.findIndex(member => member._id === action.payload);
                if (index !== -1) {
                    state.teamMembers.splice(index, 1);
                }
            });
    },
});

export const { clearFeedbacks } = teamSlice.actions;

export default teamSlice.reducer;
