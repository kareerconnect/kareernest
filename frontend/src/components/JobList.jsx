import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, CardActions, Button } from '@mui/material';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('api/jsearch/jobs');
      setJobs(response.data.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <Grid item key={job._id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{job.job_title}</Typography>
                <Typography variant="subtitle1">{job.employer_name}</Typography>
                <img src={job.employer_logo} alt={job.employer_name} style={{ maxWidth: '100%', maxHeight: '100px', marginBottom: '10px' }} />
                <Typography variant="body2" color="textSecondary">{job.job_description.substring(0, 100)}</Typography>
              </CardContent>
              <CardActions>
                <Button href={job.job_apply_link} target="_blank" size="small">Apply Now</Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      ) : (
        <Grid item>
          <Typography variant="body1">No jobs found</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default JobList;
