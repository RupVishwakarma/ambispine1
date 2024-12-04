import React, { useContext, useState } from 'react';
import { Modal, Box, Typography, Button, TextField, Avatar, Select, MenuItem, FormControl, InputLabel, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles'; 
import { tokens } from '../../theme'; 
import { MyContext } from '../../App';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/admin/slice/authSlice';
import { toast } from 'react-toastify'; 

const roles = ['Admin', 'HR', 'Project']; 

const AdminSignupModal = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const context = useContext(MyContext);
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    role: 'Admin', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRoleChange = (e) => {
    handleChange(e); 
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    // Simple client-side validation
    if (!formData.username.includes('@')) {
      setError('Please enter a valid email.');
      setLoading(false);
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    try {
      await dispatch(signup(formData));
      toast.success('Signup successful!');
      setFormData({
        fullName: '',
        username: '',
        password: '',
        role: 'Admin', 
      });
      onClose(); 
    } catch (err) {
      setError(err.message || 'An error occurred during signup');
      toast.error(err.message || 'An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="admin-signup-modal-title"
      aria-describedby="admin-signup-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: colors.primary[900], 
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Avatar 
            src='https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg'
            width="100px"
          />
          <Typography variant="h4" fontWeight="bold" mt="14px" color={colors.primary[100]}>
            Sign Up To Admin
          </Typography>
          <Box 
            component="form" 
            onSubmit={handleSignup} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              width: '100%', 
              padding: '20px',
            }}
          >
            <TextField 
              name="fullName"
              variant="filled" 
              margin="normal" 
              label='Enter your full name'
              fullWidth 
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <TextField 
              name="username"
              variant="filled" 
              margin="normal" 
              label='Enter your email'
              fullWidth 
              required
              value={formData.username}
              onChange={handleChange}
            />
            <TextField 
              label="Password" 
              name="password" 
              variant="filled" 
              type={showPassword ? "text" : "password"} 
              margin="normal" 
              fullWidth 
              required
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <Button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? 'Hide' : 'Show'}
                  </Button>
                )
              }}
            />
            <FormControl variant="filled" margin="normal" fullWidth>
              <InputLabel id="role-select-label">Role</InputLabel>
              <Select
                labelId="role-select-label"
                value={formData.role} 
                onChange={handleRoleChange} 
              >
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>{role}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {error && <Typography color="error">{error}</Typography>} 
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              sx={{ marginTop: '20px' }}
              disabled={loading} 
            >
              {loading ? <CircularProgress size={24} /> : 'Sign Up'}
            </Button>
          </Box>
        </Box>
        <Typography variant="h6" fontWeight="bold" mt="14px" mb="14px" color={colors.primary[100]}>
          Already have an account?
          <Button onClick={onClose} sx={{ marginLeft: '5px' }}>Login</Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default AdminSignupModal;
