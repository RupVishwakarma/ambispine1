const Application = require('../models/Application');

// Create a new job application
exports.createApplication = async (req, res) => {
  try {
   
    const resumeUrl = req.file ? req.file.path : null;
    
    const newApplication = new Application({
      ...req.body,
      resumeUpload: resumeUrl, 
    });

    
    const savedApplication = await newApplication.save();

    res.status(201).json({
      message: 'Application created successfully',
      application: savedApplication
    });
  } catch (err) {
    res.status(500).json({ message: 'Error creating application', error: err.message });
  }
};
// exports.createApplication = async (req, res) => {
//   try {
//     const newApplication = new Application(req.body);
//     const savedApplication = await newApplication.save();
//     res.status(201).json({
//       message: 'Application created successfully',
//       application: savedApplication
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Error creating application', error: err.message });
//   }
// };

// Get all job applications

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().populate('job');
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching applications', error: err.message });
  }
};

// Get a specific application by ID
exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id).populate('job');
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.status(200).json(application);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching application', error: err.message });
  }
};

// Get applications for a specific job
exports.getApplicationsByJob = async (req, res) => {
  try {
    const applications = await Application.find({ job: req.params.jobId }).populate('job');
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching applications for the job', error: err.message });
  }
};

// Update a job application
exports.updateApplication = async (req, res) => {
  try {
  
    const resumeUrl = req.file ? req.file.path : null; 

    const updateData = {
      ...req.body,
    };

    if (resumeUrl) {
      updateData.resumeUpload = resumeUrl;
    }

    const updatedApplication = await Application.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedApplication) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json({
      message: 'Application updated successfully',
      application: updatedApplication
    });
  } catch (err) {
    res.status(500).json({ message: 'Error updating application', error: err.message });
  }
};

// Delete a job application
exports.deleteApplication = async (req, res) => {
  try {
    const deletedApplication = await Application.findByIdAndDelete(req.params.id);
    if (!deletedApplication) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.status(200).json({ message: 'Application deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting application', error: err.message });
  }
};
