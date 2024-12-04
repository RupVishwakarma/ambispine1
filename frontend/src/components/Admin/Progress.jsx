import React from 'react';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        width: `${size}px`,
        height:`${size}px`,
        borderRadius: '50%',
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%), 
          conic-gradient(${colors.greenAccent[500]} ${angle}deg, ${colors.blueAccent[500]} 0deg)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '75%',
          height: '75%',
          borderRadius: '50%',
          backgroundColor: colors.primary[400],
        }}
      />
    </Box>
  );
};

export default ProgressCircle;
