import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, CircularProgress, Box, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../../redux/admin/slice/employeeSlice';
import Header from './Header';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const EmployeeDataGrid = () => {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleEdit = (id) => {
    
    console.log(`Edit employee with id: ${id}`);
    
  };

  const handleDelete = (id) => {
   
    console.log(`Delete employee with id: ${id}`);
    
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'jobTitle', headerName: 'Job Title', width: 150 },
    { field: 'department', headerName: 'Department', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box display="flex" justifyContent="center" alignItems="center">
          <IconButton
            color="primary"
            onClick={() => handleEdit(params.row._id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDelete(params.row._id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="flex-start" alignItems="left" textAlign="left">
        <Header title="Employee Management" subtitle="List of Employees" />
      </Box>
      <Box m="40px 0 0 0" height="75vh">
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center">{error}</Typography>
        ) : (
          <DataGrid
            rows={employees}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 25]}
            checkboxSelection
            disableSelectionOnClick
            getRowId={(row) => row._id}
          />
        )}
      </Box>
    </Box>
  );
};

export default EmployeeDataGrid;
