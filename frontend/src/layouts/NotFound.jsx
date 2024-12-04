// src/components/NotFound.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh" 
      textAlign="center"
    >
      <SentimentDissatisfiedIcon fontSize="large" color="warning" />
      <Typography variant="h1" component="h2" color="error">
        404
      </Typography>
      <Typography variant="h4" mt={2}>
        Page Not Found
      </Typography>
      <Button 
        variant="contained" 
        onClick={() => navigate('/')}
        sx={{ 
          marginTop: '20px', 
          backgroundColor: 'black', 
          borderRadius: '20%', 
          padding: '10px 20px', 
          '&:hover': {
            backgroundColor: 'grey' 
          }
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
