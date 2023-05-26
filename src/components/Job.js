import * as React from 'react';
import {Box,Paper,Card,CardActions,CardContent,Button,Typography}from '@mui/material';
import { Link } from 'react-router-dom';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Job({job}) {
  return (
    <Paper>
    <Card 
    sx={{ width: '435px',
          height:'230px'
          
     }}>
      <CardContent>
         <Box
         sx={{backgroundColor: job.logoBackground,
              width:'40px',
              hight:'80px',
              borderRadius:'50px',
            }}
         >
            <img 
            src={job.logo}
            style={{width:'100%'}}
            alt='logo'
            />
          </Box>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {job.postedAt}{bull}{job.contract}
        </Typography>
        <Typography variant="h5" component="div">
        <Link to={`/jobDetails/${job.position}`}>{job.position}</Link>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.company}
        </Typography>
      </CardContent>
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
    </Card>
    </Paper>
  );
}