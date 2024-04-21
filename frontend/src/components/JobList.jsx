import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, CardActions, Button } from '@mui/material';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    document.body.className = 'home-page';
    fetchJobs();
    return () => {
      document.body.className = '';
    };
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
    <Grid container spacing={3} justifyContent="center" margin={"auto"}>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <Card sx={{ maxWidth: 345, minHeight: 350, maxHeight: 350, margin: 2, backgroundColor: 'transparent' }} item key={job._id}>
            <CardContent sx={{maxHeight:300,minHeight:300}}>
              <div className='flex flex-row max-h-1/3'>
              <Typography variant="h6" className='w-1/2'>{job.job_title}</Typography>
              <img className='w-1/2 object-fill' src={job.employer_logo} alt={job.employer_name} style={{marginBottom: '10px' }} />
              </div>
              <Typography variant="subtitle1">{job.employer_name}</Typography>
              <Typography variant="body2" color="textSecondary">{job.job_description.substring(0, 100)}</Typography>
            </CardContent>
            <CardActions>
              <Button href={job.job_apply_link} target="_blank" size="small">Apply Now</Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <Grid item>
          <Typography variant="body1">No jobs found</Typography>
        </Grid>
      )}
    </Grid >
  );
};

export default JobList;
