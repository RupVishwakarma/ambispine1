import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import ProgressCircle from './Progress';

const StatBox = ({ icon, progress, increase, title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px" p="10px 0 10px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* Icon and Title */}
        <Box>
          {icon}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>

        {/* Progress Circle */}
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>

      {/* Subtitle and Increase */}
      <Box display="flex" justifyContent="space-between" mt="10px">
        <Typography
          variant="h5"
          sx={{ color: colors.greenAccent[600] }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
