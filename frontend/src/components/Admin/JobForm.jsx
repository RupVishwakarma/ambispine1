// import React from 'react';
// import {
//     Box,
//     Button,
//     TextField,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     useMediaQuery
// } from '@mui/material';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import Header from './Header';
// import { addCareer } from '../../redux/admin/slice/careerAdminSlice';
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';

// const JobForm = () => {
//     const isNonMobile = useMediaQuery('(min-width:600px)');
//     const dispatch = useDispatch();

//     const initialValues = {
//         jobTitle: '',
//         jobDescription: '',
//         department: '',
//         location: '',
//         employmentType: '',
//         interviewProcess: '',
//         salaryRange: '',
//         requirements: {
//             education: '',
//             skills: '',
//             experience: ''
//         },
//         responsibilities: '',
//         postingDate: '',
//         closingDate: '',
//         companyOverview: '',
//         benefits: '',
//         preferredQualifications: '',
//         jobCategory: '',
//         openings: 0,  // Change to number
//     };

//     const validationSchema = yup.object().shape({
//         jobTitle: yup.string().required('Job Title is required'),
//         jobDescription: yup.string().required('Job Description is required'),
//         department: yup.string().required('Department is required'),
//         location: yup.string().required('Location is required'),
//         employmentType: yup.string().required('Employment Type is required'),
//         interviewProcess: yup.string().required('Interview Process is required'),
//         salaryRange: yup.string().required('Salary Range is required'),
//         requirements: yup.object().shape({
//             education: yup.string().required('Education Requirement is required'),
//             skills: yup.string().required('Skills are required'),
//             experience: yup.string().required('Experience Requirement is required')
//         }),
//         responsibilities: yup.string().required('Responsibilities are required'),
//         postingDate: yup.date().required('Posting Date is required').nullable(),
//         closingDate: yup.date().required('Closing Date is required').nullable(),
//         companyOverview: yup.string().required('Company Overview is required'),
//         benefits: yup.string().required('Benefits are required'),
//         preferredQualifications: yup.string(),
//         jobCategory: yup.string().required('Job Category is required'),
//         openings: yup.number().required('Number of openings is required').positive().integer(),
//     });

//     const handleFormSubmit = async (values) => {
//         const formattedValues = {
//             ...values,
//             openings: parseInt(values.openings, 10),  
//             requirements: {
//                 ...values.requirements,
//                 skills: values.requirements.skills.split(',').map(skill => skill.trim()),  
//             },
//             responsibilities: values.responsibilities.split(',').map(res => res.trim()),  
//             benefits: values.benefits.split(',').map(benefit => benefit.trim()),  
//             preferredQualifications: values.preferredQualifications.split(',').map(q => q.trim()),  
//         };

//         console.log('Submitting form with values:', formattedValues);  
//         try {
//             await dispatch(addCareer(formattedValues));
//             toast.success('Job posted successfully!');
//         } catch (error) {
//             console.error('Error posting job:', error);
//             toast.error('Error posting job. Please try again.');
//         }
//     };

