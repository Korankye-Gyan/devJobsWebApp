import * as React from 'react';
import {Box,Paper,Card,CardActions,CardContent,Button,Typography}from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
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
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{ ease: 'easeInOut' }}
    >
    <Paper>
    <Card 
    sx={{ minHeight:'210px',
          width:{
           xs:'300px',
           sm:'300px',
           md:'400px',
           lg:'320px',
           xl:'320px'
          },
          marginTop:'40px'
        }}>
      <CardContent>
         <Box
         sx={{backgroundColor: job.logoBackground,
              width:'50px',
              hight:'30px',
              borderRadius:'15px',
              display:'flex',
              justifyContent:"center",
              alignItem:'center',
              padding:'15px',
              position:'absolute', // To position the img higher than the card
              marginTop:'-50px'    // To position the img higher than the card
            }}
         >
            <img 
            src={job.logo}
            style={{width:'20px',height:'20px'}}
            alt='logo'
            />
          </Box>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {job.postedAt}{bull}{job.contract}
        </Typography>
        <Typography variant="h5" component="div">
        <Link to={`/jobDetails/${job.id}`} className='position_Link'>{job.position}</Link>
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
    </motion.main>
  );
}