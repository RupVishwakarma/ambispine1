import React, { useContext, useState } from 'react';
import { Modal, Box, Typography, Button, TextField, Avatar, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles'; 
import { tokens } from '../../theme'; 
import { useNavigate } from 'react-router-dom'; 
import { MyContext } from '../../App';
import AdminSignupModal from './Signup';
import { useDispatch } from 'react-redux';
import { login } from "../../redux/admin/slice/authSlice";

const AdminModal = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const dispatch = useDispatch();
  const context = useContext(MyContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const username = event.target.username.value.trim();
    const password = event.target.password.value.trim();

    try {
      const action = await dispatch(login({ username, password }));
      if (login.fulfilled.match(action)) {
        const { token, user } = action.payload;
        localStorage.setItem('user', JSON.stringify(user));
        context.setIsLogin(true);
        localStorage.setItem('token', token); 
        navigate('/');
        onClose();
      } else {
        setError(action.payload || 'Login failed.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const modalStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: colors.primary[900], 
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="admin-modal-title"
      aria-describedby="admin-modal-description"
    >
      <Box sx={modalStyles}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Avatar 
            src='https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg'
            width="100px"
          />
          <Typography variant="h4" fontWeight="bold" mt="14px" color={colors.primary[100]}>
            Login To Admin
          </Typography>
          <Box 
            component="form" 
            onSubmit={handleLogin} 
            sx={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '20px' }}
          >
            <TextField 
              name="username"
              variant="filled" 
              margin="normal" 
              label='Enter your email'
              fullWidth 
              required
            />
            <TextField 
              label="Password" 
              name="password" 
              variant="filled" 
              type={showPassword ? "text" : "password"} 
              margin="normal" 
              fullWidth 
              required
              InputProps={{
                endAdornment: (
                  <Button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? 'Hide' : 'Show'}
                  </Button>
                )
              }}
            />
            {error && <Typography color="error">{error}</Typography>} 
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              sx={{ marginTop: '20px' }}
              disabled={loading} 
            >
              {loading ? <CircularProgress size={24} /> : 'Login'}
            </Button>
          </Box>
        </Box>
        <Typography variant="h6" fontWeight="bold" mt="14px" mb="14px" color={colors.primary[100]}>
          Don't have an account?  
          <Button onClick={() => setSignUpModalOpen(true)} sx={{ marginLeft: '5px' }}>Sign Up</Button>
        </Typography>
        <AdminSignupModal isOpen={isSignUpModalOpen} onClose={() => setSignUpModalOpen(false)} />
      </Box>
    </Modal>
  );
};

export default AdminModal;
