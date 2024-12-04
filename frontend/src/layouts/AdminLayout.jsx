import React from 'react';
import './AdminLayout.css';
import HeaderComponent from '../layouts/global/Header';
import { MyProSidebarProvider } from '../layouts/global/sidebarContext';
import { tokens } from '../theme';
import { useTheme, Box } from '@mui/material';

const AdminLayout = ({ children }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MyProSidebarProvider>
            <div className="admin-layout" style={{ height: "100%", width: "100%", display: 'flex', flexDirection: 'column' }}>
                <HeaderComponent />
                <Box 
                    component="main" 
                    className="main-content" 
                    sx={{
                        flexGrow: 1,
                        bgcolor: colors.primary[900], 
                        color: colors.grey[100], 
                        padding: '16px' 
                    }}
                >
                    {children}
                </Box>
            </div>
        </MyProSidebarProvider>
    );
};

export default AdminLayout;
