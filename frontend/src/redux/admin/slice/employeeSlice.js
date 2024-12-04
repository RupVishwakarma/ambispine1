import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../../../utils/axiosInstance'; 


export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axiosInstance.get('/employees');
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch employees');
    }
});


export const addEmployee = createAsyncThunk('employees/addEmployee', async (employeeData, { rejectWithValue }) => {
    try {
        const { data } = await axiosInstance.post('/employees', employeeData);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to add employee');
    }
});


export const updateEmployee = createAsyncThunk('employees/updateEmployee', async ({ id, employeeData }, { rejectWithValue }) => {
    try {
        const { data } = await axiosInstance.put(`/employees/${id}`, employeeData);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update employee');
    }
});


export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async (id, { rejectWithValue }) => {
    try {
        await axiosInstance.delete(`/employees/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete employee');
    }
});


const initialState = {
  employees: [],
  loading: false,
  error: null,
};



// Create a slice
const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
        clearEmployees: (state) => {
          state.employees = []; 
          state.error = null;   
        },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex(employee => employee.id === action.payload.id);
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(employee => employee.id !== action.payload);
      });
  },
});



export default employeeSlice.reducer;
