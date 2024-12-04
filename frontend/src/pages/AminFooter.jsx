import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const AdminFooter = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#282c34',
                color: '#fff',
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
        >
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </Typography>
            <Box>
                <Link href="/privacy" color="inherit" sx={{ marginRight: 2 }}>
                    Privacy Policy
                </Link>
                <Link href="/terms" color="inherit">
                    Terms of Service
                </Link>
            </Box>
        </Box>
    );
};

export default AdminFooter;
