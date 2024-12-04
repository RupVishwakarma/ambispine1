import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamMembers, deleteTeamMember, updateTeamMember } from '../../redux/admin/slice/teamSlice';
import Header from './Header';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
import { tokens } from '../../theme';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch();
    const { teamMembers, loading } = useSelector(state => state.team); 
    const [open, setOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        dispatch(fetchTeamMembers());
    }, [dispatch]);

    const handleEdit = (member) => {
        setSelectedMember(member);
        setOpen(true);
    };

    const handleDelete = async (id) => {
        try {
            await dispatch(deleteTeamMember(id));
            toast.success('Team member deleted successfully!');
        } catch (error) {
            toast.error('Failed to delete team member.');
            console.error(error);
        }
    };

    const handleSave = async () => {
        if (selectedMember) {
            const { _id, ...updatedMember } = selectedMember; 
            try {
                const resultAction = await dispatch(updateTeamMember({ id: _id, updatedMember }));
                if (updateTeamMember.fulfilled.match(resultAction)) {
                    toast.success('Team member updated successfully!');
                    setOpen(false);
                } else {
                    toast.error(resultAction.payload || 'Failed to update team member');
                }
            } catch (error) {
                console.error(error);
                toast.error('An unexpected error occurred while updating the team member.');
            }
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedMember({ ...selectedMember, image: file });
    };

    const columns = [
        { field: "name", headerName: "Name", flex: 0.5, cellClassName: "name-column-cell" },
        { field: "role", headerName: "Role", flex: 1 },
        { field: "rating", headerName: "Rating", flex: 1 },
        {
            field: "dateJoined",
            headerName: "Joining Date",
            flex: 1,
        },{
            field: "actions",
            headerName: "Actions",
            flex: 1,
            renderCell: (params) => (
                <Box display="flex" gap={1}>
                    <IconButton color="success" onClick={() => handleEdit(params.row)}>
                        <UpdateIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(params.row._id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },
    ];

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="flex-start">
                <Header title="TEAM" subtitle="Managing the Team Members" />
            </Box>
            <Box m="40px 0 0 0" height="75vh">
                {loading ? (
                    <Typography variant="h6">Loading...</Typography>
                ) : (
                    <DataGrid
                        rows={teamMembers}
                        columns={columns}
                        pageSize={20}
                        checkboxSelection
                        getRowId={(row) => row._id}
                    />
                )}
                <Dialog open={open} 
                onClose={() => setOpen(false)} 
                    PaperProps={{
                        sx: { backgroundColor: colors.primary[600] },
                    }}    
                >
                    <DialogTitle sx={{ fontWeight: 'bold', color: 'green',fontSize:"1.5rem" }}>
                        Edit Team Member
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Name"
                            type="text"
                            fullWidth
                            value={selectedMember?.name || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, name: e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            label="Role"
                            type="text"
                            fullWidth
                            value={selectedMember?.role || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, role: e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            label="Email"
                            type="email"
                            fullWidth
                            value={selectedMember?.contactInfo?.email || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, contactInfo: { ...selectedMember.contactInfo, email: e.target.value } })}
                        />
                        <TextField
                            margin="dense"
                            label="Phone"
                            type="text"
                            fullWidth
                            value={selectedMember?.contactInfo?.phone || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, contactInfo: { ...selectedMember.contactInfo, phone: e.target.value } })}
                        />
                        <TextField
                            margin="dense"
                            label="Location"
                            type="text"
                            fullWidth
                            value={selectedMember?.contactInfo?.location || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, contactInfo: { ...selectedMember.contactInfo, location: e.target.value } })}
                        />
                        <TextField
                            margin="dense"
                            label="Bio"
                            type="text"
                            fullWidth
                            value={selectedMember?.bio || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, bio: e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            label="Instagram URL"
                            type="url"
                            fullWidth
                            value={selectedMember?.socialMedia?.instagram || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, socialMedia: { ...selectedMember.socialMedia, instagram: e.target.value } })}
                        />
                        <TextField
                            margin="dense"
                            label="Facebook URL"
                            type="url"
                            fullWidth
                            value={selectedMember?.socialMedia?.facebook || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, socialMedia: { ...selectedMember.socialMedia, facebook: e.target.value } })}
                        />
                        <TextField
                            margin="dense"
                            label="Twitter URL"
                            type="url"
                            fullWidth
                            value={selectedMember?.socialMedia?.twitter || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, socialMedia: { ...selectedMember.socialMedia, twitter: e.target.value } })}
                        />
                        <TextField
                            margin="dense"
                            label="LinkedIn URL"
                            type="url"
                            fullWidth
                            value={selectedMember?.socialMedia?.linkedin || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, socialMedia: { ...selectedMember.socialMedia, linkedin: e.target.value } })}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ marginTop: 16 }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="error" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button color="success" onClick={handleSave}>Save</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    );
};

export default Team;
