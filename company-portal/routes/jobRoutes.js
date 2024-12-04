const express = require("express");
const router = express.Router();

const { uploadResume } = require('../middlewar/upload');

const { createJobApplication, updateJobApplication, deleteJobApplication } = require("../controllers/jobController");

router.post("/job-application", uploadResume.single("resume"), createJobApplication);

router.put("/job-application/:id",uploadResume.single("resume"), updateJobApplication);


router.delete("/job-application/:id", deleteJobApplication);

module.exports = router;