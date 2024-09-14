const express = require('express');
const { postAssignment,getAssignments } = require('../controllers/assignmentController');

const router = express.Router();

router.post('/post', postAssignment);
router.get('/list', getAssignments);

module.exports = router;

