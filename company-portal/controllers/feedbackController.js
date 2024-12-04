const Feedback = require('../models/Feedback');


// Create a new feedback entry
exports.createFeedback = async (req, res) => {
   try {
    const { name, email, rating, prodSer, improve,
       recommend, additional } = req.body;

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    const newFeedback = new Feedback({ name, email, message, rating, prodSer, improve, recommend, additional });
    const savedFeedback = await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully', feedback: savedFeedback });
  } catch (err) {
    console.error('Error submitting feedback:', err);
    res.status(500).json({ message: 'Error submitting feedback', error: err.message });
  }
};

// Get all feedback entries
exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json({ message: 'Fetched all feedback successfully', feedbacks });
  } catch (err) {
    console.error('Error fetching feedback:', err);
    res.status(500).json({ message: 'Error fetching feedback', error: err.message });
  }
};

// Get a specific feedback entry by ID
exports.getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json({ message: 'Fetched feedback successfully', feedback });
  } catch (err) {
    console.error('Error fetching feedback by ID:', err);
    res.status(500).json({ message: 'Error fetching feedback', error: err.message });
  }
};

// Update a feedback entry
exports.updateFeedback = async (req, res) => {
  try {
    if (req.body.rating && (req.body.rating < 1 || req.body.rating > 5)) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    const updatedFeedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, 
         { new: true, runValidators: true });
    if (!updatedFeedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json({ message: 'Feedback updated successfully', feedback: updatedFeedback });
  } catch (err) {
    console.error('Error updating feedback:', err);
    res.status(500).json({ message: 'Error updating feedback', error: err.message });
  }
};

// Delete a feedback entry
exports.deleteFeedback = async (req, res) => {
  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!deletedFeedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    console.error('Error deleting feedback:', err);
    res.status(500).json({ message: 'Error deleting feedback', error: err.message });
  }
};
