const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  experience: {
    type: String
  },
  education: {
    type: String
  },
  resume: {
    type: String, 
  },
  skills: {
    type: [String], 
  },
  message: {
    type: String
  },
  appliedAt: {
    type: Date,
    default: Date.now
  }
},{ timestamps: true });

const JobApplication = mongoose.model("Job", jobApplicationSchema);

module.exports = JobApplication;
