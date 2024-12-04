import React from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import Header from './Header';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';

const Invoice = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column-cell" },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "salary", headerName: "Salary", flex: 1 },
        { field: "city", headerName: "City", flex: 1 },
        {
            field: "joinDate",
            headerName: "Joining Date",
            flex: 1,
            type: "date",
            valueGetter: (params) => {
                return new Date(params?.row?.joinDate);
            },
        }
    ];
    

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="flex-start" alignItems="flex-start" textAlign="left">
                <Header title="INVOICES" subtitle="Manage Your Invoices and Payments" />
            </Box>
            <Box m="40px 0 0 0" height="75vh">
                <DataGridPremium 
                    rows={mockDataTeam}
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
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
                            backgroundColor: colors.blueAccent[700],
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Invoice;
