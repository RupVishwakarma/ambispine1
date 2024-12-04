const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rating: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 5  
  },
  date: { type: Date, default: Date.now }, 
  prodSer: { type: String, required: true }, 
  improve: { type: String }, 
  recommend: { type: Boolean },
  additional: { type: String } 
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
