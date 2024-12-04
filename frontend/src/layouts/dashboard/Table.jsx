import React, { useState } from 'react';
import { Box, useTheme, IconButton, Modal, TextField, Button, Typography } from '@mui/material';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import ViewIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const EmployeeTable = ({ filterCategory, searchQuery }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column-cell" },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        {
            field: "actions",
            headerName: "Actions",
            flex: 1,
            renderCell: (params) => (
                <Box display="flex" justifyContent="space-between" width="100%">
                    <IconButton aria-label="view employee" color="secondary" onClick={() => handleView(params.row)}>
                        <ViewIcon fontSize='small' />
                    </IconButton>
                    <IconButton aria-label="edit employee" color="success" onClick={() => handleEdit(params.row)}>
                        <EditIcon fontSize='small' />
                    </IconButton>
                    <IconButton aria-label="delete employee" color="error" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },
    ];

    const filteredRows = mockDataTeam.filter((row) => {
        if (filterCategory === 'name') {
            return row.name.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (filterCategory === 'department') {
            return row.department && row.department.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (filterCategory === 'role') {
            return row.role && row.role.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return true; 
    });

    const handleView = (employee) => {
        setSelectedEmployee(employee);
        setViewModalOpen(true);
    };

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setEditModalOpen(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            console.log("Deleting employee with ID:", id);
           
        }
    };

    const closeViewModal = () => {
        setViewModalOpen(false);
        setSelectedEmployee(null);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
        setSelectedEmployee(null);
    };

    const handleEditSubmit = () => {
       
        console.log("Editing employee:", selectedEmployee);
        closeEditModal();
    };

    return (
        
        <Box m="20px">
            <Box m="40px 0 0 0" height="55vh">
                <DataGridPremium 
                    rows={filteredRows} 
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    aggregationModel={{}} 
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                        },
                        "& .name-column-cell": {
                            color: colors.greenAccent[300],
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.blueAccent[700],
                            borderBottom: "none",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: colors.primary[400],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none", 
                            backgroundColor: 'transparent', 
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                    }}
                />
            </Box>

            {/* View Modal */}
            <Modal open={viewModalOpen} onClose={closeViewModal}>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        height: '100vh', 
                        width: '100vw', 
                    }}
                >
                    <Box 
                        sx={{ 
                            padding: 4, 
                            backgroundColor: colors.primary[400], 
                            borderRadius: 2, 
                            display: 'flex', 
                            flexDirection: 'column',
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            height: '80vh', 
                            width: '600px',
                        }}
                    >
                        <Typography variant="h6" align="center">View Employee</Typography>
                        {selectedEmployee && (
                            <Box textAlign="center">
                                <Typography>ID: {selectedEmployee.id}</Typography>
                                <Typography>Name: {selectedEmployee.name}</Typography>
                                <Typography>Age: {selectedEmployee.age}</Typography>
                                <Typography>Email: {selectedEmployee.email}</Typography>
                                <Typography>Phone: {selectedEmployee.phone}</Typography>
                            </Box>
                        )}
                        <Button onClick={closeViewModal} color="error">Close</Button>
                    </Box>
                </Box>
            </Modal>

            {/* Edit Modal */}
            <Modal open={editModalOpen} onClose={closeEditModal}>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        height: '100vh', 
                        width: '100vw', 
                    }}
                >
                    <Box 
                        sx={{ 
                            padding: 4, 
                            backgroundColor: colors.primary[400], 
                            borderRadius: 2, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            height: '80vh', 
                            width: '600px',
                        }}
                    >
                        <Typography variant="h6" align="center">Edit Employee</Typography>
                        {selectedEmployee && (
                            <Box width="100%">
                                <TextField
                                    label="Name"
                                    defaultValue={selectedEmployee.name}
                                    fullWidth
                                    margin="normal"
                                    onChange={(e) => setSelectedEmployee({ ...selectedEmployee, name: e.target.value })}
                                    required
                                />
                                <TextField
                                    label="Age"
                                    type="number"
                                    defaultValue={selectedEmployee.age}
                                    fullWidth
                                    margin="normal"
                                    onChange={(e) => setSelectedEmployee({ ...selectedEmployee, age: Number(e.target.value) })}
                                    required
                                />
                                <TextField
                                    label="Email"
                                    defaultValue={selectedEmployee.email}
                                    fullWidth
                                    margin="normal"
                                    onChange={(e) => setSelectedEmployee({ ...selectedEmployee, email: e.target.value })}
                                    required
                                />
                                <TextField
                                    label="Phone"
                                    defaultValue={selectedEmployee.phone}
                                    fullWidth
                                    margin="normal"
                                    onChange={(e) => setSelectedEmployee({ ...selectedEmployee, phone: e.target.value })}
                                    required
                                />
                            </Box>
                        )}
                        <Button onClick={handleEditSubmit} color="success">Save</Button>
                        <Button onClick={closeEditModal} color="error">Cancel</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default EmployeeTable;
