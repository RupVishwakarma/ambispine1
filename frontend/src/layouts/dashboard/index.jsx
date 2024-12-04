import React from 'react';
import Header from '../../components/Admin/Header';
import { Box, Button, IconButton, Typography, useMediaQuery, useTheme, Grid } from '@mui/material';
import { tokens } from '../../theme';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import StatBox from '../../components/Admin/StatBox';
import LineChart from '../../components/Admin/Charts/LineChart';
import { mockTransaction } from '../../data/mockData';
import ProgressCircle from '../../components/Admin/Progress';
import BestEmployee from './BestEmployee';
import GeographyChart from '../../components/Admin/Charts/GeographyChart';
import BarChart from '../../components/Admin/Charts/BarChart';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box m="20px">
      {/* Header */}
      <Box
        display="flex"
        flexDirection={isSmScreen ? 'column' : 'row'}
        justifyContent={isSmScreen ? 'center' : 'space-between'}
        alignItems="center"
        mb={3}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Button
          sx={{
            backgroundColor: colors.greenAccent[700],
            color: colors.grey[100],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 20px',
            mt: isSmScreen ? '15px' : '0',
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: '10px' }} />
          Download Reports
        </Button>
      </Box>

       {/* Stat Boxes */}
      <Grid container spacing={3}>
      
        <Grid item xs={12} sm={6} md={3}>
          <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" p={2}>
            <StatBox
              title="12,345"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={<EmailIcon sx={{ color: colors.greenAccent[400] }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" p={2}>
            <StatBox
              title="12,345"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={<EmailIcon sx={{ color: colors.greenAccent[400] }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" p={2}>
            <StatBox
              title="12,345"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={<EmailIcon sx={{ color: colors.greenAccent[400] }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" p={2}>
            <StatBox
              title="12,345"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={<EmailIcon sx={{ color: colors.greenAccent[400] }} />}
            />
          </Box>
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} md={8}>
          <Box backgroundColor={colors.primary[400]} p={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                  Revenue Generated
                </Typography>
                <Typography variant="h3" fontWeight="500" color={colors.greenAccent[500]}>
                  $345,574
                </Typography>
              </Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: '24px', color: colors.greenAccent[600] }} />
              </IconButton>
            </Box>
            <Box height="210px" mt="-20px">
              <LineChart />
            </Box>
          </Box>
        </Grid>

        
        <Grid item xs={12} md={4}>
          <Box backgroundColor={colors.primary[400]} p={2} height="350px" overflow="auto">
            <Typography variant="h5" fontWeight="600" mb={2} color={colors.grey[100]}>
              Recent Payment
            </Typography>
            {mockTransaction.map((transaction, i) => (   
                  <Box key={i} display="flex" justifyContent="space-between" p={1}
                   textAlign="left" borderBottom={`4px solid ${colors.primary[500]}`}>
                   <Box>
                  <Typography variant="h6" color={colors.grey[100]}>
                    {transaction.employeeName}
                  </Typography>
                  <Typography color={colors.grey[100]}>{transaction.position}</Typography>
                </Box>
                <Typography color={colors.grey[100]}>{transaction.paymentDate}</Typography>
                <Box
                  color={transaction.status === 'Paid' ? colors.greenAccent[500] : colors.redAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  {transaction.status}
                </Box>
                <Typography color={colors.grey[100]} fontWeight="600">
                  ${transaction.salary.toLocaleString()}
                </Typography>
                  </Box>
            ))}
          </Box>
          
        </Grid>

        {/* Campaign */}
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[400]} p="30px">
            <Typography variant="h5" fontWeight="600">Campaign</Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
              <ProgressCircle size="125" />
              <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
                $48,352 revenue generated
              </Typography>
              <Typography>Includes extra misc expenditures and costs</Typography>
            </Box>
          </Box>
        </Grid>

       
        <Grid item xs={12} md={6}>
          <Box backgroundColor={colors.primary[400]} p="30px">
            <Typography variant="h5" fontWeight="600">Sales Quantity</Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>

      
        <Grid item xs={12}>
          <Box backgroundColor={colors.primary[400]} padding="30px">
            <Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}>
              Geography Based Traffic
            </Typography>
            <Box height="200px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>

        {/* Best Employee */}
        <Grid item xs={12}   style={{ width: "100%" }}>
          <BestEmployee />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
