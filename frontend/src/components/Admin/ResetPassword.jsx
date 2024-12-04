import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  LinearProgress,
} from '@mui/material';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      setSuccess('');
      return;
    }

    setLoading(true); 

    try {
      

      setSuccess('Password reset successfully!');
      setError('');
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false); 
      setPassword('');
      setConfirmPassword('');
    }
  };

  const passwordStrength = (password) => {
    const strength = password.length > 8 ? 'strong' : 'weak';
    return strength;
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }} >
      <Box sx={{ p: 4,backgroundColor:colors.primary[400],borderRadius:"4px" }} m="40px 0 0 0" height="75vh">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: colors.primary[700],color:colors.grey[100] }}>
            <LockResetIcon />
          </Avatar>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            Reset Password
          </Typography>

          {loading && <LinearProgress sx={{ width: '100%', mb: 2 }} />}
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              required
              fullWidth
              label="New Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" color={passwordStrength(password) === 'strong' ? 'success.main' : 'error.main'}>
              Password strength: {passwordStrength(password)}
            </Typography>
            <TextField
              required
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            {error && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}
            {success && (
              <Typography variant="body2" color="success.main" sx={{ mb: 2 }}>
                {success}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              fullWidth
              disabled={loading} 
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default ResetPassword;
