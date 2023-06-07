import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Box,Card,CardActions,CardContent,Typography,Button} from '@mui/material';
import Buttons from '../components/Buttons';
import { motion } from "framer-motion"
//import {ReactSVG} from 'react-svg';




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
  } //To fix an error in browser loading page of Jobdetails
 

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
      <Box sx={{ margin: '0 60px', 
                position:'relative', // To position the contaiiner on header
                marginTop:'-70px',    // To position the container on header
              }}>
          <Card>
              <Box
                sx={{
                  display:{
                    xl:'flex',
                    lg:'flex',
                    md:'flex',
                    sm:'block',
                    xs:'block',
                  },
                  
                }}
              >
                <Box
                  sx={{
                    backgroundColor: job.logoBackground,
                    width: '100px',
                    hight: '90px',
                    padding: '10px',
                  }}
                >
                  <img
                    src={job.logo}
                    style={{ width: '30px', height: '30px' }}
                    alt="logo"
                    onLoad={() => console.log('Image loaded:', job.logo)}
                    onError={() => console.log('Image failed to load:', job.logo)}
                  />
                </Box>
                <Box sx={{padding:'30px 20px'}}>
                  
                  <Typography variant="h5" component="div">
                    {job.company}
                  </Typography>
                  <Box sx={{
                         display:{
                          xl:'flex',
                          lg:'flex',
                          md:'flex',
                          sm:'block',
                          xs:'block'
                        },
                        gap:{
                          sx:'5rem',
                          sm:'10rem',
                          md:'25rem',
                          lg:'39rem',
                          xl:'49rem'
                        },
                  }}
                  >
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
              display:{
                xl:'flex',
                lg:'flex',
                md:'flex',
                sm:'block',
                xs:'block'
              },
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
              justifyContent: 'space-evenly',
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
        </motion.main>
    </>
  );
};

export default Jobdetails;
