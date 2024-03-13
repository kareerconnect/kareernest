const jobService = require('../services/jobService');

const createJob = async (req, res) => {
  try {
    const newJob = await jobService.createJob(req.body);
    res.status(201).json({ message: 'Job created successfully', job: newJob });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await jobService.getAllJobs();
    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};

const updateJob = async (req, res) => {
  const jobId = req.params.id;
  try {
    const updatedJob = await jobService.updateJob(jobId, req.body);
    res.status(200).json({ message: 'Job updated successfully', job: updatedJob });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};

const deleteJob = async (req, res) => {
  const jobId = req.params.id;
  try {
    await jobService.deleteJob(jobId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};

module.exports = {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
};
