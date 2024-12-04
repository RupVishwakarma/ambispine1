const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, 
  bio: { type: String, required: true }, 
  rating: { type: Number, min: 0, max: 5 }, 
  contactInfo: {
    phone: { type: String },
    email: { type: String, required: true }, 
    location:{type: String,required: true }
  },
  socialMedia: {
    instagram: { type: String,  },
    facebook: { type: String,  },
    twitter: { type: String, },
    linkedin: { type: String, },
  },
  imgSrc: { type: String ,required:false},
  dateJoined: { type: Date, default: Date.now }, 
}, { timestamps: true });

module.exports = mongoose.model('TeamMember', teamMemberSchema);
