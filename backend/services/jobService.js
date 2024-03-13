const Job = require('../models/job');

const createJob = async (jobData) => {
  try {
    const job = new Job(jobData);
    const savedJob = await job.save();
    return savedJob;
  } catch (error) {
    throw new Error('Error creating job: ' + error.message);
  }
};

const getAllJobs = async () => {
  try {
    const jobs = await Job.find();
    return jobs;
  } catch (error) {
    throw new Error('Error fetching jobs: ' + error.message);
  }
};

const updateJob = async (jobId, updatedJobData) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(jobId, updatedJobData, { new: true });
    return updatedJob;
  } catch (error) {
    throw new Error('Error updating job: ' + error.message);
  }
};

const deleteJob = async (jobId) => {
  try {
    await Job.findByIdAndDelete(jobId);
  } catch (error) {
    throw new Error('Error deleting job: ' + error.message);
  }
};

module.exports = {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
};
