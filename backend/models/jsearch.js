const mongoose = require('mongoose');

const jsearchSchema = new mongoose.Schema({
  job_id: String,
  employer_name: String,
  employer_logo: String,
  employer_website: String,
  employer_company_type: String,
  job_publisher: String,
  job_employment_type: String,
  job_title: String,
  job_apply_link: String,
  job_description: String,
  // Add more fields as needed
});

const JSearch = mongoose.model('JSearch', jsearchSchema);

module.exports = JSearch;
