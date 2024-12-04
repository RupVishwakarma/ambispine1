import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Header from '../Header';
import { tokens } from '../../../theme';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box textAlign="left">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            </Box>
          
           
            <Box mt="20px">
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                            What is your return policy?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography textAlign="left">
                            We accept returns within 30 days of purchase. The product must be in its original condition and packaging.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                            How can I track my order?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography textAlign="left">
                            Once your order has been shipped, you will receive an email with a tracking number.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5"  color={colors.greenAccent[500]}>
                            Do you offer international shipping?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography textAlign="left">
                            Yes, we ship to select countries. Additional charges may apply for international orders.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                            What payment methods do you accept?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography textAlign="left">
                            We accept all major credit cards, PayPal, and Apple Pay.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
};

export default Faq;
