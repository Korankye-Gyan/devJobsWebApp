import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Box,Paper,Card,CardActions,CardContent,Typography,Button}from '@mui/material';
import Buttons from '../components/Buttons';


const Jobdetails = () => {
  const [jobs, setJobs] = useState([]);
  const {position} = useParams();
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
    <Box>
    <Paper>
      <Card>
        <CardContent>
        <Box
         sx={{backgroundColor: job.logoBackground,
              width:'40px',
              hight:'80px',
            }}
         >
            <img 
            src={job.logo}
            style={{width:'100%'}}
            alt='logo'
            />
          </Box>
          <Typography variant="h4" component="div">
          {job.company}
          </Typography>
          
          <CardActions sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {job.website}
          </CardActions>  
          
        <CardActions>
        <Buttons name='Company Site'/>
      </CardActions>
        </CardContent>
      </Card>
    </Paper>

    <Box>
      <Box>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {job.postedAt}{bull}{job.contract}
        </Typography>
        <CardContent>
          <Typography variant="h4" component="div">
          {job.position}
          </Typography>
 
          <CardActions>
        <Button size="small" 
          sx={{ textTransform: 'none',
          color:'#5964E0',
          paddingBottom:'5px'
          }}
        >
          {job.location}
        </Button>
      </CardActions>
    </CardContent>
      </Box>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {job.description}
        </Typography>
        <Typography variant="h5" component="div">
          Requirements
        </Typography>
        <Typography variant="p" component="div">
          {job.requirements.content}
        </Typography>
        <Typography variant="p" component="div">
          {job.requirements.items}
        </Typography>
        <Typography variant="h5" component="div">
          WHAT YOU WILL DO
        </Typography>
        <Typography variant="p" component="div">
          {job.role.content}
        </Typography>
        <Typography variant="p" component="div">
          {job.role.items}
        </Typography>




        <Paper>
      <Card>
        <CardContent>
          <Typography variant="h4" component="div">
          {job.company}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          So Digital Inc.
           </Typography>
          
          <CardActions sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {job.website}
          </CardActions>  
          
        <CardActions>
        <Buttons name='Apply Now'/>
      </CardActions>
        </CardContent>
      </Card>
    </Paper>
    </Box>
    </Box>
    
  );
}

export default Jobdetails;