import React, { useState } from 'react';
import { Box, Typography, FormControl, Select, MenuItem, FormHelperText, TextField, Grid } from '@mui/material';
import EmployeeTable from './Table';
import { useTheme} from '@emotion/react';
import { tokens } from '../../theme';
import { useMediaQuery } from '@mui/material'; 

const BestEmployee = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm')); 
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md')); 

  const [filterCategory, setFilterCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box
      backgroundColor={colors.primary[400]}
      p={isSmScreen ? '20px' : '30px'}
      mt={isSmScreen ? '20px' : '40px'}
      height={isMdScreen ? 'auto' : '550px'}
    >
      <Typography
        variant={isSmScreen ? 'h4' : 'h3'}
        textAlign="left"
        fontWeight="600"
        color={colors.grey[100]}
      >
        Best Employee of The Year
      </Typography>

      <Grid container spacing={2} mt={2}>
        {/* Filter Category Select */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <Select
              value={filterCategory}
              onChange={handleCategoryChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Show By Category' }}
            >
              <MenuItem value="">
                <em>Show By Category</em>
              </MenuItem>
              <MenuItem value="name">By Name</MenuItem>
              <MenuItem value="department">By Department</MenuItem>
              <MenuItem value="role">By Role</MenuItem>
            </Select>
            <FormHelperText>Filter Category</FormHelperText>
          </FormControl>
        </Grid>

        {/* Search by Name */}
        <Grid item xs={12} sm={6} md={8}>
          <TextField
            fullWidth
            label="Search By Name"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Grid>
      </Grid>

      {/* Employee Table */}
      <Box mt={isSmScreen ? '20px' : '30px'}>
        <EmployeeTable filterCategory={filterCategory} searchQuery={searchQuery} />
      </Box>
    </Box>
  );
};

export default BestEmployee;
