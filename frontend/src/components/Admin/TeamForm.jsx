import React from 'react';
import { Box, Button, TextField, Rating } from '@mui/material';
import { Formik } from "formik";
import * as yup from 'yup';
import { useMediaQuery } from "@mui/material";
import Header from './Header';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { createTeamMember } from "../../redux/admin/slice/teamSlice";
import { toast } from "react-toastify";

const Input = styled('input')({
    display: 'none',
});

const CircularButton = styled(Button)(({ theme }) => ({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const TeamForm = () => {
    const dispatch = useDispatch();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const handleFormSubmit = async (values) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('role', values.role);
        formData.append('contactInfo[email]', values.email); 
        formData.append('contactInfo[phone]', values.contact);
        formData.append('contactInfo[location]', values.location);
        formData.append('bio', values.bio);
        formData.append('image', values.image);
        formData.append('rating', values.rating);
        formData.append('socialMedia[instagram]', values.instagram);
        formData.append('socialMedia[facebook]', values.facebook);
        formData.append('socialMedia[twitter]', values.twitter);
        formData.append('socialMedia[linkedin]', values.linkedin);
        console.log([...formData]);
        try {
            const resultAction = await dispatch(createTeamMember(formData));
            if (createTeamMember.fulfilled.match(resultAction)) {
                toast.success('Team member created successfully!');
            } else {
                toast.error(resultAction.payload || 'Failed to create team member');
            }
        } catch (error) {
            console.error(error);
            toast.error('An unexpected error occurred.');
        }
    };
    
    

    const initialValues = {
        name: "",
        role: "",
        email: "",
        contact: "",
        location: "",
        bio: "",
        image: null,
        rating: null,
        instagram: "",
        facebook: "",
        twitter: "",
        linkedin: "",
    };

    const checkoutSchema = yup.object().shape({
        name: yup.string().required("Required"),
        role: yup.string().required("Required"),
        email: yup.string().email("Invalid email!").required("Required"),
        contact: yup.string().matches(phoneRegExp, "Phone number is not valid!").required("Required"),
        location: yup.string().required("Required"),
        bio: yup.string().required("Required"),
        image: yup.mixed().required("Image file is required"),
        rating: yup.number().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5").required("Required"),
        instagram: yup.string().url("Must be a valid URL"),
        facebook: yup.string().url("Must be a valid URL"),
        twitter: yup.string().url("Must be a valid URL"),
        linkedin: yup.string().url("Must be a valid URL"),
    });

    return (
        <Box m="20px">
            <Box textAlign="left">
                <Header title="CREATE TEAM MEMBER" subtitle="Create a New Team Member Profile" />
            </Box>

            <Formik
                initialValues={initialValues}
                validationSchema={checkoutSchema}
                onSubmit={handleFormSubmit}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
                    <form onSubmit={handleSubmit} action="/upload-image" method="POST" enctype="multipart/form-data">
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                                error={!!touched.name && !!errors.name}
                                helperText={touched.name && errors.name}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Role"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.role}
                                name="role"
                                error={!!touched.role && !!errors.role}
                                helperText={touched.role && errors.role}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Location"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.location}
                                name="location"
                                error={!!touched.location && !!errors.location}
                                helperText={touched.location && errors.location}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Bio"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.bio}
                                name="bio"
                                error={!!touched.bio && !!errors.bio}
                                helperText={touched.bio && errors.bio}
                                sx={{ gridColumn: "span 4" }}
                            />

                            {/* Social Media Links */}
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Instagram URL"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.instagram}
                                name="instagram"
                                error={!!touched.instagram && !!errors.instagram}
                                helperText={touched.instagram && errors.instagram}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Facebook URL"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.facebook}
                                name="facebook"
                                error={!!touched.facebook && !!errors.facebook}
                                helperText={touched.facebook && errors.facebook}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Twitter URL"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.twitter}
                                name="twitter"
                                error={!!touched.twitter && !!errors.twitter}
                                helperText={touched.twitter && errors.twitter}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="LinkedIn URL"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.linkedin}
                                name="linkedin"
                                error={!!touched.linkedin && !!errors.linkedin}
                                helperText={touched.linkedin && errors.linkedin}
                                sx={{ gridColumn: "span 2" }}
                            />
                            
                            {/* Custom Circular File Input */}
                            <label htmlFor="image">
    <Input
        accept="image/*"
        id="image"
        type="file"
        onChange={(event) => {
            const file = event.currentTarget.files[0];
            setFieldValue("image", file);
            console.log('Selected file:', file); 
        }}
    />
    <CircularButton variant="contained" component="span">
        Upload
    </CircularButton>
</label>
                            {errors.image && touched.image && <div style={{ color: 'red' }}>{errors.image}</div>}

                            {/* Rating Field */}
                            <Box sx={{ gridColumn: "span 4", display: "flex", alignItems: "center" }}>
                                <label style={{ fontSize: "1rem", marginRight: "10px" }}>Rating:</label>
                                <Rating
                                    name="rating"
                                    value={values.rating}
                                    onChange={(event, newValue) => {
                                        setFieldValue("rating", newValue);
                                    }}
                                />
                                {errors.rating && touched.rating && <div style={{ color: 'red' }}>{errors.rating}</div>}
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create New Team Member
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default TeamForm;
