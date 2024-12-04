import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Avatar,
} from '@mui/material';
import Header from './Header';

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    jobTitle: '',
    position: '',
    department: '',
    salary: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Data:', employeeData);
    // You can send employeeData to your API here
  };

  return (
    <Box m={"20px"}>
      <Box textAlign="left">
        <Header title="CREATE EMPLOYEE" subtitle="Create a New Employee Profile" />
      </Box>
      <Box display="flex" justifyContent="center" mb={2}>
        <Avatar sx={{ bgcolor: 'primary.main' }}>E</Avatar>
      </Box>
      <Typography variant="h4" align="center" gutterBottom>
        Employee Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              label="First Name"
              name="firstName"
              value={employeeData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              label="Last Name"
              name="lastName"
              value={employeeData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Email"
              name="email"
              value={employeeData.email}
              onChange={handleChange}
              fullWidth
              required
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Phone"
              name="phone"
              value={employeeData.phone}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              label="Date of Birth"
              name="dateOfBirth"
              value={employeeData.dateOfBirth}
              onChange={handleChange}
              fullWidth
              required
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              label="Job Title"
              name="jobTitle"
              value={employeeData.jobTitle}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Position"
              name="position"
              value={employeeData.position}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Department"
              name="department"
              value={employeeData.department}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Salary"
              name="salary"
              value={employeeData.salary}
              onChange={handleChange}
              fullWidth
              required
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              label="Street"
              name="street"
              value={employeeData.address.street}
              onChange={handleAddressChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              label="City"
              name="city"
              value={employeeData.address.city}
              onChange={handleAddressChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              label="State"
              name="state"
              value={employeeData.address.state}
              onChange={handleAddressChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              label="Zip Code"
              name="zip"
              value={employeeData.address.zip}
              onChange={handleAddressChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EmployeeForm;
