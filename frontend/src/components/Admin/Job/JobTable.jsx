import React, { useState } from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    useTheme,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { updateCareer,deleteCareer } from "../../../redux/admin/slice/careerAdminSlice";
import { toast } from 'react-toastify';
import { tokens } from '../../../theme';

const JobTable = ({ jobs,}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState({});
    const dispatch = useDispatch();
    console.log(formValues.id)
    const handleEditClick = (job) => {
        setFormValues({ ...job, requirements: { ...job.requirements } });
        setOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            await dispatch(updateCareer({ id: formValues.id, careerData: formValues }));
            toast.success('Job updated successfully!');
        } catch (error) {
            toast.error('Failed to update job: ' + error.message);
        } finally {
            setOpen(false);
            setFormValues({});
        }
    };
    const handleDelete = (id) => {
        if (id) {
            dispatch(deleteCareer(id)); 
            toast.success('Job deleted successfully!');
        } else {
            console.error('Invalid ID');
            toast.error('Failed to delete job: Invalid ID');
        }
    };
    
    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        { field: 'jobTitle', headerName: 'Job Title', flex: 0.5 },
        { field: 'department', headerName: 'Department', flex: 0.5 },
        { field: 'location', headerName: 'Location', flex: 0.5 },
        { field: 'salaryRange', headerName: 'Salary Range', flex: 0.5 },
        { field: 'jobCategory', headerName: 'Job Category', flex: 0.5 },
        { field: 'employmentType', headerName: 'Employment Type', flex: 0.5 },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 0.5,
            renderCell: (params) => (
                <Box>
                    <Button onClick={() => handleEditClick(params.row)} color="secondary" size="small">
                        <UpdateIcon fontSize="small" />
                    </Button>
                    <Button onClick={() => handleDelete(params.row.id)} color="error" size="small">
                        <DeleteIcon fontSize="small" />
                    </Button>
                </Box>
            ),
        },
    ];

    return (
        <Box m="20px" height="75vh">
            <DataGrid
                rows={jobs}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5, 10, 20]}
                checkboxSelection
                disableSelectionOnClick
                autoHeight
                pagination
            />
            <Dialog open={open} onClose={() => setOpen(false)}
                 PaperProps={{
                    sx: { backgroundColor: colors.primary[600] },
                }} 
            >
                <DialogTitle sx={{ fontWeight: 'bold', color: 'green',fontSize:"1.5rem" }}>Edit Job</DialogTitle>
                <DialogContent>
                        
                            <TextField
                                fullWidth
                                margin="dense"
                                variant="filled"
                                label="Job Title"
                                onChange={handleChange}
                                value={formValues.jobTitle || ''}
                                name="jobTitle"
                            />
                            <TextField
                                fullWidth
                                margin="dense"
                                variant="filled"
                                label="Job Description"
                                onChange={handleChange}
                                value={formValues.jobDescription || ''}
                                name="jobDescription"
                                multiline
                                rows={4}
                            />
                            <TextField
                                fullWidth
                                margin="dense"
                                variant="filled"
                                label="Department"
                                onChange={handleChange}
                                value={formValues.department || ''}
                                name="department"
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                margin="dense"
                                label="Location"
                                onChange={handleChange}
                                value={formValues.location || ''}
                                name="location"
                            />
                            <FormControl fullWidth variant="filled">
                                <InputLabel>Employment Type</InputLabel>
                                <Select
                                    name="employmentType"
                                    value={formValues.employmentType || ''}
                                    onChange={handleChange}
                                    variant="filled"
                                >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value="Full-time">Full-time</MenuItem>
                                    <MenuItem value="Part-time">Part-time</MenuItem>
                                    <MenuItem value="Contract">Contract</MenuItem>
                                    <MenuItem value="Internship">Internship</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth variant="filled">
                                <InputLabel>Interview Process</InputLabel>
                                <Select
                                    name="employmentType"
                                    value={formValues.interviewProcess || ''}
                                    onChange={handleChange}
                                    variant="filled"
                                > <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value="Phone Screen">Phone Screen</MenuItem>
                            <MenuItem value="On-site Interview">On-site Interview</MenuItem>
                            <MenuItem value="Technical Interview">Technical Interview</MenuItem>
                            <MenuItem value="Final Interview">Final Interview</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                fullWidth
                                margin="dense"
                                variant="filled"
                                label="Salary Range"
                                onChange={handleChange}
                                value={formValues.salaryRange || ''}
                                name="salaryRange"
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                margin="dense"
                                label="Education Requirement"
                                onChange={handleChange}
                                value={formValues.requirements?.education || ''}
                                name="requirements.education"
                            />
                            <TextField
                                fullWidth
                                margin="dense"
                                variant="filled"
                                label="Skills (comma separated)"
                                onChange={handleChange}
                                value={formValues.requirements?.skills || ''}
                                name="requirements.skills"
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                margin="dense"
                                label="Experience Requirement"
                                onChange={handleChange}
                                value={formValues.requirements?.experience || ''}
                                name="requirements.experience"
                            />
                            <TextField
                                fullWidth
                                margin="dense"
                                variant="filled"
                                label="Responsibilities"
                                onChange={handleChange}
                                value={formValues.responsibilities || ''}
                                name="responsibilities"
                                multiline
                                rows={4}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                margin="dense"
                                label="Closing Date"
                                type="date"
                                onChange={handleChange}
                                value={formValues.closingDate || ''}
                                name="closingDate"
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                margin="dense"
                                label="Company Overview"
                                onChange={handleChange}
                                value={formValues.companyOverview || ''}
                                name="companyOverview"
                                multiline
                                rows={4}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                margin="dense"
                                label="Benefits (comma separated)"
                                onChange={handleChange}
                                value={formValues.benefits || ''}
                                name="benefits"
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                margin="dense"
                                label="Openings"
                                onChange={handleChange}
                                value={formValues.openings|| ''}
                                name="openings"
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Preferred Qualifications"
                                onChange={handleChange}
                                value={formValues.preferredQualifications || ''}
                                name="preferredQualifications"
                                margin="dense"
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Job Category"
                                onChange={handleChange}
                                value={formValues.jobCategory || ''}
                                name="jobCategory"
                                margin="dense"
                            />
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button color="success" onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default JobTable;
