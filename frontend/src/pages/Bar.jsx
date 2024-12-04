import React from 'react'
import { Box } from '@mui/material';
import Header from '../components/Admin/Header';
import BarChart from '../components/Admin/Charts/BarChart';
// import { useTheme } from '@mui/material';
// import { tokens } from '../../theme';
const Bar = () => {
    // const theme = useTheme()
    // const colors = tokens(theme.palette.mode)
    return (
        <Box m="20px" height="75vh" p="2px">
            <Header title="BAR CHART" subtitle="simple bar chart" />
            <BarChart />
        </Box>
    )
}

export default Bar