import React, { useEffect } from 'react';
import { Box, useTheme ,IconButton} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from './Header';
import { tokens } from '../../theme';
import { fetchFeedbacks,deleteFeedback } from "../../redux/slices/feedbackSlice"; 
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

import { toast } from 'react-toastify';

const FeedbackInformation = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch();
    const { loading, feedbacks, error } = useSelector((state) => state.feedback);

    useEffect(() => {
        dispatch(fetchFeedbacks());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteFeedback(id))
        .then(() => {
            toast.success("Feedback deleted successfully!");
        })
    };

    const columns = [
        { field: "_id", headerName: "ID", flex: 0.5 },
        { field: "name", headerName: "Name", flex: 1 },
        // { field: "email", headerName: "Email", flex: 1 },
        { field: "message", headerName: "Feedback", flex: 2 },
        { field: "rating", headerName: "Rating", flex: 0.5 },
        // { field: "prodSer", headerName: "Product/Service", flex: 1 },
        // { field: "improve", headerName: "Improvements", flex: 1 },
        { field: "recommend", headerName: "Recommend", flex: 0.5, renderCell: (params) => (params.value ? "Yes" : "No") },
        { field: "additional", headerName: "Additional Comments", flex: 2 },
        // { field: "date", headerName: "Date", flex: 1 },
        {
            field: "action",
            headerName: "Action",
            flex: 0.5,
            renderCell: (params) => (
                <IconButton 
                    onClick={() => handleDelete(params.row._id)} 
                    color="error"
                >
                    <DeleteIcon />
                </IconButton>
            ),
        },
    ];

    if (loading) return <Box>Loading...</Box>;
    if (error) return <Box>Error: {error}</Box>;

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="flex-start" alignItems="left" textAlign="left">
                <Header title="FEEDBACK" subtitle="List of Feedbacks from Users" />
            </Box>
            <Box m="40px 0 0 0" height="75vh">
                <DataGrid 
                    rows={feedbacks} 
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    getRowId={(row) => row._id}
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
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
                    }}
                />
            </Box>
        </Box>
    );
};

export default FeedbackInformation;
