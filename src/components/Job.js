import * as React from 'react';
import {Box,Paper,Card,CardActions,CardContent,Button,Typography}from '@mui/material';

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
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {job.postedAt}{bull}{job.contract}
        </Typography>
        <Typography variant="h5" component="div">
          {job.position}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.company}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" 
          sx={{ textTransform: 'none',
          color:'#5964E0'
          }}
        >
          {job.location}
        </Button>
      </CardActions>
    </Card>
    </Paper>
  );
}