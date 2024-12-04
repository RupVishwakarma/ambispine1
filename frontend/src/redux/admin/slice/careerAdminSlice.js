import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../../../utils/axiosInstance'; 

const initialState = {
    careers: [],
    loading: false,
    error: null,
    selectedCareer: null
};

export const fetchCareers = createAsyncThunk('careers/fetchCareers', async () => {
    const response = await axiosInstance.get('admin/careers');
    return response.data;
});

export const addCareer = createAsyncThunk('careers/addCareer', async (careerData) => {
    const response = await axiosInstance.post('admin/careers', careerData, );
    return response.data;
});

export const updateCareer = createAsyncThunk('careers/updateCareer', async ({ id, careerData }) => {
    const response = await axiosInstance.put(`admin/careers/${id}`, careerData);
    return response.data;
});

export const fetchCareerById = createAsyncThunk('careers/fetchCareerById', async (id) => {
    const response = await axiosInstance.get(`admin/careers/${id}`);
    return response.data;
});

export const deleteCareer = createAsyncThunk('careers/deleteCareer', async (id) => {
    await axiosInstance.delete(`admin/careers/${id}`);
    return id; 
});

// Create the slice
const careerAdminSlice = createSlice({
    name: 'careerAdmin',
    initialState,
    reducers: {
        clearCareers: (state) => {
            state.error = null; 
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCareers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCareers.fulfilled, (state, action) => {
                state.loading = false;
                state.careers = action.payload;
            })
            .addCase(fetchCareers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchCareerById.pending, (state) => {
                state.loading = true;
                state.selectedCareer = null; 
            })
            .addCase(fetchCareerById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedCareer = action.payload; 
            })
            .addCase(fetchCareerById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addCareer.fulfilled, (state, action) => {
                state.careers.push(action.payload);
            })
            .addCase(addCareer.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(updateCareer.fulfilled, (state, action) => {
                const index = state.careers.data.findIndex((career) => career._id === action.payload._id);
                if (index !== -1) {
                    state.careers.data[index] = action.payload;
                }
            })
            .addCase(updateCareer.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(deleteCareer.fulfilled, (state, action) => {
                state.careers = state.careers.filter((career) => career._id !== action.payload);
            })
            .addCase(deleteCareer.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

// Export the actions and reducer
export const { clearCareers } = careerAdminSlice.actions;
export default careerAdminSlice.reducer;
