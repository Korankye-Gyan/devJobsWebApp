import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Box,Card,CardActions,CardContent,Typography,Button} from '@mui/material';
import Buttons from '../components/Buttons';

const Jobdetails = () => {
  const [jobs, setJobs] = useState([]);
  const { position } = useParams();
  const job = jobs.find(job => job.position === position);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setJobs(data));
  }, []);

  if (!job) {
    return <div>Loading...</div>;
  }

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <>
      <Box sx={{ margin: '0 60px' }}>
        
          <Card>
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: job.logoBackground,
                    width: '90px',
                    hight: '90px',
                    padding: '10px'
                  }}
                >
                  <img
                    src={job.logo}
                    style={{ width: '30px', height: '30px' }}
                    alt="logo"
                  />
                </Box>
                <Box sx={{padding:'30px 20px'}}>
                  
                  <Typography variant="h5" component="div">
                    {job.company}
                  </Typography>
                  <Box sx={{display:'flex',gap:'39rem'}}>
                  <Box
                    color="text.secondary"
                  >
                    {job.website}

                  </Box>
                  <Box>
                    <Buttons name='Company Site'/>
                  </Box>
                   </Box>
                </Box>
              </Box>
          </Card>   
         <Card sx={{margin: '30px 0', 
                    padding: '50px',
                  }}>
            <CardContent>
          <Box>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              {job.postedAt}
              {bull}
              {job.contract}
            </Typography>
             <Box 
             sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            <Typography variant="h4" component="div">
              {job.position}
            </Typography>

            <CardActions>
              <Buttons name="Apply Now" />
            </CardActions>
            </Box>

            <Button
              size="small"
              sx={{
                textTransform: 'none',
                color: '#5964E0',
                paddingBottom: '5px'
              }}
            >
              {job.location}
            </Button>

          </Box>
          <Typography variant="p" componen="div">
            {job.description}
          </Typography>
          <Typography sx={{ margin: '15px 0' }} variant="h5" component="div">
            Requirements
          </Typography>
          <Typography variant="p" component="div">
            {job.requirements.content}
          </Typography>
          <Typography variant="p" component="div">
            {job.requirements.items}
          </Typography>
          <Typography sx={{ margin: '15px 0' }} variant="h5" component="div">
            WHAT YOU WILL DO
          </Typography>
          <Typography variant="p" component="div">
            {job.role.content}
          </Typography>
          <Typography variant="p" component="div">
            {job.role.items}
          </Typography>

          </CardContent>
        </Card>

        
      </Box>

      <Card>
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Typography variant="h4" component="div">
                {job.position}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                So Digital Inc.
              </Typography>
            </Box>

            <CardActions>
              <Buttons name="Apply Now" />
            </CardActions>
          </CardContent>
        </Card>
    </>
  );
};

export default Jobdetails;
