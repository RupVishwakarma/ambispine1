const TeamMember = require('../models/TeamMember'); 
const ErrorHandler = require('../utils/errorhandler');

// Create a new Team Member
exports.createTeamMember = async (req, res, next) => {
    try {
        console.log('Request Body:', req.body);
        console.log('Uploaded File:', req.file);
        
        const newMember = new TeamMember({
            ...req.body,
            imgSrc: req.file ? req.file.path : null,
        });

        await newMember.save();
        res.status(201).json(newMember);
    } catch (error) {
        next(new ErrorHandler('Error creating team member', 400));
    }
};

// Get all Team Members
exports.getAllTeamMembers = async (req, res, next) => {
    try {
        const teams = await TeamMember.find();
        res.status(200).json({ message: 'Fetched all team members successfully', teams });
    } catch (err) {
        next(new ErrorHandler('Error fetching team members', 400));
    }
};

// Get a specific Team Member by ID
exports.getTeamMemberById = async (req, res, next) => {
    try {
        const team = await TeamMember.findById(req.params.id);
        if (!team) {
            return next(new ErrorHandler('Team member not found', 404));
        }
        res.status(200).json({ message: 'Fetched team member successfully', team });
    } catch (err) {
        next(new ErrorHandler('Error fetching team member', 400));
    }
};

// Update a Team Member
exports.updateTeamMember = async (req, res, next) => {
    try {
        const { name, role, bio, contactInfo, socialMedia } = req.body;
        const imageUrl = req.file ? req.file.path : null;

        const updatedTeamMember = await TeamMember.findByIdAndUpdate(
            req.params.id,
            { name, role, bio, contactInfo, socialMedia, imgSrc: imageUrl },
            { new: true, runValidators: true }
        );

        if (!updatedTeamMember) {
            return next(new ErrorHandler('Team member not found', 404));
        }

        res.status(200).json({ message: 'Team member updated successfully', team: updatedTeamMember });
    } catch (err) {
        next(new ErrorHandler('Error updating team member', 400));
    }
};

// Delete a Team Member
exports.deleteTeamMember = async (req, res, next) => {
    try {
        const deletedTeamMember = await TeamMember.findByIdAndDelete(req.params.id);
        if (!deletedTeamMember) {
            return next(new ErrorHandler('Team member not found', 404));
        }
        res.status(200).json({ message: 'Team member deleted successfully' });
    } catch (err) {
        next(new ErrorHandler('Error deleting team member', 400));
    }
};
