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

const EmployeeInvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState({
    employee: '',
    invoiceNumber: '',
    invoiceDate: '',
    salary: '',
    status: 'Pending', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Invoice Data:', invoiceData);
    
  };

  return (
    <Box m={"20px"}>
      <Box textAlign="left">
        <Header title="CREATE INVOICE" subtitle="Create a New Employee Invoice" />
      </Box>
      <Box display="flex" justifyContent="center" mb={2}>
        <Avatar sx={{ bgcolor: 'primary.main' }}>I</Avatar>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Employee ID"
              name="employee"
              value={invoiceData.employee}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Invoice Number"
              name="invoiceNumber"
              value={invoiceData.invoiceNumber}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              label="Invoice Date"
              name="invoiceDate"
              value={invoiceData.invoiceDate}
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
              label="Salary"
              name="salary"
              value={invoiceData.salary}
              onChange={handleChange}
              fullWidth
              required
              type="number"
              min={0}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Status"
              name="status"
              value={invoiceData.status}
              onChange={handleChange}
              fullWidth
              select
              SelectProps={{
                native: true,
              }}
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
              <option value="Overdue">Overdue</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="warning" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EmployeeInvoiceForm;
