const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },  
  graduationYear: { type: Number },  
  currentOrg: { type: String },  
  expYear: { type: Number },  
  expMonth: { type: Number },  
  currentCTC: { type: Number },  
  expectedCTC: { type: Number },  
  noticePeriod: { type: String },  
  currentState: { type: String },  
  currentCity: { type: String },  
  position: { type: String },  
  higherQualification: { type: String },  
  willingRelocate: { type: Boolean },  
  resumeUpload: { type: String }, 
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Career' },
  createdAt: { type: Date, default: Date.now },  
});

module.exports = mongoose.model('Application', applicationSchema);
