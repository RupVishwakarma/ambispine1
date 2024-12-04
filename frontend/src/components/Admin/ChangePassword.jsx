import React, { useState, useCallback } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
  LinearProgress,
} from '@mui/material';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/admin/slice/authSlice'; 
import { toast } from 'react-toastify'; 
import { Navigate } from 'react-router-dom'; 

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { isAuthenticated, error: authError, loading: authLoading } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    toast.error("Please login to access this resource."); 
    return <Navigate to="/" />; 
  }

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      toast.error("New passwords don't match!"); 
      return;
    }

    const passwordData = { oldPassword, newPassword };
    const resultAction = await dispatch(changePassword(passwordData));

    if (changePassword.fulfilled.match(resultAction)) {
      toast.success('Password changed successfully!'); 
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } else {
      toast.error(authError || 'Failed to change password. Please try again.'); 
    }
  }, [dispatch, oldPassword, newPassword, confirmNewPassword, authError]);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box sx={{ p: 4, backgroundColor: colors.primary[400], borderRadius: "4px" }} m="40px 0 0 0" height="75vh">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: colors.primary[700], color: colors.grey[100] }}>
            <LockResetIcon />
          </Avatar>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            Change Password
          </Typography>

          {authLoading && <LinearProgress sx={{ width: '100%', mb: 2 }} />}
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              required
              fullWidth
              label="Current Password"
              type="password"
              variant="outlined"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              sx={{ mb: 2 }}
              aria-label="Current Password"
            />
            <TextField
              required
              fullWidth
              label="New Password"
              type="password"
              variant="outlined"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              sx={{ mb: 2 }}
              aria-label="New Password"
            />
            <TextField
              required
              fullWidth
              label="Confirm New Password"
              type="password"
              variant="outlined"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              sx={{ mb: 2 }}
              aria-label="Confirm New Password"
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ mt: 2 }}
              fullWidth
              disabled={authLoading}
            >
              {authLoading ? 'Changing...' : 'Change Password'}
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default ChangePassword;
