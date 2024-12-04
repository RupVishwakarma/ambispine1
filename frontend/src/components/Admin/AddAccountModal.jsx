import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';

const AddAccountModal = ({ open, onClose, onAddAccount }) => {
  const [accountName, setAccountName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!accountName || !email) {
      setError('All fields are required!');
      return;
    }

    
    onAddAccount({ accountName, email });

    
    setAccountName('');
    setEmail('');
    setError('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Another Account</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="Account Name"
            variant="outlined"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            required
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <DialogActions>
            <Button onClick={onClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add Account
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAccountModal;
