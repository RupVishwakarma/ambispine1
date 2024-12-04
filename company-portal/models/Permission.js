// models/Permission.js
const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
    role: { type: String, enum: ['Admin', 'Moderator', 'User'], required: true },
    resource: { type: String, required: true }, // e.g., 'User', 'Post', 'Comment'
    actions: [{ type: String }], // e.g., ['create', 'read', 'update', 'delete']
});

module.exports = mongoose.model('Permission', permissionSchema);
