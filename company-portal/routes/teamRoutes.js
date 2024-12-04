const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/TeamController');
const { uploadImage } = require('../middlewar/upload'); 
const multer = require('multer');

router.post('/', uploadImage.single('image'), TeamController.createTeamMember);

router.get('/', TeamController.getAllTeamMembers);


router.get('/:id', TeamController.getTeamMemberById);

router.put('/:id', uploadImage.single('image'), TeamController.updateTeamMember);

router.delete('/:id', TeamController.deleteTeamMember);

module.exports = router;