//     return (
//         <Box m="20px">
//             <Box textAlign="left">
//                 <Header title="CREATE JOB" subtitle="Create a New Job Posting" />
//             </Box>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={handleFormSubmit}
//             >
//                 {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
//                     <form onSubmit={handleSubmit}>
//                         <Box
//                             display="grid"
//                             gap="30px"
//                             gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//                             sx={{
//                                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//                             }}
//                         >
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Job Title"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.jobTitle}
//                                 name="jobTitle"
//                                 error={touched.jobTitle && !!errors.jobTitle}
//                                 helperText={touched.jobTitle && errors.jobTitle}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Job Description"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.jobDescription}
//                                 name="jobDescription"
//                                 error={touched.jobDescription && !!errors.jobDescription}
//                                 helperText={touched.jobDescription && errors.jobDescription}
//                                 sx={{ gridColumn: "span 4" }}
//                                 multiline
//                                 rows={4}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Department"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.department}
//                                 name="department"
//                                 error={touched.department && !!errors.department}
//                                 helperText={touched.department && errors.department}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Location"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.location}
//                                 name="location"
//                                 error={touched.location && !!errors.location}
//                                 helperText={touched.location && errors.location}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 4" }}>
//                                 <InputLabel>Employment Type</InputLabel>
//                                 <Select
//                                     name="employmentType"
//                                     value={values.employmentType}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     error={touched.employmentType && !!errors.employmentType}
//                                 >
//                                     <MenuItem value=""><em>None</em></MenuItem>
//                                     <MenuItem value="Full-time">Full-time</MenuItem>
//                                     <MenuItem value="Part-time">Part-time</MenuItem>
//                                     <MenuItem value="Contract">Contract</MenuItem>
//                                     <MenuItem value="Internship">Internship</MenuItem>
//                                 </Select>
//                             </FormControl>
//                             <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 4" }}>
//                                 <InputLabel>Interview Process</InputLabel>
//                                 <Select
//                                     name="interviewProcess"
//                                     value={values.interviewProcess}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     error={touched.interviewProcess && !!errors.interviewProcess}
//                                 >
//                                     <MenuItem value=""><em>None</em></MenuItem>
//                                     <MenuItem value="Phone Interview">Phone Interview</MenuItem>
//                                     <MenuItem value="In-Person Interview">In-Person Interview</MenuItem>
//                                     <MenuItem value="Panel Interview">Panel Interview</MenuItem>
//                                     <MenuItem value="Technical Interview">Technical Interview</MenuItem>
//                                 </Select>
//                             </FormControl>
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Salary Range"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.salaryRange}
//                                 name="salaryRange"
//                                 error={touched.salaryRange && !!errors.salaryRange}
//                                 helperText={touched.salaryRange && errors.salaryRange}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Education Requirement"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.requirements.education}
//                                 name="requirements.education"
//                                 error={touched.requirements?.education && !!errors.requirements?.education}
//                                 helperText={touched.requirements?.education && errors.requirements?.education}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Skills (comma separated)"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.requirements.skills}
//                                 name="requirements.skills"
//                                 error={touched.requirements?.skills && !!errors.requirements?.skills}
//                                 helperText={touched.requirements?.skills && errors.requirements?.skills}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Experience Requirement"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.requirements.experience}
//                                 name="requirements.experience"
//                                 error={touched.requirements?.experience && !!errors.requirements?.experience}
//                                 helperText={touched.requirements?.experience && errors.requirements?.experience}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Responsibilities"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.responsibilities}
//                                 name="responsibilities"
//                                 error={touched.responsibilities && !!errors.responsibilities}
//                                 helperText={touched.responsibilities && errors.responsibilities}
//                                 sx={{ gridColumn: "span 4" }}
//                                 multiline
//                                 rows={4}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Posting Date"
//                                 type="date"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.postingDate}
//                                 name="postingDate"
//                                 error={touched.postingDate && !!errors.postingDate}
//                                 helperText={touched.postingDate && errors.postingDate}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Closing Date"
//                                 type="date"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.closingDate}
//                                 name="closingDate"
//                                 error={touched.closingDate && !!errors.closingDate}
//                                 helperText={touched.closingDate && errors.closingDate}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Company Overview"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.companyOverview}
//                                 name="companyOverview"
//                                 error={touched.companyOverview && !!errors.companyOverview}
//                                 helperText={touched.companyOverview && errors.companyOverview}
//                                 sx={{ gridColumn: "span 4" }}
//                                 multiline
//                                 rows={4}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Benefits (comma separated)"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.benefits}
//                                 name="benefits"
//                                 error={touched.benefits && !!errors.benefits}
//                                 helperText={touched.benefits && errors.benefits}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Openings"
//                                 type="number"  // Change to number input
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.openings}
//                                 name="openings"
//                                 error={touched.openings && !!errors.openings}
//                                 helperText={touched.openings && errors.openings}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Preferred Qualifications"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.preferredQualifications}
//                                 name="preferredQualifications"
//                                 error={touched.preferredQualifications && !!errors.preferredQualifications}
//                                 helperText={touched.preferredQualifications && errors.preferredQualifications}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 label="Job Category"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.jobCategory}
//                                 name="jobCategory"
//                                 error={touched.jobCategory && !!errors.jobCategory}
//                                 helperText={touched.jobCategory && errors.jobCategory}
//                                 sx={{ gridColumn: "span 4" }}
//                             />
//                         </Box>
//                         <Box display="flex" justifyContent="end" mt="20px">
//                             <Button type="submit" color="secondary" variant="contained">
//                                 Create Job
//                             </Button>
//                         </Box>
//                     </form>
//                 )}
//             </Formik>
//         </Box>
//     );
// };

