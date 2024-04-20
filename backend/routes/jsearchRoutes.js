const express = require('express');
const router = express.Router();
const axios = require('axios');
const JSearch = require('../models/jsearch');
require('dotenv').config();

router.get('/fetch-jobs/:query', async (req, res) => {
    try {
        const query = req.params.query;

        const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
            params: {
                query: query,
                num_pages: 1,
            },
            headers: {
                'x-rapidapi-host': 'jsearch.p.rapidapi.com',
                'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            },
        });

        //console.log(response.data);

        if (response.status === 200) { 
            const responseData = response.data;

            if (responseData.data && Array.isArray(responseData.data)) {
                const savedJobs = await Promise.all(responseData.data.map(async (jobData) => {
                    try {

                        const jSearch = new JSearch({
                            job_id: jobData.job_id,
                            employer_name: jobData.employer_name,
                            employer_logo: jobData.employer_logo,
                            employer_website: jobData.employer_website,
                            employer_company_type: jobData.employer_company_type,
                            job_publisher: jobData.job_publisher,
                            job_employment_type: jobData.job_employment_type,
                            job_title: jobData.job_title,
                            job_apply_link: jobData.job_apply_link,
                            job_description: jobData.job_description,
                            // Add more fields as needed
                        });

 
                        await jSearch.save();
                        return jSearch;
                    } catch (error) {
                        console.error('Error saving job to database:', error);
                        return null;
                    }
                }));


                const filteredJobs = savedJobs.filter(job => job !== null);

                return res.json({
                    status: 'OK',
                    request_id: responseData.request_id,
                    parameters: responseData.parameters,
                    data: filteredJobs,
                });
            } else {
                return res.status(500).json({ error: 'No job data found in response' });
            }
        } else {
            return res.status(500).json({ error: 'Failed to fetch jobs. Invalid response status.' });
        }
    } catch (error) {
        console.error('Error fetching and saving jobs:', error);
        return res.status(500).json({ error: 'Failed to fetch and save jobs' });
    }
});

router.get('/jobs', async (req, res) => {
    try {

        const savedJobs = await JSearch.find();


        if (savedJobs.length > 0) {
            return res.json({
                status: 'OK',
                data: savedJobs,
            });
        } else {
            return res.status(404).json({ error: 'No saved jobs found' });
        }
    } catch (error) {
        console.error('Error fetching saved jobs:', error);
        return res.status(500).json({ error: 'Failed to fetch saved jobs' });
    }
});

module.exports = router;
