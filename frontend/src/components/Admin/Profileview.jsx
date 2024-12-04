import React, { useState } from "react";
import {
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    Typography,
    Stack,
    Modal,
    TextField,
  } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const ProfileView = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ p: 4,backgroundColor:colors.primary[400],borderRadius:"4px" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" 
        m="10px" p="10px" sx={{ 
            mb: 4, textAlign: "left",
            backgroundColor:colors.primary[700],
            borderRadius:"10px" }}
        >
          <Typography variant="h4" fontWeight="bold">
            Profile Overview
          </Typography>
          <Button
            variant="outlined"
            onClick={handleOpen}
            startIcon={<EditIcon />}
            sx={{
                backgroundColor:colors.greenAccent[400],
                color: colors.grey[100],
                fontSize: '12px',
                fontWeight: 'semibold',
                padding: '5px 10px',
                borderRadius: "24px"
              }}

          >
            Edit Profile
          </Button>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Profile Picture & Personal Info */}
<Grid container spacing={1} m="10px" p="10px" sx={{ 
    mb: 4, textAlign: "left",
    backgroundColor:colors.primary[700],
    borderRadius:"10px" }}>
  {/* Profile Picture */}
  <Grid item xs={12} md={4}>
    <Stack alignItems="center">
      <Avatar
        src="https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg"
        alt="Profile Picture"
        sx={{ width: 150, height: 150, mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ textTransform: "none", borderRadius: "20px" }}
      >
        Upload New Picture
      </Button>
    </Stack>
  </Grid>

  {/* Personal Information */}
  <Grid item xs={12} md={8}>
    <Box >
      <Typography variant="h5" fontWeight="bold">
        Akash Kumar Singh
      </Typography>
      <Typography variant="body1">akashkumar@gmail.com</Typography>
      <Typography variant="body1">+1 123 456 7890</Typography>
      <Typography variant="body1">Mumbai, India</Typography>
    </Box>
    <Divider sx={{ my: 2 }} />
    <Box>
      <Typography variant="h6" fontWeight="bold">
        Profile last updated - 08 Oct, 2024
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        <strong>Location:</strong> New Delhi, INDIA
      </Typography>
      <Typography variant="body1">
        <strong>Experience:</strong> Fresher
      </Typography>
      <Typography variant="body1">
        <strong>Availability:</strong> Available to join in 2 Months
      </Typography>
      <Typography variant="body1">
        <strong>Phone:</strong> 8210417835
      </Typography>
      <Typography variant="body1">
        <strong>Email:</strong> akashkumar@gmail.com
      </Typography>
    </Box>
  </Grid>
</Grid>

        <Divider sx={{ my: 4 }} />

        {/* Job Preferences */}
        <Box m="10px" p="10px" sx={{ 
    mb: 4, textAlign: "left",
    backgroundColor:colors.primary[700],
    borderRadius:"10px" }}>
          <Typography variant="h6" fontWeight="bold">
            Job Preferences
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="textSecondary">
                Preferred Location
              </Typography>
              <Typography variant="body1">New York, NY</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="textSecondary">
                Expected Salary
              </Typography>
              <Typography variant="body1">$100,000 - $120,000</Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Experience */}
        <Box m="10px" p="10px" sx={{ 
    mb: 4, textAlign: "left",
    backgroundColor:colors.primary[700],
    borderRadius:"10px" }}>
          <Typography variant="h6" fontWeight="bold">
            Experience
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="textSecondary">
                Company
              </Typography>
              <Typography variant="body1">AmbiSpine Technologies</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="textSecondary">
                Role
              </Typography>
              <Typography variant="body1">Software Engineer</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary">
                Duration
              </Typography>
              <Typography variant="body1">March 2024 - Present</Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />
{/* Education Section */}
<Box m="10px" p="10px" sx={{ 
    mb: 4, textAlign: "left",
    backgroundColor:colors.primary[700],
    borderRadius:"10px" }}>
  <Typography variant="h6" fontWeight="bold">
    Education
  </Typography>
  <Grid container spacing={2} sx={{ mt: 1 }}>
    <Grid item xs={12} sm={6}>
      <Typography variant="body2" color="textSecondary">
        Degree
      </Typography>
      <Typography variant="body1">BCA (Computers)</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="body2" color="textSecondary">
        Institution
      </Typography>
      <Typography variant="body1">Magadh University</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body2" color="textSecondary">
        Year
      </Typography>
      <Typography variant="body1">2022 - 2024 (Full Time)</Typography>
    </Grid>

    {/* Class XII */}
    <Grid item xs={12} sm={6}>
      <Typography variant="body2" color="textSecondary">
        Class XII
      </Typography>
      <Typography variant="body1">Bihar Board</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body2" color="textSecondary">
        Year
      </Typography>
      <Typography variant="body1">2021</Typography>
    </Grid>

    {/* Class X */}
    <Grid item xs={12} sm={6}>
      <Typography variant="body2" color="textSecondary">
        Class X
      </Typography>
      <Typography variant="body1">State Board</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body2" color="textSecondary">
        Year
      </Typography>
      <Typography variant="body1">2020</Typography>
    </Grid>
  </Grid>
</Box>

{/* Projects Section */}
<Box m="10px" p="10px" sx={{ 
    mb: 4, textAlign: "left",
    backgroundColor:colors.primary[700],
    borderRadius:"10px" }}>
  <Typography variant="h6" fontWeight="bold">
    Projects
  </Typography>
  <Grid container spacing={2} sx={{ mt: 1 }}>
    <Grid item xs={12}>
      <Typography variant="body2" color="textSecondary">
        Project
      </Typography>
      <Typography variant="body1">E-commerce Platform</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body2" color="textSecondary">
        Description
      </Typography>
      <Typography variant="body1">
        Developed a fully functional e-commerce platform with features such as product listings, shopping cart, and checkout.
      </Typography>
    </Grid>
  </Grid>
</Box>

      </Box>
       {/* Edit Profile Modal */}
       <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{
          width: 400,
          backgroundColor:colors.primary[400],
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
          <Typography variant="h6" component="h2">
            Edit Profile
          </Typography>
          <TextField fullWidth label="Name" margin="normal" />
          <TextField fullWidth label="Email" margin="normal" />
          <TextField fullWidth label="Phone" margin="normal" />
          <TextField fullWidth label="Location" margin="normal" />
          <Button variant="contained" sx={{ mt: 2 }}>Save</Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default ProfileView;
