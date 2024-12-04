const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const { uploadResume } = require('../middlewar/upload');

router.post('/applications',uploadResume.single('resumeUpload'), applicationController.createApplication);


router.get('/applications', applicationController.getAllApplications);


router.get('/applications/:id', applicationController.getApplicationById);


router.get('/applications/job/:jobId', applicationController.getApplicationsByJob);

router.put('/applications/:id', uploadResume.single('resumeUpload'), applicationController.updateApplication);


router.delete('/applications/:id', applicationController.deleteApplication);

module.exports = router;