// export default JobForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCareer } from '../../redux/admin/slice/careerAdminSlice';
import {
    TextField,
    Button,
    Box,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Grid,
    Typography,
    useMediaQuery
} from '@mui/material';
import { toast } from 'react-toastify'; 
import Header from './Header';
const JobForm = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const dispatch = useDispatch();
    const [jobData, setJobData] = useState({
        jobTitle: '',
        jobDescription: '',
        department: '',
        location: '',
        employmentType: '',
        interviewProcess: '',
        salaryRange: '',
        requirements: {
            education: '',
            skills: [],
            experience: '',
        },
        openings: '',
        responsibilities: [],
        openingDate: '',
        closingDate: '',
        companyOverview: '',
        benefits: [],
        preferredQualifications: [],
        jobCategory: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('requirements.')) {
            const subKey = name.split('.')[1];
            setJobData((prevData) => ({
                ...prevData,
                requirements: {
                    ...prevData.requirements,
                    [subKey]: value,
                },
            }));
        } else if (name === 'skills') {
            const skills = value.split(',').map(skill => skill.trim());
            setJobData((prevData) => ({
                ...prevData,
                requirements: {
                    ...prevData.requirements,
                    skills,
                },
            }));
        } else if (name === 'responsibilities') {
            const responsibilities = value.split(',').map(resp => resp.trim());
            setJobData((prevData) => ({
                ...prevData,
                responsibilities,
            }));
        } else if (name === 'benefits') {
            const benefits = value.split(',').map(ben => ben.trim());
            setJobData((prevData) => ({
                ...prevData,
                benefits,
            }));
        } else if (name === 'preferredQualifications') {
            const qualifications = value.split(',').map(qual => qual.trim());
            setJobData((prevData) => ({
                ...prevData,
                preferredQualifications: qualifications,
            }));
        } else {
            setJobData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCareer(jobData))
            .unwrap()
            .then(() => {
                toast.success("Job posting created successfully!"); // Success toast
                // Reset the form
                setJobData({
                    jobTitle: '',
                    jobDescription: '',
                    department: '',
                    location: '',
                    employmentType: '',
                    interviewProcess: '',
                    salaryRange: '',
                    requirements: {
                        education: '',
                        skills: [],
                        experience: '',
                    },
                    openings: '',
                    responsibilities: [],
                    openingDate: '',
                    closingDate: '',
                    companyOverview: '',
                    benefits: [],
                    preferredQualifications: [],
                    jobCategory: '',
                });
            })
            .catch((error) => {
                toast.error(`Failed to create job posting: ${error.message}`); // Error toast
            });
    };

    return (
        <Box m="20px">
         <Box textAlign="left">
            <Header title="CREATE JOB" subtitle="Create a New Job Posting" />
          </Box>
         <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Job Title"
                        name="jobTitle"
                        value={jobData.jobTitle}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Job Description"
                        name="jobDescription"
                        value={jobData.jobDescription}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Department"
                        name="department"
                        value={jobData.department}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Location"
                        name="location"
                        value={jobData.location}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                        <InputLabel>Employment Type</InputLabel>
                        <Select
                            name="employmentType"
                            value={jobData.employmentType}
                            onChange={handleChange}
                            variant="filled"
                        >
                            <MenuItem value="Full-time">Full-time</MenuItem>
                            <MenuItem value="Part-time">Part-time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                            <MenuItem value="Temporary">Temporary</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                        <InputLabel>Interview Process</InputLabel>
                        <Select
                            name="interviewProcess"
                            value={jobData.interviewProcess}
                            onChange={handleChange}
                             variant="filled"
                        >
                            <MenuItem value="Phone Screen">Phone Screen</MenuItem>
                            <MenuItem value="On-site Interview">On-site Interview</MenuItem>
                            <MenuItem value="Technical Interview">Technical Interview</MenuItem>
                            <MenuItem value="Final Interview">Final Interview</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Salary Range"
                        name="salaryRange"
                        value={jobData.salaryRange}
                        onChange={handleChange}
                        required
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Education Requirement"
                        name="requirements.education"
                        value={jobData.requirements.education}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Skills (comma separated)"
                        name="skills"
                        value={jobData.requirements.skills.join(', ')}
                        onChange={handleChange}
                        required
                         variant="filled"
                         rows={2}
                         multiline
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Experience (optional)"
                        name="requirements.experience"
                        value={jobData.requirements.experience}
                        onChange={handleChange}
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Openings"
                        type="number"
                        name="openings"
                        value={jobData.openings}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Responsibilities (comma separated)"
                        name="responsibilities"
                        value={jobData.responsibilities.join(', ')}
                        onChange={handleChange}
                        required
                         variant="filled"
                         rows={4}
                         multiline
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Opening Date"
                        type="date"
                        name="openingDate"
                        value={jobData.openingDate}
                        onChange={handleChange}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Closing Date"
                        type="date"
                        name="closingDate"
                        value={jobData.closingDate}
                        onChange={handleChange}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Company Overview"
                        name="companyOverview"
                        value={jobData.companyOverview}
                        onChange={handleChange}
                        required
                         variant="filled"
                         rows={4}
                         multiline
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Benefits (comma separated)"
                        name="benefits"
                        value={jobData.benefits.join(', ')}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Preferred Qualifications (comma separated)"
                        name="preferredQualifications"
                        value={jobData.preferredQualifications.join(', ')}
                        onChange={handleChange}
                        required
                         variant="filled"
                         rows={4}
                         multiline
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Job Category"
                        name="jobCategory"
                        value={jobData.jobCategory}
                        onChange={handleChange}
                        required
                         variant="filled"
                    />
                </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="success" style={{ marginTop: '16px' }}>
                Submit Job Posting
            </Button>
        </form>
       </Box>
    );
};

export default JobForm;

