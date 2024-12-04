import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { Box, Typography } from '@mui/material'; 
import { fetchCareers } from '../../../redux/admin/slice/careerAdminSlice';
import { useDispatch, useSelector } from 'react-redux';
import JobTable from './JobTable';

const JobManagement = () => {
    const dispatch = useDispatch();
    const { careers, loading, error } = useSelector((state) => state.careerAdmin);
    useEffect(() => {
        dispatch(fetchCareers());
    }, [dispatch]);

   
    const jobs = careers?.data?.map(career => ({
        id: career?._id,
        jobTitle: career?.jobTitle,
        jobDescription: career?.jobDescription,
        department: career?.department,
        location: career?.location,
        salaryRange: career?.salaryRange,
        jobCategory: career?.jobCategory,
        employmentType: career?.employmentType,
        requirements: career?.requirements, 
        responsibilities: career?.responsibilities,
        postingDate: career?.postingDate,
        closingDate: career?.closingDate,
        companyOverview: career?.companyOverview,
        benefits: career?.benefits, 
        openings:career?.openings,
        interviewProcess:career?.interviewProcess,
        applicationProcess: career?.applicationProcess,
        preferredQualifications: career?.preferredQualifications,
        closingDate:career?.closingDate,
         
    })) || [];
    

    const handleEdit = (jobId) => {
        console.log(`Editing job with ID: ${jobId}`);
       
    };

    const handleDelete = (jobId) => {
        console.log(`Deleted job with ID: ${jobId}`);
        
    };

  

    return (
        <Box m="20px">
            <Box textAlign="left" mb="20px">
                <Header title="Job Management" subtitle="View Job Information" />
            </Box>
            <JobTable jobs={jobs} onEdit={handleEdit}  />
        </Box>
    );
};

export default JobManagement;
