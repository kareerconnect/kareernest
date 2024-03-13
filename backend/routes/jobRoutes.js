const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/add', jobController.createJob);
router.get('/getall', jobController.getAllJobs);
router.put('/update/:id', jobController.updateJob);
router.delete('/delete/:id', jobController.deleteJob);

module.exports = router;